///<reference path="./DownView.ts" />
namespace WebBrowser
{
    export class WalletView
    {
        constructor(){
   
        }

        static show(div:HTMLDivElement):void{           
            if (div.children.length > 1)
            div.removeChild(div.lastChild);

            var loginbackground = document.createElement('div') as HTMLDivElement;
            div.appendChild(loginbackground);   
            loginbackground.className = "login-bg";           

            var name = document.createElement('h3') as HTMLHeadingElement;
            name.textContent = "创建您的钱包";
            loginbackground.appendChild(name);
            name.className = "login-title";

            var uploadFiles = document.createElement("div");//外层div
            loginbackground.appendChild(uploadFiles);
            uploadFiles.className = "upload-file";

            var walletName = document.createElement("input");
            uploadFiles.appendChild(walletName);
            walletName.type = "text";
            walletName.placeholder = "输入钱包名";
            walletName.className = "password";          

            var moneyTip = document.createElement("p");
            moneyTip.textContent = '*钱包名不能为空';
            uploadFiles.appendChild(moneyTip);
            moneyTip.className = "file-tip";

            var password = document.createElement("input");
            uploadFiles.appendChild(password);
            password.type = "password";
            password.placeholder = "输入密码";
            password.className = "password";  

             //密码提示的
             var passwordTip = document.createElement("p");
             passwordTip.textContent='*请输入密码';
             uploadFiles.appendChild(passwordTip);
             passwordTip.className = "file-tip";

            var repassword = document.createElement("input");
            uploadFiles.appendChild(repassword);
            repassword.type = "password";
            repassword.placeholder = "重复密码";
            repassword.className = "password";

             //重复密码
             var repeatTip = document.createElement("p");
             repeatTip.textContent='*请输入相同的密码';
             uploadFiles.appendChild(repeatTip);
             repeatTip.className = "file-tip";

            var create = document.createElement('button') as HTMLButtonElement;
            uploadFiles.appendChild(create);
            create.textContent = "新建";
            create.className = "btn-commit";
            create.onclick = () => {
                try
                {
                    var array = new Uint8Array(32);
                    var key = Neo.Cryptography.RandomNumberGenerator.getRandomValues<Uint8Array>(array);
                    var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(key);
                    var addr = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);

                    var wallet = new ThinNeo.nep6wallet();
                    wallet.scrypt = new ThinNeo.nep6ScryptParameters();
                    wallet.scrypt.N = 16384;
                    wallet.scrypt.r = 8;
                    wallet.scrypt.p = 8;
                    wallet.accounts = [];
                    wallet.accounts[0] = new ThinNeo.nep6account();
                    wallet.accounts[0].address = addr;
                    ThinNeo.Helper.GetNep2FromPrivateKey(key, repassword.value, wallet.scrypt.N, wallet.scrypt.r, wallet.scrypt.p, (info, result) =>
                    {
                        if (info == "finish")
                        {
                            wallet.accounts[0].nep2key = result;
                            wallet.accounts[0].contract = new ThinNeo.contract();
                            GUITool.prikey = key;
                            GUITool.pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(key);
                            GUITool.address = ThinNeo.Helper.GetAddressFromPublicKey(GUITool.pubkey);
                            wallet.accounts[0].contract.script = ThinNeo.Helper.GetAddressCheckScriptFromPublicKey(pubkey).toHexString();
                            var jsonstr = JSON.stringify(wallet.toJson());
                            var blob = new Blob([ThinNeo.Helper.String2Bytes(jsonstr)]);
                            var downLoadUrl = URL.createObjectURL(blob);
                            DownView.show(div, downLoadUrl, walletName.value);
                        }
                    });
                }
                catch (e)
                {
                }
                
            }
            var returnLogin = document.createElement('a') as HTMLAnchorElement;
            uploadFiles.appendChild(returnLogin);
            returnLogin.textContent = "返回登录>>";
            returnLogin.className = "create-wallet";
            returnLogin.onclick = () => {
                LoginView.show(div);
            }
        }    
    }
}