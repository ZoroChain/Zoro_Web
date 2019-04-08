/// <reference path="./Base.ts"/>
/// <reference path="./GUIRoute.ts"/>
/// <reference path="./LoginView.ts"/>
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
            if (localStorage.getItem("prikey")){
                GUI_Route.instance.showUI(PageName.MainView);
            }else
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
          

            LoginView.show(background);

        }
    }
}