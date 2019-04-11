namespace WebBrowser
{
    export class DownView
    {
        constructor(){
   
        }

        static show(div:HTMLDivElement, url:string, walletName:string):void{           
            if (div.children.length > 1)
            div.removeChild(div.lastChild);

            var loginbackground = document.createElement('div') as HTMLDivElement;
            div.appendChild(loginbackground);   
            loginbackground.className = "login-bg";

            var name = document.createElement('h3') as HTMLHeadingElement;
            name.textContent = "您的钱包文件已创建";
            loginbackground.appendChild(name);
            name.className = "login-title";

            var uploadFiles = document.createElement("div");//外层div
            loginbackground.appendChild(uploadFiles);
            uploadFiles.className = "upload-file";

            var text1 = document.createElement('h5') as HTMLHeadingElement;
            text1.textContent = "点击“下载”来保存您的文件";
            text1.style.color = "#eeeeee";
            text1.style.fontSize = "14px";
            text1.style.padding = "5px 0";
            uploadFiles.appendChild(text1);

            var text2 = document.createElement('h5') as HTMLHeadingElement;
            text2.textContent = "不要丢失！如果丢失，将无法恢复";
            text2.style.color = "#eeeeee";
            text2.style.fontSize = "14px";
            text2.style.paddingBottom = "50px";
            uploadFiles.appendChild(text2);

            var downLoad = document.createElement('button') as HTMLButtonElement;
            uploadFiles.appendChild(downLoad);
            downLoad.textContent = "下载文件";  
            downLoad.className = "btn-commit";    

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
            returnLogin.className = "create-wallet";
            returnLogin.onclick = () => {
                LoginView.show(div);
            }
        }
    }
}