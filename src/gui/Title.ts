/// <reference path="./Base.ts"/>
/// <reference path="./Asset.ts"/>
/// <reference path="./Charge.ts"/>
/// <reference path="./AppChain.ts"/>
/// <reference path="./Contract.ts"/>
/// <reference path="./TxMessage.ts"/>
/// <reference path="./Message.ts"/>
/// <reference path="../tools/CSSTools.ts"/>
namespace WebBrowser
{
    export class GUI_Title implements GUI_Base
    {
        div:HTMLDivElement;
        title:HTMLDivElement;
        mainValueBackGround:HTMLDivElement;

        public height:HTMLSpanElement;
        selectAppChain:HTMLSelectElement;
        selectIndex:number;   

        constructor(div:HTMLDivElement){
            this.div = div;
            
            var navTitle = document.createElement("div");
            this.div.appendChild(navTitle);
            navTitle.className = "navTitle-bg";
             
            this.title = document.createElement('div') as HTMLDivElement;
            navTitle.appendChild(this.title);
            this.title.className = "title-bg";

            this.mainValueBackGround = document.createElement('div') as HTMLDivElement;
            navTitle.appendChild(this.mainValueBackGround);
            this.mainValueBackGround.className = "main-value-bg";

            GUI_Route.instance.pushUI(PageName.Asset, new GUI_Asset(this.mainValueBackGround));
            GUI_Route.instance.pushUI(PageName.Charge, new GUI_Charge(this.mainValueBackGround));
            //GUI_Route.instance.pushUI(PageName.AppChain, new GUI_AppChain(this.mainValueBackGround));
            GUI_Route.instance.pushUI(PageName.Contract, new GUI_Contract(this.mainValueBackGround));
            GUI_Route.instance.pushUI(PageName.TxMessage, new GUI_TxMessage(this.mainValueBackGround));
            GUI_Route.instance.pushUI(PageName.Message, new GUI_Message(this.mainValueBackGround));
        }

        showUI(){           
            this.showTitle(this.title);
        }        

        hideUI(){
            this.stopUpdate();
            if (this.title){
                if (this.height){this.title.removeChild(this.height);this.height = null}
                if (this.selectAppChain){this.title.removeChild(this.selectAppChain);this.selectAppChain = null}
            }           
        }

        showTitle(title):void{                       
            //$("#gui-info").width($(window).width());
            $("#removeContainer").removeClass("container");
            var asset = document.createElement("button") as HTMLButtonElement;
            title.appendChild(asset);
            asset.className = "title-btn title-btn-off";
            asset.textContent = "资产";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/01_token.png";
            asset.appendChild(fileIcon);
            fileIcon.className = "button-icon";
            asset.onclick = () => {
                GUI_Route.instance.showUI(PageName.Asset);
                document.querySelectorAll(".title-btn").forEach((value) =>{
                    value.className = "title-btn title-btn-off";
                });
                asset.className = "title-btn title-btn-on";
            }
            asset.click();

            var charge = document.createElement("button") as HTMLButtonElement;
            title.appendChild(charge);
            charge.className = "title-btn title-btn-off";
            charge.textContent = "转账";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/02_charge.png";
            charge.appendChild(fileIcon);
            fileIcon.className = "button-icon";
            charge.onclick = () => {
                GUI_Route.instance.showUI(PageName.Charge);
                document.querySelectorAll(".title-btn").forEach((value) =>{
                    value.className = "title-btn title-btn-off";
                });
                charge.className = "title-btn title-btn-on";
            }

            // var appChain = document.createElement("button") as HTMLButtonElement;
            // title.appendChild(appChain)
            // $(appChain).css("background","#3D3E4C");
            // appChain.className = "title-btn-on";
            // appChain.textContent = "应用链";
            // appChain.onclick = () => {
            //     GUI_Route.instance.showUI(PageName.AppChain);
            //     $(appChain).css("background","#333542").siblings("button").css("background","#3D3E4C");
            // }

            var contract = document.createElement("button") as HTMLButtonElement;
            CSSTool.titleBtn_set(contract);
            title.appendChild(contract)
            contract.textContent = "发布合约";
            contract.className = "title-btn title-btn-off";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/03_contract.png";
            contract.appendChild(fileIcon);
            fileIcon.className = "button-icon";
            contract.onclick = () => {
                GUI_Route.instance.showUI(PageName.Contract);
                document.querySelectorAll(".title-btn").forEach((value) =>{
                    value.className = "title-btn title-btn-off";
                });
                contract.className = "title-btn title-btn-on";
            }

            var transaction = document.createElement("button") as HTMLButtonElement;
            title.appendChild(transaction);
            transaction.textContent = "交易记录";
            transaction.className = "title-btn title-btn-off";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/04_txmessage.png";
            transaction.appendChild(fileIcon);
            fileIcon.className = "button-icon";
            transaction.onclick = () => {
                GUI_Route.instance.showUI(PageName.TxMessage);
                document.querySelectorAll(".title-btn").forEach((value) =>{
                    value.className = "title-btn title-btn-off";
                });
                transaction.className = "title-btn title-btn-on";
            }

            var message = document.createElement("button") as HTMLButtonElement;
            title.appendChild(message)
            message.textContent = "信息";
            message.className = "title-btn title-btn-off";           
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/05_message.png";
            message.appendChild(fileIcon);
            fileIcon.className = "button-icon";

            message.onclick = () => {
                GUI_Route.instance.showUI(PageName.Message);
                document.querySelectorAll(".title-btn").forEach((value) =>{
                    value.className = "title-btn title-btn-off";
                });
                message.className = "title-btn title-btn-on";
            }                   
        }

