/// <reference path="../../lib/neo-ts.d.ts"/>
namespace WebBrowser
{
    export class WebHelper
    {        
        public static getScriptBuilderCreate(type:Nep5Type, ..._params:any[]):ThinNeo.ScriptBuilder{
            var sb = new ThinNeo.ScriptBuilder();
            switch(type){
                case Nep5Type.Neo:
                    sb.EmitPushString(_params[0]); 
                    sb.EmitPushString(_params[1]); 
                    sb.EmitPushString(_params[2]);
                    sb.EmitPushString(_params[3]); 
                    sb.EmitPushString(_params[4]);   
                    sb.EmitPushNumber(new Neo.BigInteger(_params[5]));
                    sb.EmitPushBytes(_params[6]);
                    sb.EmitPushBytes(_params[7]);
                    var contract = new Uint8Array(_params[8]);
                    sb.EmitPushBytes(contract);
                    sb.EmitSysCall("Neo.Contract.Create");
                break;
                case Nep5Type.Zoro:
                    sb.EmitPushString(_params[0]); 
                    sb.EmitPushString(_params[1]); 
                    sb.EmitPushString(_params[2]);
                    sb.EmitPushString(_params[3]); 
                    sb.EmitPushString(_params[4]);   
                    sb.EmitPushNumber(new Neo.BigInteger(_params[5]));
                    sb.EmitPushBytes(_params[6]);
                    sb.EmitPushBytes(_params[7]);
                    var contract = new Uint8Array(_params[8]);
                    sb.EmitPushBytes(contract);
                    sb.EmitSysCall("Zoro.Contract.Create");
                break;
                case Nep5Type.NativeNep5:               
                    var amount = _params[3] * Math.pow(10, _params[2]);                        
                    var script = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(_params[1]);
                    var ss = new Neo.Uint160(script).toString();
                    sb.EmitPushBytes(_params[0].hexToBytes().reverse());
                    sb.EmitPushString(ss);
                    sb.EmitPushBytes(_params[1]);                   
                    sb.EmitPushNumber(new Neo.BigInteger(_params[2]));                   
                    sb.EmitPushNumber(new Neo.BigInteger(amount));
                    sb.EmitPushString(_params[4]);
                    sb.EmitPushString(_params[5]);
                    sb.EmitSysCall("Zoro.NativeNEP5.Create");
                break;
            }
            return sb;
        }          
    }

    export enum Nep5Type{
        Neo,Zoro,NativeNep5
    }

    
}
