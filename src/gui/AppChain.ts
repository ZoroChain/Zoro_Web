/// <reference path="./Base.ts"/>
namespace WebBrowser
{
    export class GUI_AppChain implements GUI_Base
    {
        div:HTMLDivElement;
        constructor(div:HTMLDivElement){
            this.div = div;   
        }

        showUI(){
            this.mainAppChain(this.div);
            GUI_Route.instance.hideUI(PageName.Title);
        }        

        hideUI(){

        }

        mainAppChain(div:HTMLDivElement):void{
                if (div.firstChild)
                div.removeChild(div.firstChild);
                div.style.background = '#333542';
                div.style.position = 'relative';
                div.style.overflow = 'hidden';

                var appChainBackGround = document.createElement('div') as HTMLDivElement;
                CSSTool.zoroChain_set(appChainBackGround);
                appChainBackGround.style.position = 'relative';
                appChainBackGround.style.width = '600px';
                $(appChainBackGround).css("left",($(window).width() - $(appChainBackGround).width()) / 2);
                div.appendChild(appChainBackGround);

                var appChainText = document.createElement('div') as HTMLSpanElement;
                CSSTool.assets_setname(appChainText);
                appChainText.textContent = "应用链";
                appChainBackGround.appendChild(appChainText);

                var chain = document.createElement("div");
                chain.style.textAlign = 'left';
                chain.style.margin = '20px 0';
                chain.style.padding = '10px 45px';
                appChainBackGround.appendChild(chain);

                var appChainName = document.createElement('span') as HTMLSpanElement;
                appChainName.style.color = "#eeeeee";
                appChainName.textContent = "应用链名称";
                chain.appendChild(appChainName);

                var name = document.createElement('input') as HTMLInputElement;
                name.placeholder = '请输入应用链名称';
                CSSTool.addr_set(name);
                name.style.width = '80%';
                CSSTool.flowRight_set(name);
                chain.appendChild(name);

                var firstInt = document.createElement("div");
                firstInt.style.textAlign = 'left';
                firstInt.style.margin = '20px 0';
                firstInt.style.padding = '10px 45px';
                appChainBackGround.appendChild(firstInt);

                var pubkeyList = document.createElement('span') as HTMLSpanElement;
                pubkeyList.style.color = "#eeeeee";
                pubkeyList.textContent = "共识节点数量";
                firstInt.appendChild(pubkeyList);
                
                var pubkeyListNumber = document.createElement('input') as HTMLInputElement;
                pubkeyListNumber.type = "number";
                CSSTool.addr_set(pubkeyListNumber);
                pubkeyListNumber.style.width = '80%';
                pubkeyListNumber.style.marginLeft = '';
                pubkeyListNumber.placeholder = '请输入共识节点数量';
                CSSTool.flowRight_set(pubkeyListNumber);
                firstInt.appendChild(pubkeyListNumber);

                var pbutton = document.createElement("button") as HTMLButtonElement;
                firstInt.appendChild(pbutton);
                pbutton.textContent = "确认";
                pbutton.style.position = 'absolute';
                pbutton.style.right = '0';
                pbutton.style.lineHeight = '30px';
                CSSTool.break_set(pbutton);
                pbutton.onkeyup = () => {
                    if (pbutton.value.length == 1){
                        pbutton.value = pbutton.value.replace(/[^1-9]/g,'')
                    }else{
                        pbutton.value = pbutton.value.replace(/\D/g,'');
                    }
                }
                pbutton.onpaste = () => {
                    if (pbutton.value.length == 1){
                        pbutton.value = pbutton.value.replace(/[^1-9]/g,'')
                    }else{
                        pbutton.value = pbutton.value.replace(/\D/g,'');
                    }
                }
                var back = document.createElement("div");
                $(back).addClass("back");
                appChainBackGround.appendChild(back);
                var pubkey = [];
                pbutton.onclick = () => {
                    if (parseInt(pubkeyListNumber.value) < 4){
                        alert("it must be >= 4");
                        return;
                    }
                    while(back.children.length>0){
                        back.removeChild(back.firstChild);
                    }
                    for (let i = 0; i < parseInt(pubkeyListNumber.value); i++){
                        var pkey1 = document.createElement('span') as HTMLSpanElement, pkeyDiv = document.createElement("div");
                        pkey1.style.color = "#eeeeee";
                        pkey1.textContent = "选择公钥" + (i+1);
                        $(pkeyDiv).css({"margin":"5px 0","text-align":"left","padding":"0 45px"});
                        pkeyDiv.appendChild(pkey1);
                        back.appendChild(pkeyDiv);
                        pubkey.push(AppChainTool.createSelect(pkeyDiv, "pubkey", i + 1));
                        pubkey.forEach(element => {
                            element.style.border = '1px solid #CDCEE0';
                            element.style.background = '#3C3E4B';
                            element.style.color = 'white';
                            element.style.width = '150px';
                            element.style.padding = '5px 15px';      
                            element.style.marginLeft = '15px';                  
                        });
                    }
                }

                var lastInt = document.createElement("div");
                lastInt.style.textAlign = 'left';
                lastInt.style.margin = '20px 0';
                lastInt.style.padding = '10px 45px';
                appChainBackGround.appendChild(lastInt);        

                var ipList = document.createElement('span') as HTMLSpanElement;
                ipList.style.color = "#eeeeee";
                ipList.textContent = "种子节点数量";
                lastInt.appendChild(ipList);
                
                var ipListNumber = document.createElement('input') as HTMLInputElement;
                ipListNumber.type = "number";
                ipListNumber.placeholder = '请输入种子节点数量';
                CSSTool.addr_set(ipListNumber);
                ipListNumber.style.width = '80%';
                ipListNumber.style.marginLeft = '';
                CSSTool.flowRight_set(ipListNumber);
                lastInt.appendChild(ipListNumber);

                var ipbutton = document.createElement("button") as HTMLButtonElement;
                lastInt.appendChild(ipbutton);
                ipbutton.style.position = 'absolute';
                ipbutton.style.right = '0';
                ipbutton.style.lineHeight = '30px';
                CSSTool.break_set(ipbutton);
                ipbutton.textContent = "确认";
                ipbutton.onkeyup = () => {
                    if (ipbutton.value.length == 1){
                        ipbutton.value = ipbutton.value.replace(/[^1-9]/g,'')
                    }else{
                        ipbutton.value = ipbutton.value.replace(/\D/g,'');
                    }
                }
                ipbutton.onpaste = () => {
                    if (ipbutton.value.length == 1){
                        ipbutton.value = ipbutton.value.replace(/[^1-9]/g,'')
                    }else{
                        ipbutton.value = ipbutton.value.replace(/\D/g,'');
                    }
                }
                var backip = document.createElement("div");
                appChainBackGround.appendChild(backip);
                var ip = [];
                var port = [];
                ipbutton.onclick = () => {
                    if (parseInt(ipListNumber.value) < 1){
                        alert("it must be >= 1");
                        return;
                    }
                    while(backip.children.length>0){
                        backip.removeChild(backip.firstChild);
                    }
                    for (let i = 0; i < parseInt(ipListNumber.value); i++){
                        var seed1= document.createElement('span') as HTMLSpanElement,seedDiv = document.createElement("div");
                        
                        seed1.style.color = "#eeeeee";
                        seed1.textContent = "选择种子地址" + (i+1);
                        seedDiv.appendChild(seed1);
                        $(seedDiv).css({"margin":"5px 0","text-align":"left","padding":"0 45px"});
                        backip.appendChild(seedDiv);
                        ip.push(AppChainTool.createSelect(seedDiv, "ip", i + 1));
                        ip.forEach(element => {
                            element.style.border = '1px solid #CDCEE0';
                            element.style.background = '#3C3E4B';
                            element.style.color = 'white';
                            element.style.width = '150px';
                            element.style.padding = '5px 15px';      
                            element.style.marginLeft = '15px'; 
                        });

                        let port1 = document.createElement('input') as HTMLInputElement;
                        port1.value = "15000";
                        CSSTool.addr_set(port1);
                        port1.style.width = '230px';
                        seedDiv.appendChild(port1);
                        port.push(port1);
                    }
                }          

            var btnCreate = document.createElement('button') as HTMLButtonElement;
            btnCreate.textContent = "创建";
            CSSTool.btn_set(btnCreate);
            btnCreate.style.width = '50%';
            btnCreate.style.margin = '20px 0';
            btnCreate.onclick = () => {
                var listpubkey = [];
                for (let i = 0; i < parseInt(pubkeyListNumber.value); i++){
                    listpubkey.push((pubkey[i].childNodes[pubkey[i].selectedIndex] as HTMLOptionElement).value);
                }
                var listip = [];
                for (let i = 0; i < parseInt(ipListNumber.value); i++){
                    listpubkey.push((ip[i].childNodes[ip[i].selectedIndex] as HTMLOptionElement).value +":" + port[i].value);
                }
                AppChainTool.SendCreateAppChain(name.value, GUITool.pubkey, listpubkey, listip, GUITool.prikey, "0000000000000000000000000000000000000000");
            }
            appChainBackGround.appendChild(btnCreate);
        }
    }
}