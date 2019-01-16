/// <reference path="../tools/wwwtool.ts"/>
/// <reference path="../tools/AppChainTool.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
namespace WebBrowser {
    export class Test {

        public static async ZoroTransfer() {
            var bcp = "0000000000000000000000000000000000000001";
            var chainHash = "";
            var wif = "L4ooZWvkj6QM9AjPREmF2SZZFYgEFAxWPzYJY6jdr4XJNx62Smbf";
            var targetwif = "L17Cq1FEbZJ8bc8Y8HcqVCgxsNpWY6LHDoau9DBD98m8vtGcVpuQ";

            var prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
            var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
            var address = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey);

            var sb = new ThinNeo.ScriptBuilder();
            var a = [];
            a.push("(hex160)" + bcp);
            a.push("(hex160)" + address.reverse().toHexString());
            sb.EmitParamJson(a);
            // sb.EmitPushBytes(address);
            // sb.EmitPushBytes(this.getUint160(bcp));           
            sb.EmitPushString("BalanceOf");
            sb.EmitSysCall("Zoro.NativeNEP5.Call");

            var data = sb.ToArray();
            var scriptPublish = data.toHexString();
            var array = [];
            array.push(chainHash);
            array.push(scriptPublish);

            var postdata = WWW.makeZoroRpcPostBody("invokescript", array);
            var result = await fetch("http://127.0.0.1:20332/", {"method":"post", "body":JSON.stringify(postdata)});
            var json = await result.json();

            alert(JSON.stringify(json));
        }

        public static async Transfer(){
            var bcp = "0000000000000000000000000000000000000001";
            var chainHash = "";
            var wif = "L4ooZWvkj6QM9AjPREmF2SZZFYgEFAxWPzYJY6jdr4XJNx62Smbf";
            var targetwif = "L17Cq1FEbZJ8bc8Y8HcqVCgxsNpWY6LHDoau9DBD98m8vtGcVpuQ";

            var scriptHash = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(wif)));
            var targetScriptHash = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(targetwif)));

            var sb = new ThinNeo.ScriptBuilder();
            sb.EmitPushBytes(this.getUint160(bcp));
            sb.EmitPushString("Decimals");
            sb.EmitSysCall("Zoro.NativeNEP5.Call");

            var data = sb.ToArray();
            var scriptPublish = data.toHexString();
            var array = [];
            array.push(chainHash);
            array.push(scriptPublish);

            var json = await WWW.rpc_invokeScript(array);
            var decimals = parseInt(json["stack"][0]["value"]);

            var value = 98;
            value = 1 * Math.pow(10, decimals);

            sb = new ThinNeo.ScriptBuilder();
            sb.EmitPushNumber(new Neo.BigInteger(value));
            sb.EmitPushBytes(targetScriptHash);
            sb.EmitPushBytes(scriptHash);           
            sb.EmitPushBytes(this.getUint160(bcp));
            sb.EmitPushString("Transfer");
            sb.EmitSysCall("Zoro.NativeNEP5.Call");
        
            scriptPublish = sb.ToArray().toHexString();
            array = [];
            array.push(chainHash);
            array.push(scriptPublish);
            var gas = await WWW.rpc_invokeScript(array);
            gas = gas["gas_consumed"];
           
            this.makeTransaction(sb.ToArray(), wif, Neo.Fixed8.parse(gas), Neo.Fixed8.One);
        }

        static async makeTransaction(script, wif, gas, gasPrice){
            var chainHash = "";

            

            var exData = new ThinNeo.ZoroInvokeTransData();
            exData.gasLimit = gas;
            exData.gasPrice = gasPrice;
            exData.script = script;
            var scriptHash = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(wif)));
            exData.ScriptHash = new Neo.Uint160(scriptHash);
            
            var tran = new ThinNeo.ZoroTransaction();
            tran.type = ThinNeo.ZoroTransactionType.InvocationTransaction;
            tran.version = 0;

            var r = Math.random() << 32;
            alert(r);

            tran.nonce = ThinNeo.ZoroTransaction.GetNonce();
            tran.Account = new Neo.Uint160(scriptHash);
            tran.attributes = [];
            tran.extdata = exData;

            var msg = tran.GetMessage();
            var signdata = ThinNeo.Helper.Sign(msg, ThinNeo.Helper.GetPrivateKeyFromWIF(wif));
            tran.AddWitness(signdata, ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(wif)), 
            ThinNeo.Helper.GetAddressFromPublicKey(ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(wif))));
            var data = tran.GetRawData();
            var rawdata = data.toHexString();

            var postRawArray = [];
            postRawArray.push(chainHash);
            postRawArray.push(rawdata);

            var postdata = WWW.makeZoroRpcPostBody("sendrawtransaction",postRawArray);
            var result = await fetch("http://127.0.0.1:20332/", {"method":"post", "body":JSON.stringify(postdata)});
            var json = await result.json();
            var postResult1 = json;

            {
                alert("txid=" + tran.GetHash().toHexString());
            }
        }

        static getUint160(value: string): Uint8Array {
            if (value == null) {
                throw "err";
            }
            if (value.startsWith("0x")) {
                value = value.substring(2);
            }
            if (value.length != 40) {
                throw "err";
            }
            return value.hexToBytes().reverse();
        }
    }
}