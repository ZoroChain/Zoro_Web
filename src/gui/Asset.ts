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
            height.textContent = await WWW.api_getZoroHeight(AppChainTool.RootChain) + "";
            zoroChain.appendChild(height);
            height.className = "height-num";
            
            var itemsbg = document.createElement('div') as HTMLDivElement;
            itemsbg.className = "asset-item-bg";
            zoroChainBackGround.appendChild(itemsbg);

            var balance = await WWW.api_getBalance(localStorage.address);
            if (balance)
            for (var i = 0; i < balance.length; i++)
                this.additem(itemsbg,balance[i].symbol,balance[i].balance);
           
            //NEO
            var zoroChain = document.createElement('div') as HTMLDivElement;
            zoroChain.className = "main-view-title";
            zoroChainBackGround.appendChild(zoroChain);

            var name = document.createElement('div') as HTMLSpanElement;
            name.textContent = 'NEO CHAIN';
            name.className = "textcss";
            zoroChain.appendChild(name);

            var img = document.createElement('img') as HTMLImageElement;
            img.src = "./img/height.png";
            zoroChain.appendChild(img);
            img.className = "title-img";
            var height = document.createElement('span') as HTMLSpanElement;
            height.textContent = await WWW.api_getNEOHeight() + "";
            zoroChain.appendChild(height);
            height.className = "height-num";
            
            var itemsbg = document.createElement('div') as HTMLDivElement;
            itemsbg.className = "asset-item-bg";
            zoroChainBackGround.appendChild(itemsbg);

            var utxo = await WWW.rpc_getUTXO(localStorage.address);
            this.additem(itemsbg, "NEO", AppChainTool.NEO.toFixed(8).toString());
            this.additem(itemsbg, "GAS", AppChainTool.GAS.toFixed(8).toString());
            var cneo = await WWW.rpc_getBalanceOf(AppChainTool.CGAS, localStorage.address);
            this.additem(itemsbg, "CNEO", cneo);
            var cgas = await WWW.rpc_getBalanceOf(AppChainTool.CGAS, localStorage.address);
            this.additem(itemsbg, "CGAS", cgas);
            var bcp = await WWW.rpc_getBalanceOf(AppChainTool.neoBCP, localStorage.address);
            this.additem(itemsbg, "BCP", bcp);
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