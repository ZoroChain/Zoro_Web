using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace NeoCrossChainTransaction
{
    public class CreateTransaction
    {
        public void NeoTransfer()
        {
            byte[] prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
            var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
            var address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
            using (var sb = new ThinNeo.ScriptBuilder())
            {
                var array = new MyJson.JsonNode_Array();
                array.AddArrayValue("(addr)" + from);
                array.AddArrayValue("(addr)" + "AMjCDmrbfcBxGPitHcdrUYRyPXD7DfC52c");//NeoBank address   AMjCDmrbfcBxGPitHcdrUYRyPXD7DfC52c
                array.AddArrayValue("(int)" + value);
                byte[] randomBytes = new byte[32];
                using (RandomNumberGenerator rng = RandomNumberGenerator.Create())
                {
                    rng.GetBytes(randomBytes);
                }
                BigInteger randomNum = new BigInteger(randomBytes);
                sb.EmitPushNumber(randomNum);
                sb.Emit(ThinNeo.VM.OpCode.DROP);
                sb.EmitParamJson(array);//参数倒序入
                sb.EmitPushString("transfer");//参数倒序入
                sb.EmitAppCall(new Hash160("0x04e31cee0443bb916534dad2adf508458920e66d"));//nep5脚本
                script = sb.ToArray();
            }

            ThinNeo.Transaction tran = new Transaction();
            tran.inputs = new ThinNeo.TransactionInput[0];
            tran.outputs = new TransactionOutput[0];
            tran.attributes = new ThinNeo.Attribute[1];
            tran.attributes[0] = new ThinNeo.Attribute();
            tran.attributes[0].usage = TransactionAttributeUsage.Script;
            tran.attributes[0].data = ThinNeo.Helper.GetPublicKeyHashFromAddress(address);
            tran.version = 1;
            tran.type = ThinNeo.TransactionType.InvocationTransaction;

            var idata = new ThinNeo.InvokeTransData();

            tran.extdata = idata;
            idata.script = script;
            idata.gas = 0;

            byte[] msg = tran.GetMessage();
            string msgstr = ThinNeo.Helper.Bytes2HexString(msg);
            byte[] signdata = ThinNeo.Helper.Sign(msg, prikey);
            tran.AddWitness(signdata, pubkey, address);
            string txid = tran.GetHash().ToString();
            byte[] data = tran.GetRawData();
            string rawdata = ThinNeo.Helper.Bytes2HexString(data);

            byte[] postdata;
            var url = MakeRpcUrlPost(NeoRpcUrl, "sendrawtransaction", out postdata, new MyJson.JsonNode_ValueString(rawdata));
            var result = HttpPost(url, postdata);
           Console.WriteLine(result + " txid: " + txid);
            return result;
        }

        public void ZoroTransfer()
        {
            byte[] prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
            var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
            var address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
            ScriptBuilder sb = new ScriptBuilder();
            MyJson.JsonNode_Array array = new MyJson.JsonNode_Array();
            array.AddArrayValue("(addr)" + from);
            array.AddArrayValue("(addr)" + "AUB7tMoKTzN33iVVqhz98vnT3KiG4bqx3f"); //ZoroBank address   AUB7tMoKTzN33iVVqhz98vnT3KiG4bqx3f
            array.AddArrayValue("(int)" + value);
            byte[] randomBytes = new byte[32];
            using (RandomNumberGenerator rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomBytes);
            }
            BigInteger randomNum = new BigInteger(randomBytes);
            sb.EmitPushNumber(randomNum);
            sb.Emit(ThinNeo.VM.OpCode.DROP);
            sb.EmitParamJson(array);
            sb.EmitPushString("transfer");
            sb.EmitAppCall(new Hash160("0x67147557c0b6431e9b9297de26b46d9889434e49"));

            Hash160 scripthash = ThinNeo.Helper.GetPublicKeyHashFromAddress(address);
            string scriptPublish = ThinNeo.Helper.Bytes2HexString(sb.ToArray());
            byte[] postdata;

            ThinNeo.InvokeTransData extdata = new ThinNeo.InvokeTransData();
            extdata.script = sb.ToArray();
            extdata.gas = 0;

            ThinNeo.Transaction tran = Helper.makeTran(null, null, new ThinNeo.Hash256(Config.getValue("id_GAS")),
                extdata.gas);
            tran.version = 1;
            tran.extdata = extdata;
            tran.type = ThinNeo.TransactionType.InvocationTransaction;

            //附加鉴证
            tran.attributes = new ThinNeo.Attribute[1];
            tran.attributes[0] = new ThinNeo.Attribute();
            tran.attributes[0].usage = ThinNeo.TransactionAttributeUsage.Script;
            tran.attributes[0].data = scripthash;

            byte[] msg = tran.GetMessage();
            byte[] signdata = ThinNeo.Helper.Sign(msg, prikey);
            tran.AddWitness(signdata, pubkey, address);
            string txid = tran.GetHash().ToString();
            byte[] data = tran.GetRawData();
            string rawdata = ThinNeo.Helper.Bytes2HexString(data);

            MyJson.JsonNode_Array postRawArray = new MyJson.JsonNode_Array();
            postRawArray.AddArrayValue(chainHash); //跟链
            postRawArray.AddArrayValue(rawdata);

            var url = Helper.MakeRpcUrlPost(ZoroRpcUrl, "sendrawtransaction", out postdata, postRawArray.ToArray());
            var result = Helper.HttpPost(url, postdata).Result;
            Console.WriteLine(result + " txid: " + txid);
        }
    }
}
