/// <reference path="./GUIRoute.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
namespace WebBrowser
{
    export class LoginView {

        constructor(){

        }

        static show(div:HTMLDivElement){
            if (div.children.length > 1)
            div.removeChild(div.lastChild);

            var loginbackground = document.createElement('div') as HTMLDivElement;
            div.appendChild(loginbackground);   
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
            file.className = "file";
            
            //提示添加file上传的文字
            var fileTip = document.createElement("p");
            fileTip.textContent='*请上传钱包文件';
            uploadFiles.appendChild(fileTip);
            fileTip.className = "file-tip";
        
            //密码的
            var password = document.createElement("input");
            uploadFiles.appendChild(password);
            password.type = "password";
            password.placeholder = "请输入密码";
            password.className = "password";
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
            passwordTip.className = "file-tip";

            var btn = document.createElement("button");
            uploadFiles.appendChild(btn);
            btn.textContent = "登录";
            btn.className = "btn-commit";
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
                            localStorage.setItem("prikey", GUITool.prikey);
                            localStorage.setItem("address", GUITool.address);
                            GUI_Route.instance.showUI(PageName.MainView);
                        }
                    }
                    );
                }                
            };

            var createWallet = document.createElement("a");
            uploadFiles.appendChild(createWallet);
            createWallet.textContent = "创建钱包>>";
            createWallet.onclick = () => {
                WalletView.show(div);
            }
            createWallet.className = "create-wallet";

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
                    putIn.textContent = file.files[0].name.substr(0,6) + "...*.json";
                    fileTip.textContent = '';
                    reader.readAsText(file.files[0]);
                }
            }
        }
    }
}