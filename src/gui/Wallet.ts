/// <reference path="./Base.ts"/>
/// <reference path="../tools/CSSTools.ts"/>
namespace WebBrowser
{
    export class GUI_Wallet implements GUI_Base
    {
        div:HTMLDivElement;
        constructor(div:HTMLDivElement){
            this.div = div;   
        }

        showUI(){
            this.createWallet();
        }        

        hideUI(){

        }

        createWallet():void{
            this.div.removeChild(this.div.firstChild);
            Neo.Cryptography.RandomNumberGenerator.startCollectors();

            var loginbackground = document.createElement('div') as HTMLDivElement;
            this.div.appendChild(loginbackground);
            

            var name = document.createElement('h3') as HTMLHeadingElement;
            name.textContent = "创建您的钱包";
            name.style.color = "#ffffff";
            loginbackground.appendChild(name);
            CSSTool.name_set(name);

            var uploadFiles = document.createElement("div");//外层div
            loginbackground.appendChild(uploadFiles);
            CSSTool.uploadFiles_set(uploadFiles);

            var walletName = document.createElement("input");
            uploadFiles.appendChild(walletName);
            walletName.type = "text";
            walletName.placeholder = "输入钱包名";
            CSSTool.password_set(walletName);
           

            var moneyTip = document.createElement("p");
            moneyTip.textContent = '*钱包名不能为空';
            uploadFiles.appendChild(moneyTip);
            CSSTool.fileTip_set(moneyTip);

            var password = document.createElement("input");
            uploadFiles.appendChild(password);
            password.type = "password";
            password.placeholder = "输入密码";
            CSSTool.password_set(password);

             //密码提示的
             var passwordTip = document.createElement("p");
             passwordTip.textContent='*请输入密码';
             uploadFiles.appendChild(passwordTip);
             CSSTool.fileTip_set(passwordTip);

            var repassword = document.createElement("input");
            uploadFiles.appendChild(repassword);
            repassword.type = "password";
            repassword.placeholder = "重复密码";
            CSSTool.password_set(repassword);

             //重复密码
             var repeatTip = document.createElement("p");
             repeatTip.textContent='*请输入相同的密码';
             uploadFiles.appendChild(repeatTip);
             CSSTool.fileTip_set(repeatTip);

            var create = document.createElement('button') as HTMLButtonElement;
            uploadFiles.appendChild(create);
            create.textContent = "新建";
            CSSTool.btn_set(create);
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
                            this.downloadWallet(downLoadUrl, walletName.value);
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
            returnLogin.style.paddingTop = '5px';
            returnLogin.style.display = 'block';
            returnLogin.onclick = () => {
                GUI_Route.instance.showUI(PageName.Login);
            }
        }

        downloadWallet(url:string, walletName:string):void{
            this.div.removeChild(this.div.firstChild);

            var loginbackground = document.createElement('div') as HTMLDivElement;
            this.div.appendChild(loginbackground);

            var name = document.createElement('h3') as HTMLHeadingElement;
            name.textContent = "您的钱包文件已创建";
            name.style.color = "#ffffff";
            loginbackground.appendChild(name);
            CSSTool.name_set(name);

            var uploadFiles = document.createElement("div");//外层div
            loginbackground.appendChild(uploadFiles);
            CSSTool.uploadFiles_set(uploadFiles);

            var text1 = document.createElement('h5') as HTMLHeadingElement;
            text1.textContent = "点击“下载”来保存您的文件";
            text1.style.color = "#eeeeee";
            text1.style.fontSize = "18px";
            text1.style.padding = "5px 0";
            uploadFiles.appendChild(text1);

            var text2 = document.createElement('h5') as HTMLHeadingElement;
            text2.textContent = "不要丢失！如果丢失，将无法恢复";
            text2.style.color = "#eeeeee";
            text2.style.fontSize = "18px";
            text2.style.padding = "5px 0";
            uploadFiles.appendChild(text2);

            var downLoad = document.createElement('button') as HTMLButtonElement;
            uploadFiles.appendChild(downLoad);
            downLoad.textContent = "下载文件";  
            CSSTool.btn_set(downLoad);     

            var b = true;
            downLoad.onclick = () => {
                var downurl = document.createElement("a");
                loginbackground.appendChild(downurl);
                downurl.download = walletName + ".json";
                downurl.href = url;
                
                if (b){
                    downurl.click();
                    b = false;
                }                
                GUI_Route.instance.showUI(PageName.MainView);            
            }
            var returnLogin = document.createElement('a') as HTMLAnchorElement;
            uploadFiles.appendChild(returnLogin);
            returnLogin.textContent = "返回登录>>";
            returnLogin.style.paddingTop = "5px";
            returnLogin.style.display = "block";
            returnLogin.onclick = () => {
                GUI_Route.instance.showUI(PageName.Login);
            }
        }
    }
}