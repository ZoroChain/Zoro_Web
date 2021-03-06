/// <reference path="../tools/wwwtool.ts"/>
/// <reference path="../tools/WebHelper.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
namespace WebBrowser
{
    export class AppChainTool
    {
        static readonly zoroBCP = "0000000000000000000000000000000000000001";
        static readonly neoBCP = "d49d37845d0b0bf4ba7575509c44c6e9e98e6b6b";
        static readonly CNEO = "c074a05e9dcf0141cbe6b4b3475dd67baf4dcb60";
        static readonly CGAS = "74f2dc36a68fdc4682034178eb2220729231db76";

        static readonly Neotransfer = "0x04e31cee0443bb916534dad2adf508458920e66d";
        static readonly Zorotransfer = "0x67147557c0b6431e9b9297de26b46d9889434e49";

        static readonly RootChain = "0000000000000000000000000000000000000000";

        //跨链相关参数
        static readonly zoroBank = "0xb6a0b10d8cb60392068c16212f5e79fcacb18e67";
        static readonly zoroBankAddr = "ARDSBp77KGwnFctq4ETkdsesoE2LY28uwA";
        static readonly neoBank = "0x816c36f0318b3fdd4630c50ec76f16323e63f059";
        static readonly neoBankAddr = "APyRkzuadaczn1xSvQ3WXn5uEH6u5HK5K5";

        static readonly id_GAS: string = "0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
        static readonly id_NEO: string = "0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";

        static GAS = 0;
        static NEO = 0;
        
        static port:number = 15000;

        static chainName2Hash: { [id: string]: string } = {};
        static appChainLength:number = 1;
        static async initAllAppChain(){
            var allChainHash = await WWW.api_getAllAppChain();
            this.chainName2Hash["NEO"] = "NEO";
            this.chainName2Hash["AppRoot"] = AppChainTool.RootChain;
            this.appChainLength = 2; 
            for (var a in allChainHash){
                var chainHash = allChainHash[a];
                var chainName = await WWW.api_getAppChainName(chainHash);
                this.chainName2Hash[chainName] = chainHash;
                this.appChainLength++;
            }  
            WWW.chainHashLength = this.appChainLength;
            return this.chainName2Hash;          
        }

        static async updateAllAppChain(){
            var allChainHash = await WWW.api_getAllAppChain();
            this.chainName2Hash["NEO"] = "NEO";
            this.chainName2Hash["AppRoot"] = AppChainTool.RootChain;
            this.appChainLength = 2; 
            for (var a in allChainHash){
                var chainHash = allChainHash[a];
                var chainName = await WWW.api_getAppChainName(chainHash);
                this.chainName2Hash[chainName] = chainHash;
                this.appChainLength++;
            } 
            return this.chainName2Hash;          
        }

        static pubKey_List:{[id:string]:string} = {};
        static ip_List:{[id:string]:string} = {};

        static initAppChainSelectList(){
            for (var i = 0; i < 9; i++){
                this.pubKey_List["pubKey" + (i + 1)] = this.Node_List["node" + (i + 1)]["pubkey"];
                this.ip_List["ip" + (i + 1)] = this.Node_List["node" + (i + 1)]["ip"];
            }         
        }

        static createSelect(panel, type:string, num:number){
            var select = document.createElement("select");
            panel.appendChild(select);
            switch(type){
              case "pubkey":
                for (var name in AppChainTool.pubKey_List)
                {
                  var sitem = document.createElement("option");
                  sitem.text = name;
                  sitem.value = AppChainTool.pubKey_List[name];
                  select.appendChild(sitem);
                }                
              break;
              case "ip":
                for (var name in AppChainTool.ip_List)
                {
                  var sitem = document.createElement("option");
                  sitem.text = name;
                  sitem.value = AppChainTool.ip_List[name];
                  select.appendChild(sitem);
                }
              break;
            }     
            select.selectedIndex = num - 1;
            return select;       
        }

