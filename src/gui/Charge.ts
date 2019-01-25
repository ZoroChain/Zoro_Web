/// <reference path="./Base.ts"/>
/// <reference path="../tools/CSSTools.ts"/>
namespace WebBrowser
{
    export class GUI_Charge implements GUI_Base
    {
        div:HTMLDivElement;
        constructor(div:HTMLDivElement){
            this.div = div;   
        }

        showUI(){
            this.mainCharge(this.div);
            GUI_Route.instance.hideUI(PageName.Title);
        }        

        hideUI(){

        }

        mainCharge(div:HTMLDivElement):void{
            if (div.firstChild)
            div.removeChild(div.firstChild);

            var chargeBackGround = document.createElement('div') as HTMLDivElement;
            chargeBackGround.style.width = "100%";
            chargeBackGround.style.cssFloat = "left";
            div.appendChild(chargeBackGround);

            var upBackGround = document.createElement('div') as HTMLDivElement;
            upBackGround.style.width = "100%";
            upBackGround.style.cssFloat = "left";
            chargeBackGround.appendChild(upBackGround);

            var downBackGround = document.createElement('div') as HTMLDivElement;
            downBackGround.style.width = "100%";
            downBackGround.style.cssFloat = "left";
            chargeBackGround.appendChild(downBackGround);

            var transfer = document.createElement("div");
            CSSTool.transfer_set(transfer);
            upBackGround.appendChild(transfer);

            var normalcharge = document.createElement("button") as HTMLButtonElement;
            transfer.appendChild(normalcharge);
            CSSTool.transfer_btn(normalcharge);
            CSSTool.flowLeft_set(normalcharge);
            normalcharge.style.borderTop = '1px solid #C8AB73';
            normalcharge.textContent = "普通转账";
            
            normalcharge.onclick = () => {
                this.normalCharge(downBackGround);
                $(normalcharge).css({"borderTop":"1px solid #C8AB73","background" : '#3C3E4B'}).siblings().css({"borderTop":"1px solid #333542","background":"#333542"});
            }
            normalcharge.click();

            var singlecharge = document.createElement("button") as HTMLButtonElement;
            transfer.appendChild(singlecharge);
            CSSTool.transfer_btn(singlecharge);
            CSSTool.flowLeft_set(singlecharge);
            singlecharge.textContent = "单链转账";
            singlecharge.onclick = () => {
                this.singleCharge(downBackGround);
                $(singlecharge).css({"borderTop":"1px solid #C8AB73","background" : '#3C3E4B'}).siblings().css({"borderTop":"1px solid #333542","background":"#333542"});
            }

            var chainCharge = document.createElement("button") as HTMLButtonElement;
            transfer.appendChild(chainCharge);
            CSSTool.transfer_btn(chainCharge);
            CSSTool.flowLeft_set(chainCharge);        
            chainCharge.textContent = "跨链转账";
            chainCharge.onclick = () => {
                this.chainCharge(downBackGround);
                $(chainCharge).css({"borderTop":"1px solid #C8AB73","background" : '#3C3E4B'}).siblings().css({"borderTop":"1px solid #333542","background":"#333542"});
            }
        }

