/// <reference path="./Base.ts"/>
/// <reference path="./GUIRoute.ts"/>
/// <reference path="../tools/CSSTools.ts"/>

/// <reference path="../tools/Test.ts"/>
namespace WebBrowser
{
    export class GUI_Login implements GUI_Base
    {
        div:HTMLDivElement;
        constructor(div:HTMLDivElement){
            this.div = div;   
        }

        showUI(){
            //Test.ZoroTransfer();
            //Test.Transfer();

            this.login();
        }        

        hideUI(){

        }

        login():void{
            this.div.removeChild(this.div.firstChild);
            this.div.className = "wallet-bg";
           
            var background = document.createElement('div') as HTMLDivElement;
            this.div.appendChild(background);

            var messagebackground = document.createElement('div') as HTMLDivElement;
            background.appendChild(messagebackground); 
            messagebackground.className = "message-bg";

            var titleSpan = document.createElement('span') as HTMLSpanElement;
            titleSpan.textContent = "最安全的资产管理";
            messagebackground.appendChild(titleSpan);
            titleSpan.className = "title-font";

            var hr = document.createElement('hr') as HTMLHRElement;
            messagebackground.appendChild(hr);
            hr.className = "login-hr";
            var messageSpan = document.createElement('span') as HTMLSpanElement;
            messageSpan.textContent = "为全世界，打造最便捷，最安全的虚拟物品创作，购买和销售方式适用于交易游戏代码和视频游戏皮肤等物品或电子产品等物品的任何人。";
            messagebackground.appendChild(messageSpan);
            messageSpan.className = "value-font";

            var loginbackground = document.createElement('div') as HTMLDivElement;
            background.appendChild(loginbackground);   
            loginbackground.className = "login-bg";    

            var name = document.createElement('h3') as HTMLHeadingElement;
            name.textContent = "登陆你的钱包";
            loginbackground.appendChild(name);
            name.className = "login-title";
            
            var uploadFiles = document.createElement("div");//外层div
            loginbackground.appendChild(uploadFiles);
            uploadFiles.className = "upload-file";
            
            //feile  外层
            var firstFile = document.createElement("div");
            var putIn = document.createElement("div");
            putIn.textContent = "请选择钱包文件";
            firstFile.appendChild(putIn);
            putIn.className = "putin";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/file.png";
            putIn.appendChild(fileIcon);
            fileIcon.className = "file-icon";
            uploadFiles.appendChild(firstFile);
            firstFile.className = "first-file";
            
            //将file添加到feile  外层里
            var file = document.createElement("input");
            firstFile.appendChild(file);
            file.type = "file";
            CSSTool.file_set(file);
            
            //提示添加file上传的文字
            var fileTip = document.createElement("p");
            fileTip.textContent='*请上传钱包文件';
            $(fileTip).attr("id","fileTip");
            uploadFiles.appendChild(fileTip);
            CSSTool.fileTip_set(fileTip);
      
            //密码的
            var password = document.createElement("input");
            uploadFiles.appendChild(password);
            password.type = "password";
            password.placeholder = "请输入密码";
            CSSTool.password_set(password);
            $(password).on("input",function(){
                if(password.value.length){
                    passwordTip.textContent = '';
                }else{
                    passwordTip.textContent = '*密码输入有误';
                }
            });

            //密码提示的
            var passwordTip = document.createElement("p");
            passwordTip.textContent='*密码输入有误';
            uploadFiles.appendChild(passwordTip);
            CSSTool.fileTip_set(passwordTip);

            var btn = document.createElement("button");
            uploadFiles.appendChild(btn);
            btn.textContent = "登陆";
            CSSTool.btn_set(btn);
            btn.onclick = () =>
            {
                if(wallet.accounts.length > 0 && wallet.accounts[0].nep2key != null){
                    let nepkey = wallet.accounts[0].nep2key;
                    var s = wallet.scrypt;
                    ThinNeo.Helper.GetPrivateKeyFromNep2(nepkey, password.value, s.N, s.r, s.p, (info, result) =>
                    {
                        if (info == "finish")
                        {
                            GUITool.prikey = result as Uint8Array;
                            var wif = ThinNeo.Helper.GetWifFromPrivateKey(GUITool.prikey);
                            GUITool.pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(GUITool.prikey);
                            GUITool.address = ThinNeo.Helper.GetAddressFromPublicKey(GUITool.pubkey);
                            GUI_Route.instance.showUI(PageName.MainView);
                        }
                    }
                    );
                }                
            };

            var createWallet = document.createElement("button");
            uploadFiles.appendChild(createWallet);
            createWallet.textContent = "创建钱包";
            createWallet.onclick = () => {
                GUI_Route.instance.showUI(PageName.Wallet);
            }
            CSSTool.createWallet_set(createWallet);

            var wallet: ThinNeo.nep6wallet;
            var reader = new FileReader();
            reader.onload = (e: Event) =>
            {
                var walletstr = reader.result as string;
                wallet = new ThinNeo.nep6wallet();
                wallet.fromJsonStr(walletstr);               
            };
            file.onchange = (ev: Event) =>
            {
                if (file.files.length > 0)
                if (file.files[0].name.includes(".json"))
                {
                    putIn.textContent = file.files[0].name;
                    fileTip.textContent = '';
                    reader.readAsText(file.files[0]);
                }
            }

        }
    }
}