        static async getNativeBalanceOf(chainHash:string):Promise<string>{
          var sb = new ThinNeo.ScriptBuilder();
          var a = [];
          a.push("(hex160)" + this.zoroBCP);
          a.push("(addr)" + GUITool.address);
          sb.EmitParamJson(a);        
          sb.EmitPushString("BalanceOf");
          sb.EmitSysCall("Zoro.NativeNEP5.Call");
          sb.EmitPushBytes(this.zoroBCP.hexToBytes().reverse());
          sb.EmitPushString("Decimals");
          sb.EmitSysCall("Zoro.NativeNEP5.Call");

          var result = await this.InvokeZoroContract(sb, chainHash);
          var decimals = Number(result[0]["stack"][1]["value"]);
          var value = new Neo.BigInteger(result[0]["stack"][0]["value"]).toString();
          if (value.length < 8) {
            let s = "0.";
            for (var i = 0; i < 8 - value.length; i++) {
              s += "0";
            }
            value = s + value;
          }else{
            let s = value.substr(0, value.length - 8);
            s += ".";
            s += value.substr(value.length - 8);
            value = s;
          }
          return value;
        }

        static async SendNativeContract(presion:number, totalsupply:string, symbol:string, name:string, chainHash:any,pubkey:any,prikey:any){
          var sb = new ThinNeo.ScriptBuilder();
          sb = WebHelper.getScriptBuilderCreate(Nep5Type.NativeNep5, AppChainTool.zoroBCP, pubkey, presion, totalsupply, symbol, name);

          var scripthash = Neo.Cryptography.Sha256.computeHash(sb.ToArray());          
          scripthash = Neo.Cryptography.RIPEMD160.computeHash(scripthash);              

          var invokeResult = await this.InvokeZoroContract(sb, chainHash);
          var gasLimit = invokeResult[0]["gas_consumed"];

          var tran = this.getZoroTransaction(Neo.Fixed8.parse(gasLimit), Neo.Fixed8.One, sb.ToArray(), ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey));
          var result = this.SendZororawtransaction(tran, prikey, pubkey, chainHash);
          alert(JSON.stringify(result));

          //NativeNep5 Hash
          alert(new Neo.Uint160(scripthash).toString());
        }