        async singleCharge(div:HTMLDivElement){
            if (div.firstChild)div.removeChild(div.firstChild);

            var singlebackground = document.createElement('div') as HTMLDivElement;
            CSSTool.normalbackground_set(singlebackground);
            div.appendChild(singlebackground);
            
            var top = document.createElement("div");
            top.style.width = '100%';
            top.style.overflow = 'hidden';
            top.style.margin = '15px 0';
            singlebackground.appendChild(top);

            var asset = document.createElement('span') as HTMLSpanElement;
            top.appendChild(asset);
            asset.style.color = "#eeeeee";
            asset.textContent = "链名";
            CSSTool.flowLeft_set(asset);

            var select = document.createElement("select") as HTMLSelectElement;
            top.appendChild(select);
            select.style.marginLeft = '20px';
            CSSTool.select_set(select);
            CSSTool.flowLeft_set(select);
            AppChainTool.getChain(select);

            var balance = document.createElement("div");
            CSSTool.flowRight_set(balance);
            top.appendChild(balance);

            var coin = document.createElement('span') as HTMLSpanElement;
            balance.appendChild(coin);
            coin.style.paddingRight = "15px";
            coin.style.color = "#eeeeee";
            coin.textContent = "余额";

            var coinNum = document.createElement('span') as HTMLSpanElement;
            balance.appendChild(coinNum);
            coinNum.style.color = "#C8AB73";
            coinNum.textContent = await CoinTool.getGold("default", GUITool.address, "NEO");
            select.onchange = async (e) => {
                coinNum.textContent = await CoinTool.getGold("default", GUITool.address, (select.childNodes[select.selectedIndex] as HTMLOptionElement).value);
            }

            var button = document.createElement("button") as HTMLButtonElement;
            balance.appendChild(button);
            button.textContent = "刷新";
            CSSTool.break_set(button);
            button.onclick = async () => {
                coinNum.textContent = await CoinTool.getGold("default", GUITool.address, (select.childNodes[select.selectedIndex] as HTMLOptionElement).value);
            }
  
            var address = document.createElement("div");
            address.style.textAlign = 'left';
            address.style.margin = '20px 0';
            singlebackground.appendChild(address);

            var addrText = document.createElement('span') as HTMLSpanElement;
            address.appendChild(addrText);
            addrText.style.color = "#eeeeee";
            addrText.textContent = "地址";

            var addr = document.createElement('input') as HTMLInputElement;
            address.appendChild(addr);
            CSSTool.password_set(addr);
            addr.placeholder = '请输入地址';
            CSSTool.addr_set(addr);
            addrText.appendChild(addr);

            var editMoney = document.createElement("div");
            editMoney.style.textAlign = 'left';
            editMoney.style.margin = '20px 0';
            singlebackground.appendChild(editMoney);

            var goldText = document.createElement('span') as HTMLSpanElement;
            editMoney.appendChild(goldText);
            goldText.style.color = "#eeeeee";
            goldText.textContent = "金额";

            var gold = document.createElement('input') as HTMLInputElement;
            address.appendChild(gold);
            CSSTool.password_set(gold);
            gold.placeholder = '请输入金额';
            CSSTool.addr_set(gold);
            editMoney.appendChild(gold);

            var btnSend = document.createElement('button') as HTMLButtonElement;
            singlebackground.appendChild(btnSend);
            btnSend.textContent = "发送";
            CSSTool.btn_set(btnSend);
            btnSend.style.width = '50%';
            btnSend.onclick = async () => {
                if (coinNum.textContent == "0") return;
                switch((select.childNodes[select.selectedIndex] as HTMLOptionElement).value){                   
                    case "NEO":
                    var utxo = await WWW.rpc_getUTXO(GUITool.address);
                    return await AppChainTool.MakeInvokeTransaction(CoinTool.getassets(utxo),GUITool.address, addr.value, AppChainTool.neoBCP, parseInt(gold.value), GUITool.prikey, GUITool.pubkey);
                    default:
                    return await AppChainTool.MakeZoroTransaction(GUITool.address,addr.value, Number(gold.value), 
                    AppChainTool.zoroBCP, AppChainTool.zoroBCP, GUITool.prikey, GUITool.pubkey, (select.childNodes[select.selectedIndex] as HTMLOptionElement).value);
                }
            }
        }