        addSelect(){
            this.hideUI();
            this.initAppChain();
            this.update();

            this.selectAppChain = document.createElement("select") as HTMLSelectElement;     
            this.selectAppChain.style.cssFloat = "right";
            this.selectAppChain.style.width = "15%";
            CSSTool.select_set(this.selectAppChain);
            this.title.appendChild(this.selectAppChain);  

            this.height = document.createElement("span") as HTMLSpanElement;
            this.height.style.color = "#eeeeee";
            this.title.appendChild(this.height)
            this.height.style.cssFloat = "right";
            this.height.style.lineHeight = "30px";
            this.height.style.width = "6%";
            this.height.textContent = "0";    
        }

        timeOut;
        async update(): Promise<void>
        {                
            if (GUITool.chainHash){
                if (GUITool.chainHash == "NEO"){
                    var height = await WWW.api_getNEOHeight();
                }else{
                    var height = await WWW.api_getZoroHeight(GUITool.chainHash);
                }
                this.height.textContent = isNaN(height)?"N/A":height.toString();
            }else{
                GUITool.chainHash = "NEO";
                if (GUITool.chainHash == "NEO"){
                    var height = await WWW.api_getNEOHeight();
                }else{
                    var height = await WWW.api_getZoroHeight(GUITool.chainHash);
                } 
                this.height.textContent = isNaN(height)?"N/A":height.toString();      
            }                

            if (height > WWW.blockHeight){
                WWW.blockHeight = height;
                AppChainTool.updateAllAppChain();
                if (WWW.chainHashLength < AppChainTool.appChainLength){
                    WWW.chainHashLength = AppChainTool.appChainLength;
                    this.updateAppChain();
                }               
            }
            this.timeOut = setTimeout(() => { this.update() }, 1000);
        }

        stopUpdate(){
            clearTimeout(this.timeOut);
        }

        selectClear():void{
            if (this.selectAppChain)
            while(this.selectAppChain.childNodes.length > 0){                
                this.selectAppChain.removeChild(this.selectAppChain.options[0]);
                this.selectAppChain.remove(0);   
                this.selectAppChain.options[0] = null;            
            }
        }

        async updateAppChain(){
            this.selectClear();
            var name2Hash = await AppChainTool.initAllAppChain();
            for (var chainName in name2Hash){
                var sitem = document.createElement("option");
                sitem.text = chainName;
                sitem.value = name2Hash[chainName];
                this.selectAppChain.appendChild(sitem);
            }
            this.selectAppChain.selectedIndex = this.selectIndex;
        }

        async initAppChain(){  
            this.selectClear();
            var name2Hash = await AppChainTool.initAllAppChain()
            for (var chainName in name2Hash){
                var sitem = document.createElement("option");
                sitem.text = chainName;
                sitem.value = name2Hash[chainName];
                this.selectAppChain.appendChild(sitem);
            }
            this.selectAppChain.onchange = (ev) =>{
                this.updateHeight();
                GUI_Route.instance.showUI(PageName.Asset);
            }
        }

        async updateHeight(){
            this.selectIndex = this.selectAppChain.selectedIndex;
            GUITool.chainHash = (this.selectAppChain.childNodes[this.selectIndex] as HTMLOptionElement).value; 
            if (GUITool.chainHash == "NEO"){
                var height = await WWW.api_getNEOHeight();
            }else{
                var height = await WWW.api_getZoroHeight(GUITool.chainHash);
            }            
            this.height.textContent = isNaN(height)?"N/A":height.toString(); 
        }
    }
}