/// <reference path="./Base.ts"/>
/// <reference path="../tools/CSSTools.ts"/>
namespace WebBrowser
{
    export class GUI_Asset implements GUI_Base
    {
        div:HTMLDivElement;
        constructor(div:HTMLDivElement){
            this.div = div;   
        }

        showUI(){
            this.mainAsset(this.div);
        }        

        hideUI(){

        }

        async mainAsset(div:HTMLDivElement){
            if (div.firstChild)
            div.removeChild(div.firstChild);

            var zoroChainBackGround = document.createElement('div') as HTMLDivElement;
            zoroChainBackGround.style.width = "100%";
            zoroChainBackGround.style.margin = '0 auto';
            div.appendChild(zoroChainBackGround);
            //zoro
            var zoroChain = document.createElement('div') as HTMLDivElement;
            zoroChain.className = "main-view-title";
            zoroChainBackGround.appendChild(zoroChain);

            var name = document.createElement('div') as HTMLSpanElement;
            name.textContent = 'ZORO CHAIN';
            name.className = "textcss";
            zoroChain.appendChild(name);

            var img = document.createElement('img') as HTMLImageElement;
            img.src = "./img/height.png";
            zoroChain.appendChild(img);
            img.className = "title-img";
            var height = document.createElement('span') as HTMLSpanElement;
            height.textContent = "1234";
            zoroChain.appendChild(height);
            height.className = "height-num";
            
            var itemsbg = document.createElement('div') as HTMLDivElement;
            itemsbg.className = "asset-item-bg";
            zoroChainBackGround.appendChild(itemsbg);

            var balance = await WWW.api_getBalance(localStorage.address);
            if (balance)
            for (var i = 0; i < balance.length; i++)
                this.additem(itemsbg,balance[i].symbol,balance[i].balance);

            // var BCP = document.createElement('div') as HTMLSpanElement;
            // var bcpnum = await AppChainTool.getNativeBalanceOf("0000000000000000000000000000000000000000");
            // var BCPTitle = document.createElement('div');
            // var BCPData = document.createElement('div');
            // CSSTool.BCP_set(BCP);
            // CSSTool.flowLeft_set(BCPTitle);
            // BCPTitle.textContent = 'BCP';
            // BCPData.textContent = bcpnum;
            // BCPData.style.color = '#C1A26F';
            // CSSTool.flowRight_set(BCPData);
            // BCP.appendChild(BCPTitle);
            // BCP.appendChild(BCPData);
            // zoroChain.appendChild(BCP);
           
            
           
            // //neo
            // var neoChain = document.createElement('div') as HTMLDivElement;
            // CSSTool.zoroChain_set(neoChain);
            // neoChain.style.marginLeft = '60px';
            // zoroChainBackGround.appendChild(neoChain);

            // var name = document.createElement('div') as HTMLSpanElement;
            // name.textContent = 'NEO CHAIN';
            // CSSTool.assets_setname(name);
            // neoChain.appendChild(name);

            // var utxo = await WWW.rpc_getUTXO(GUITool.address);
            // var GAS = document.createElement('div') as HTMLSpanElement;
            // CSSTool.BCP_set(GAS);
            // var GASTitle = document.createElement("div");
            // var GASData = document.createElement("div");
            // CSSTool.flowLeft_set(GASTitle);
            // CSSTool.flowRight_set(GASData);
            // GASTitle.textContent = 'GAS';
            // GASData.textContent = AppChainTool.GAS.toFixed(8).toString();
            // GASData.style.color = '#C1A26F';
            // GAS.appendChild(GASTitle);
            // GAS.appendChild(GASData);
            // neoChain.appendChild(GAS);

            // var CGAS = document.createElement('div') as HTMLSpanElement;
            // CSSTool.BCP_set(CGAS);
            // var CGASTitle = document.createElement('div');
            // var CGASData = document.createElement('div');
            // CGASData.style.color = '#C1A26F';
            // CSSTool.flowLeft_set(CGASTitle);
            // CSSTool.flowRight_set(CGASData);
            // var CgasNum = await WWW.rpc_getBalanceOf(AppChainTool.CGAS, GUITool.address);
            // CGASTitle.textContent = 'CGAS';
            // CGASData.textContent = CgasNum;
            // CGAS.appendChild(CGASTitle);
            // CGAS.appendChild(CGASData);
            // neoChain.appendChild(CGAS);

            // var NEO = document.createElement('div') as HTMLSpanElement;
            // CSSTool.BCP_set(NEO);
            // var NEOTitle = document.createElement('div');
            // var NEOData = document.createElement('div');
            // NEOData.style.color = '#C1A26F';
            // CSSTool.flowLeft_set(NEOTitle);
            // CSSTool.flowRight_set(NEOData);
            // NEOTitle.textContent = 'NEO';
            // NEOData.textContent = AppChainTool.NEO.toFixed(8).toString();
            // NEO.appendChild(NEOTitle);  
            // NEO.appendChild(NEOData);           
            // neoChain.appendChild(NEO);

            // var CNEO = document.createElement('div') as HTMLSpanElement;
            // var CneoNum = await WWW.rpc_getBalanceOf(AppChainTool.CNEO, GUITool.address);
            // CSSTool.BCP_set(CNEO);
            // var CNEOTitle = document.createElement('div');
            // var CNEOData = document.createElement('div');
            // CNEOData.style.color = '#C1A26F';
            // CSSTool.flowLeft_set(CNEOTitle);
            // CSSTool.flowRight_set(CNEOData);
            // CNEOTitle.textContent = 'CNEO';
            // CNEOData.textContent = CneoNum;
            // CNEO.appendChild(CNEOTitle);  
            // CNEO.appendChild(CNEOData);   
            // neoChain.appendChild(CNEO);

            // var NBCP = document.createElement('div') as HTMLSpanElement;
            // var bcpnum = await WWW.rpc_getBalanceOf(AppChainTool.neoBCP, GUITool.address) as string;
            // CSSTool.BCP_set(NBCP);
            // var NBCPTitle = document.createElement('div');
            // var NBCPData = document.createElement('div');
            // NBCPData.style.color = '#C1A26F';
            // CSSTool.flowLeft_set(NBCPTitle);
            // CSSTool.flowRight_set(NBCPData);
            // NBCPTitle.textContent = 'BCP';
            // NBCPData.textContent = bcpnum;
            // NBCP.appendChild(NBCPTitle);  
            // NBCP.appendChild(NBCPData); 
            // neoChain.appendChild(NBCP);

            // //appchain
            // let title = GUI_Route.instance.getUI(PageName.Title) as GUI_Title;
            // if (GUITool.chainHash == "0000000000000000000000000000000000000000" || GUITool.chainHash == "NEO" || title.height.textContent == "N/A"){
            //     return;
            // }
            // var appChain = document.createElement('div') as HTMLDivElement;
            // appChain.style.width = "30%";
            // appChain.style.cssFloat = "left";
            // zoroChainBackGround.appendChild(appChain);

            // var name = document.createElement('span') as HTMLSpanElement;
            // name.style.width = "100%";
            // name.style.cssFloat = "left";
            // name.style.color = "#eeeeee";
            // name.textContent = 'APP CHAIN';
            // appChain.appendChild(name);

            // var BCP = document.createElement('span') as HTMLSpanElement;
            // BCP.style.width = "100%";
            // BCP.style.cssFloat = "left";
            // BCP.style.color = "#eeeeee";
            // var bcpnum = await AppChainTool.getNativeBalanceOf(GUITool.chainHash);
            // BCP.textContent = 'BCP = ' + bcpnum;
            // appChain.appendChild(BCP);
        }

        additem(itemsbg,nametext,numtext){
            var itembg = document.createElement('div') as HTMLDivElement;
            itembg.className = "item-bg";
            itemsbg.appendChild(itembg);
            var name = document.createElement('span') as HTMLSpanElement;
            name.textContent = nametext;
            name.className = "item-name";
            itembg.appendChild(name);
            var num = document.createElement('span') as HTMLSpanElement;
            num.textContent = numtext;
            num.className = "item-num";
            itembg.appendChild(num);
        }
    }
}