        async normalCharge(div:HTMLDivElement){
            if (div.firstChild)div.removeChild(div.firstChild);

            var normalbackground = document.createElement('div') as HTMLDivElement;
            CSSTool.normalbackground_set(normalbackground);
            div.appendChild(normalbackground);

            var up = document.createElement('div') as HTMLDivElement;
            up.style.width = '100%';
            up.style.overflow = 'hidden';
            up.style.margin = '15px 0';
            normalbackground.appendChild(up);

            var asset = document.createElement('span') as HTMLSpanElement;
            up.appendChild(asset);
            asset.style.color = "#eeeeee";
            asset.textContent = "资产";
            CSSTool.flowLeft_set(asset);

            var select = CoinTool.ZoroAsset();
            select.style.marginLeft = '20px';
            $(select).prepend("<option value=''>请选择</option>").val('');
            CSSTool.select_set(select);
            CSSTool.flowLeft_set(select);
            up.appendChild(select);            

            var balance = document.createElement("div");
            CSSTool.flowRight_set(balance);
            up.appendChild(balance);

            var coin = document.createElement('span') as HTMLSpanElement;
            balance.appendChild(coin);
            coin.style.paddingRight = '15px';
            coin.style.color = "#eeeeee";
            coin.textContent = "余额";

            var coinNum = document.createElement('span') as HTMLSpanElement;
            balance.appendChild(coinNum);
            coinNum.style.color = "#C8AB73";

            coinNum.textContent = await CoinTool.getGold((select.childNodes[select.selectedIndex] as HTMLOptionElement).value, GUITool.address, AppChainTool.RootChain);
            select.onchange = async () => {
                coinNum.textContent = await CoinTool.getGold((select.childNodes[select.selectedIndex] as HTMLOptionElement).value, GUITool.address, AppChainTool.RootChain);
            }

            var address = document.createElement("div");
            address.style.textAlign = 'left';
            address.style.margin = '20px 0';
            normalbackground.appendChild(address);   
            
            var addrText = document.createElement('span') as HTMLSpanElement;
            address.appendChild(addrText);
            addrText.style.color = "#eeeeee";
            addrText.textContent = "地址";

            var addr = document.createElement('input') as HTMLInputElement;
            CSSTool.password_set(addr);
            addr.placeholder = '请输入地址或域名';
            CSSTool.addr_set(addr);
            address.appendChild(addr);
 
            var editMoney = document.createElement("div");
            editMoney.style.textAlign = 'left';
            editMoney.style.margin = '20px 0';
            normalbackground.appendChild(editMoney);

            var goldText = document.createElement('span') as HTMLSpanElement;
            editMoney.appendChild(goldText);
            goldText.style.color = "#eeeeee";
            goldText.textContent = "金额";

            var gold = document.createElement('input') as HTMLInputElement;
            CSSTool.password_set(gold);
            gold.placeholder = '请输入金额';
            CSSTool.addr_set(gold);
            editMoney.appendChild(gold);

            var btnSend = document.createElement('button') as HTMLButtonElement;
            normalbackground.appendChild(btnSend);
            btnSend.textContent = "发送";
            CSSTool.btn_set(btnSend);
            btnSend.style.width = '50%';
            btnSend.onclick = async () => {
                if (coinNum.textContent == "0") return;
                switch((select.childNodes[select.selectedIndex] as HTMLOptionElement).value){
                    case "ZOROBCP":
                    return await AppChainTool.MakeZoroTransaction(GUITool.address,addr.value, Number(gold.value), 
                    AppChainTool.zoroBCP, AppChainTool.zoroBCP, GUITool.prikey, GUITool.pubkey, AppChainTool.RootChain);
                    case "NEOBCP":
                    var utxo = await WWW.rpc_getUTXO(GUITool.address);
                    return await AppChainTool.MakeInvokeTransaction(CoinTool.getassets(utxo),GUITool.address, addr.value, AppChainTool.neoBCP, parseInt(gold.value), GUITool.prikey, GUITool.pubkey);
                    case "NEO":
                    var utxo = await WWW.rpc_getUTXO(GUITool.address);
                    return await AppChainTool.MakeTransaction(CoinTool.getassets(utxo),addr.value, AppChainTool.id_NEO, parseInt(gold.value), GUITool.prikey, GUITool.pubkey);
                    case "GAS":
                    var utxo = await WWW.rpc_getUTXO(GUITool.address);
                    return await AppChainTool.MakeTransaction(CoinTool.getassets(utxo),addr.value, AppChainTool.id_GAS, parseInt(gold.value), GUITool.prikey, GUITool.pubkey);
                }
            }
        }

