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

            //address = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress("AWN6jngST5ytpNnY1dhBQG7QHd7V8SqSCp");
            var sb = new ThinNeo.ScriptBuilder();
            var a = [];
            a.push("(hex160)" + bcp);
            //a.push("(hex160)" + address.reverse().toHexString());
            a.push("(addr)AWN6jngST5ytpNnY1dhBQG7QHd7V8SqSCp");
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
            var result = await fetch(WWW.api, {"method":"post", "body":JSON.stringify(postdata)});
            var json = await result.json();

            alert(JSON.stringify(json));
        }

        public static async Transfer(){

            var bcp = "0000000000000000000000000000000000000001";
            var chainHash = "";
            var wif = "L4ooZWvkj6QM9AjPREmF2SZZFYgEFAxWPzYJY6jdr4XJNx62Smbf";
            var targetwif = "L17Cq1FEbZJ8bc8Y8HcqVCgxsNpWY6LHDoau9DBD98m8vtGcVpuQ";

            let scriptHash = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(wif)));
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

            var value = 1;
            value = 1 * Math.pow(10, decimals);

            // sb = new ThinNeo.ScriptBuilder();
            // sb.EmitPushNumber(new Neo.BigInteger(value));
            // sb.EmitPushBytes(ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress("AWN6jngST5ytpNnY1dhBQG7QHd7V8SqSCp"));
            // //sb.EmitPushBytes(targetScriptHash);
            // sb.EmitPushBytes(scriptHash);           
            // sb.EmitPushBytes(this.getUint160(bcp));
            // sb.EmitPushString("Transfer");
            // sb.EmitSysCall("Zoro.NativeNEP5.Call");
        
            sb = new ThinNeo.ScriptBuilder();
            array = [];
            array.push("(addr)AcQLYjGbQU2bEQ8RKFXUcf8XvromfUQodq");
            array.push("(addr)AbN2K2trYzgx8WMg2H7U7JHH6RQVzz2fnx");
            array.push("(bytes)f8c86f9cfaade7d2863403b706497caaba47f633598fd684cf71dc1546a87e02");
            sb.EmitParamJson(array);
            sb.EmitPushString("exchange");
            sb.EmitAppCall("7e465b65c8ba9bd255ba93947732502e30985007".hexToBytes().reverse());

            scriptPublish = sb.ToArray().toHexString();
            array = [];
            array.push(chainHash);
            array.push(scriptPublish);
            var gas = await WWW.rpc_invokeScript(array);
            gas = gas["gas_consumed"];
           
            this.makeTransaction(sb.ToArray(), wif, Neo.Fixed8.parse("8"), Neo.Fixed8.One);
        }

        static async makeTransaction(script, wif, gas, gasPrice){
            var chainHash = "";            

            var exData = new ThinNeo.ZoroInvokeTransData();
            exData.gasLimit = gas;
            exData.gasPrice = gasPrice;
            exData.script = script;
            let scriptHash = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(wif)));
            
            var tran = new ThinNeo.ZoroTransaction();
            tran.type = ThinNeo.ZoroTransactionType.InvocationTransaction;
            tran.version = 0;       

            tran.nonce = ThinNeo.ZoroTransaction.GetNonce();
            tran.Account = scriptHash;
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
            var result = await fetch("http://115.159.68.43:59908/api/testnet", {"method":"post", "body":JSON.stringify(postdata)});
            var json = await result.json();
            var postResult1 = json;

            {
                alert("txid=" + tran.GetHash().reverse().toHexString());
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