        static async SendContract(need_storage:boolean,need_canCharge:boolean,description:string,email:string,
          auther:string,version:string, name:string, ContractAvm:any, chainHash:any,pubkey:any,prikey:any){
            var parameter__list = "0710".hexToBytes();
            var return_type = "05".hexToBytes();
            var storage = 1;
            var nep4 = 0;
            var canCharge = 4; 
            var sb = new ThinNeo.ScriptBuilder();
            storage = need_storage?storage:0;
            nep4 = nep4;
            canCharge = need_canCharge?canCharge:4;
            var ss = storage|nep4|canCharge;
            if (chainHash == "NEO")
              sb = WebHelper.getScriptBuilderCreate(Nep5Type.Neo, description, email, auther, version, name, ss, return_type, parameter__list, ContractAvm);
            else{
              sb = WebHelper.getScriptBuilderCreate(Nep5Type.Zoro, description, email, auther, version, name, ss, return_type, parameter__list, ContractAvm);
            }
         
            if (chainHash == "NEO"){
              var tran = await this.getNeoTransaction(sb, pubkey);
              let result = await this.SendNeorawtransaction(tran, prikey, pubkey);
              alert("txid=" + tran.GetHash().toHexString());
            }else{
              var invokeResult = await this.InvokeZoroContract(sb, chainHash);
              var gasLimit = invokeResult["gas_consumed"];
              let tran = this.getZoroTransaction(Neo.Fixed8.parse(gasLimit), Neo.Fixed8.One, sb.ToArray(), ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey));
              let result = this.SendZororawtransaction(tran, prikey, pubkey, chainHash);
              alert("txid=" + tran.GetHash().toHexString());
            }
                     
        }                   

        static async SendInvokeContractMethod(chainHash, pubkey, prikey, method, contract){
          var sb = this.getJointScriptBuilder(method, contract);            
          if (chainHash == "NEO"){
            var result = await this.InvokeNeoContract(sb);
          }else{
            var result = await this.InvokeZoroContract(sb, chainHash);
          }                
          return result;
        }

        static async SendContractMethod(chainHash, pubkey, prikey, method, contract){
            var sb = this.getJointScriptBuilder(method, contract);                     

            if (chainHash == "NEO"){
              var tran = await this.getNeoTransaction(sb, pubkey);
              var result = await this.SendNeorawtransaction(tran, prikey, pubkey);
              return tran.GetHash().toHexString();
            }else{
              var invokeResult = await this.InvokeZoroContract(sb, chainHash);
              var gasLimit = invokeResult["gas_consumed"];
              let tran = this.getZoroTransaction(Neo.Fixed8.parse(gasLimit), Neo.Fixed8.One, sb.ToArray(), ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey));
              var txid = await this.SendZororawtransaction(tran, prikey, pubkey, chainHash);
              return tran.GetHash().toHexString();
            }                                                
        }
        //拼接scriptbuilder合约调用
        static getJointScriptBuilder(method, contract):ThinNeo.ScriptBuilder{
          var sb = new ThinNeo.ScriptBuilder();
          for (var i = 0; i < method.length; i++) {
            var array = [];
            for (var j = 0; j < method[i]["params"].length; j++){
              var s = method[i]["params"][j];
              array.push(s);
            }
            sb.EmitParamJson(array);
            sb.EmitPushString(method[i]["methodName"]);
            sb.EmitAppCall(contract.hexToBytes().reverse());
          }  
          return sb;            
        }

        static async SendCreateAppChain(name:string, pubkey:Uint8Array, validators:string[], seedList:string[], prikey:any, chainHash:any){
            var sb = this.makeAppChainScriptBuilder(pubkey, validators, seedList);
            var invokeResult = await this.InvokeZoroContract(sb, chainHash);
            var gasLimit = invokeResult["gas_consumed"];
            var tran = this.getZoroTransaction(Neo.Fixed8.parse(gasLimit), Neo.Fixed8.One, sb.ToArray(), ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey));
            var txid = await this.SendZororawtransaction(tran, prikey, pubkey, chainHash);
            alert("this is txid = " + txid);
        }
        //发送Zoro交易
        static async SendZororawtransaction(tran:ThinNeo.ZoroTransaction, prikey, pubkey, chainHash:string):Promise<string>{
          var msg = tran.GetMessage();
          var signdata = ThinNeo.Helper.Sign(msg, prikey);
          tran.AddWitness(signdata, pubkey, ThinNeo.Helper.GetAddressFromPublicKey(pubkey));
          var data = tran.GetRawData();
          var rawdata = data.toHexString();

          var postRawArray = [];
          postRawArray.push(chainHash);
          postRawArray.push(rawdata);
          var postResult = await WWW.rpc_sendrawtransaction(postRawArray);
          if (postResult["result"] as boolean == true)
          {
            return tran.GetHash().toHexString();
          }            
        }

        static async SendNeorawtransaction(tran:ThinNeo.Transaction, prikey, pubkey){
          var msg = tran.GetMessage();
          var signdata = ThinNeo.Helper.Sign(msg, prikey);
          tran.AddWitness(signdata, pubkey, ThinNeo.Helper.GetAddressFromPublicKey(pubkey));
          var data = tran.GetRawData();
          var postResult = await WWW.rpc_postRawTransaction(data);
        }

        private static async getNeoTransaction(sb, pubkey):Promise<ThinNeo.Transaction>{
          var extdata = new ThinNeo.InvokeTransData();
          extdata.script = sb.ToArray();
          extdata.gas = Neo.Fixed8.Zero;
          var utxo = await WWW.rpc_getUTXO(GUITool.address);
          let tran = CoinTool.makeTran(CoinTool.getassets(utxo), ThinNeo.Helper.GetAddressFromPublicKey(pubkey), this.id_GAS, Neo.Fixed8.Zero);
          tran.type = ThinNeo.TransactionType.InvocationTransaction;
          tran.extdata = extdata;
          return tran;
        }

        static async InvokeNeoContract(sb:ThinNeo.ScriptBuilder){
          var scriptPublish = sb.ToArray().toHexString();
          var str = WWW.makeUrl("invokescript", WWW.neoRpc, scriptPublish);
          var r = await fetch(str, {"method":"get"});
          var result = await r.json();
          return result;
        }
        //zoro invokescript
        static async InvokeZoroContract(sb:ThinNeo.ScriptBuilder, chainHash:string){
          var data = sb.ToArray();
          var scriptPublish = data.toHexString();
          var array = [];
          array.push(chainHash);
          array.push(scriptPublish);

          var postdata = WWW.makeZoroRpcPostBody("invokescript", array);
          var result = await fetch(WWW.api, {"method":"post", "body":JSON.stringify(postdata)});
          var json = await result.json();
          return json["result"];
        }
        //获取ZoroTransaction
        private static getZoroTransaction(gasLimit:Neo.Fixed8, gasPrice:Neo.Fixed8, script:Uint8Array, scriptHash:Uint8Array):ThinNeo.ZoroTransaction{
          var exData = new ThinNeo.ZoroInvokeTransData();
          exData.gasLimit = gasLimit;
          exData.gasPrice = gasPrice;
          exData.script = script;     
          
          var tran = new ThinNeo.ZoroTransaction();
          tran.type = ThinNeo.ZoroTransactionType.InvocationTransaction;
          tran.version = 0;       
  
          tran.nonce = ThinNeo.ZoroTransaction.GetNonce();
          tran.Account = scriptHash;
          tran.attributes = [];
          tran.extdata = exData;
  
          return tran;
        }

        //拼接应用链scriptbuilder
        static makeAppChainScriptBuilder(pubkey:Uint8Array, validators:string[], seedList:string[]):ThinNeo.ScriptBuilder{
          var sb = new ThinNeo.ScriptBuilder();            
          for (var i = 0; i < validators.length; i++){
            sb.EmitPushString(validators[i]);
          }
          sb.EmitPushNumber(new Neo.BigInteger(validators.length));
          for (var i = 0; i < seedList.length; i++){
            sb.EmitPushString(seedList[i]);
          }
          sb.EmitPushNumber(new Neo.BigInteger(seedList.length));
          
          {//获取UTC时间
            var date = new Date();
            var y = date.getUTCFullYear();
            var M = date.getUTCMonth();
            var d = date.getUTCDay();
            var h = date.getUTCHours();
            var m = date.getUTCMinutes();
            var s = date.getUTCSeconds();
          }
          var time = Math.floor(Date.UTC(y,M,d,h,m,s) / 1000);
          sb.EmitPushNumber(new Neo.BigInteger(time));
          sb.EmitPushBytes(Neo.Cryptography.ECPoint.fromUint8Array(pubkey, Neo.Cryptography.ECCurve.secp256r1).encodePoint(true));
          sb.EmitPushString(name);
          
          var chainHash = new Neo.Uint160(Neo.Cryptography.RIPEMD160.computeHash(Neo.Cryptography.Sha256.computeHash(sb.ToArray()))); 
          sb.EmitPushBytes(chainHash.toArray());
          sb.EmitSysCall("Zoro.AppChain.Create");   
          return sb; 
        }

        static async MakeZoroTransaction(address:string, targetaddress:string, sendCount:any, assetid, contractHash, prikey, pubkey, chainHash){
          var sb = new ThinNeo.ScriptBuilder();
          sb.EmitPushNumber(new Neo.BigInteger(sendCount * Math.pow(10, 8)));
          sb.EmitPushBytes(ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(targetaddress));
          sb.EmitPushBytes(ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(address));           
          sb.EmitPushBytes(assetid.hexToBytes().reverse());
          sb.EmitPushString("Transfer");
          sb.EmitSysCall("Zoro.NativeNEP5.Call");

          var invokeResult = await this.InvokeZoroContract(sb, chainHash);
          var gasLimit = invokeResult[0]["gas_consumed"];

          var tran = this.getZoroTransaction(Neo.Fixed8.parse(gasLimit), Neo.Fixed8.One, sb.ToArray(), ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey));
          var result = this.SendZororawtransaction(tran, prikey, pubkey, chainHash);

          alert("txid=" + tran.GetHash().toHexString());

        }

      static async MakeInvokeTransaction(utxo, address, targetaddress, assetid, sendCount, prikey, pubkey){
        var tran = CoinTool.makeTran(utxo, address, this.id_GAS, Neo.Fixed8.Zero);
        
        tran.type = ThinNeo.TransactionType.InvocationTransaction;
        tran.extdata = new ThinNeo.InvokeTransData();

        var sb = new ThinNeo.ScriptBuilder();

        var randomBytes = new Uint8Array(32);            
        var key = Neo.Cryptography.RandomNumberGenerator.getRandomValues<Uint8Array>(randomBytes);
        var randomNum = new Neo.BigInteger(key);
        sb.EmitPushNumber(randomNum);
        sb.Emit(ThinNeo.OpCode.DROP);
        var array = [];
        array.push("(addr)" + address);
        array.push("(addr)" + targetaddress);
        array.push("(int)" + sendCount);
        sb.EmitParamJson(array);
        sb.EmitPushString("transfer");
        sb.EmitAppCall(assetid.hexToBytes().reverse());
        (tran.extdata as ThinNeo.InvokeTransData).script = sb.ToArray();
        (tran.extdata as ThinNeo.InvokeTransData).gas = Neo.Fixed8.Zero;
        var msg = tran.GetMessage();
          var signdata = ThinNeo.Helper.Sign(msg, prikey);
          tran.AddWitness(signdata, pubkey, address);
          var data = tran.GetRawData();

          var postResult = await WWW.rpc_postRawTransaction(data);
          if (postResult)
          alert(tran.GetHash().clone().reverse().toHexString());
      }


      static async MakeTransaction(utxo, targetaddress, assetid, sendCount, prikey, pubkey){
          var tran = CoinTool.makeTran(utxo, targetaddress, assetid, sendCount);
          var msg = tran.GetMessage();
          var signdata = ThinNeo.Helper.Sign(msg, prikey);
          tran.AddWitness(signdata, pubkey, ThinNeo.Helper.GetAddressFromPublicKey(pubkey));
          var data = tran.GetRawData();

          var postResult = await WWW.rpc_postRawTransaction(data);
          if (postResult["result"])
          alert(tran.GetHash().clone().reverse().toHexString());
      }

      private static selectClear(select:HTMLSelectElement):void{
          if (select)
          while(select.childNodes.length > 0){                
              select.removeChild(select.options[0]);
              select.remove(0);   
              select.options[0] = null;            
          }
      }

      static async getChain(select:HTMLSelectElement){
          this.selectClear(select);
          var name2Hash = await AppChainTool.initAllAppChain();
          for (var chainName in name2Hash){
              var sitem = document.createElement("option");
              sitem.text = chainName;
              sitem.value = name2Hash[chainName];
              select.appendChild(sitem);
          }
      }

        static Node_List = {
            "node1": {
              "ip": "182.254.221.14",
              "wallet": "1.json",
              "address": "AbE6cCQGstikD1QvwTnkrD3Jid6JGPY4oq",
              "pubkey": "025178aa02ccb9a30c74c0e9771ed60d771710625e41d1ae37a192a6db2c00e7d6"
            },
            "node2": {
              "ip": "123.207.183.55",
              "wallet": "2.json",
              "address": "ANULCFJSek2qmaomk3x9KD4zR89rftsTKU",
              "pubkey": "02ade1a21bd7d90b88299e7e1fef91c12fdc9988ad9100816d3b50cb6090fd88a2"
            },
            "node3": {
              "ip": "182.254.219.170",
              "wallet": "3.json",
              "address": "ASzuDdnb2Uzkk7XoXxsJ52Wx22er6VXWYt",
              "pubkey": "02f0a7538d3aa6fc6a91315c5842733820df5b4ec1e4f273adc5d36eebd0f7463a"
            },
            "node4": {
              "ip": "115.159.68.43",
              "wallet": "4.json",
              "address": "AXBnQ5itNMYnNTW6YNvfR668AeYZ893hDR",
              "pubkey": "03f35c16c5e8837697b9263f44f62be58c058562e76b033ed29a2223792901f6b1"
            },
            "node5": {
              "ip": "115.159.53.39",
              "wallet": "5.json",
              "address": "AeTshMKrTFtmowwtHH2Da4bW19HbASmyQN",
              "pubkey": "0394f2618478474d3d5744ddd0628cf22fff4deaed4264f468f55a34758a64ac72"
            },
            "node6": {
              "ip": "115.159.85.92",
              "wallet": "6.json",
              "address": "AG6AMhWAPNk9ZAzRccb4ca1z9PmNz6JpnC",
              "pubkey": "03b7034750ff07afe1d122602fe1581672d3741bf4a729118e6fb3169237146120"
            },
            "node7": {
              "ip": "123.206.197.174",
              "wallet": "7.json",
              "address": "AWEyVxBus6NADVHpkABxoN9hyasmqLKpnt",
              "pubkey": "036fd67a326378779db32574c5610f9537411376834a1c9a50aaecae74f733b8ae"
            },
            "node8": {
              "ip": "115.159.161.150",
              "wallet": "8.json",
              "address": "AeFt22JgXDRyxuMR326xdH5FrGVNtN7ju9",
              "pubkey": "039ae33d9489d15936a9a4197d9ad029bc60469afd2482150af8ec7e7b3b81bfa1"
            },
            "node9": {
              "ip": "115.159.183.238",
              "wallet": "9.json",
              "address": "AUHxthEAYQG47E5TLBevDyhVaSkex7sQzR",
              "pubkey": "021421f6b70a410ff14521d699343f136fe58857fab45a0984bee8e73670fd2512"
            }          
          }
    }
}