        async chainCharge(div:HTMLDivElement){
            if (div.firstChild)div.removeChild(div.firstChild);

            var chainbackground = document.createElement('div') as HTMLDivElement;
            CSSTool.normalbackground_set(chainbackground);
            div.appendChild(chainbackground);

            var top = document.createElement("div");
            top.style.width = '100%';
            top.style.overflow = 'hidden';
            top.style.margin = '15px 0';
            chainbackground.appendChild(top);

            var asset = document.createElement('span') as HTMLSpanElement;
            top.appendChild(asset);
            asset.style.color = "#eeeeee";
            asset.textContent = "方法";
            CSSTool.flowLeft_set(asset);

            var funcSelect = CoinTool.ZoroFunction();
            funcSelect.style.marginLeft = '20px';
            top.appendChild(funcSelect);
            CSSTool.flowLeft_set(funcSelect);
            CSSTool.select_set(funcSelect);

            var center = document.createElement("div");
            center.style.width = '100%';
            center.style.overflow = 'hidden';
            center.style.margin = '15px 0';
            chainbackground.appendChild(center);

            var asset = document.createElement('span') as HTMLSpanElement;
            center.appendChild(asset);
            asset.style.color = "#eeeeee";
            asset.textContent = "资产";
            CSSTool.flowLeft_set(asset);

            var coinSelect = document.createElement('select');
            var sitem = document.createElement("option");
            CSSTool.flowLeft_set(coinSelect);
            CSSTool.select_set(coinSelect);
            coinSelect.style.marginLeft = '20px';
            sitem.text = "BCP";
            sitem.value = "BCP";
            coinSelect.appendChild(sitem);
            center.appendChild(coinSelect);

            var balance = document.createElement("div");
            CSSTool.flowRight_set(balance);
            center.appendChild(balance);

            var coin = document.createElement('span') as HTMLSpanElement;
            balance.appendChild(coin);
            coin.style.paddingRight = '15px';
            coin.style.color = "#eeeeee";
            coin.textContent = "余额";

            var coinNum = document.createElement('span') as HTMLSpanElement;
            balance.appendChild(coinNum);
            coinNum.style.color = "#C8AB73";
            coinNum.textContent = await CoinTool.getGold((funcSelect.childNodes[funcSelect.selectedIndex] as HTMLOptionElement).value, GUITool.address, GUITool.chainHash);

            var editMoney = document.createElement("div");
            editMoney.style.textAlign = 'left';
            editMoney.style.margin = '20px 0';
            chainbackground.appendChild(editMoney);

            var goldText = document.createElement('span') as HTMLSpanElement;
            editMoney.appendChild(goldText);
            goldText.style.color = "#eeeeee";
            goldText.textContent = "金额";

            var gold = document.createElement('input') as HTMLInputElement;
            CSSTool.password_set(gold);
            gold.placeholder = '请输入金额';
            CSSTool.addr_set(gold);
            editMoney.appendChild(gold);

            var btnSend = document.createElement('button') as HTMLButtonElement;
            chainbackground.appendChild(btnSend);
            CSSTool.btn_set(btnSend);
            btnSend.style.width = '50%';
            btnSend.textContent = "发送";
            btnSend.onclick = async () => {
                if (coinNum.textContent == "0") return;
                switch((funcSelect.childNodes[funcSelect.selectedIndex] as HTMLOptionElement).value){
                    case "ZOROBCP":
                    return await AppChainTool.MakeZoroTransaction(GUITool.address, "AUB7tMoKTzN33iVVqhz98vnT3KiG4bqx3f", Number(gold.value), 
                    AppChainTool.Zorotransfer, AppChainTool.Zorotransfer, GUITool.prikey, GUITool.pubkey, GUITool.chainHash);
                    case "NEOBCP":
                    var utxo = await WWW.rpc_getUTXO(GUITool.address);
                    return await AppChainTool.MakeInvokeTransaction(CoinTool.getassets(utxo),GUITool.address, "AMjCDmrbfcBxGPitHcdrUYRyPXD7DfC52c", AppChainTool.Neotransfer, parseInt(gold.value), GUITool.prikey, GUITool.pubkey);
                }
            }
            funcSelect.onchange = async () => {
                coinNum.textContent = await CoinTool.getGold((funcSelect.childNodes[funcSelect.selectedIndex] as HTMLOptionElement).value, GUITool.address, GUITool.chainHash);
            }
        }              
    }
}