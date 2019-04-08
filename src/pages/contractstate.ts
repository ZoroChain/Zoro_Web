namespace WebBrowser
{
	export class ContractStateInfo implements Page {
		app: App
		langType: string;
		constructor(app: App) {
			this.app = app
		}

		getLangs() {
			if (this.langType != this.app.langmgr.type) {
				let page_lang = [	
                    "contract_title",			
					"contracthash",
					"contractname",
					"contractauthor",
					"contractemail",
					"contractdescription"
				]
				page_lang.forEach(
					lang => {
						document.getElementById(lang).textContent = this.app.langmgr.get(lang)
					}
				)

				this.langType = this.app.langmgr.type
			}

		}

        div: HTMLDivElement = document.getElementById("contract-info") as HTMLDivElement;
        footer: HTMLDivElement = document.getElementById('footer-box') as HTMLDivElement;
        nep5name: HTMLSpanElement;
        nep5type: HTMLSpanElement;
        nep5id: HTMLSpanElement;
        nep5available: HTMLSpanElement;
        nep5precision: HTMLSpanElement;
        nep5admin: HTMLSpanElement;
        rankPageUtil: PageUtil;
        async start()
        {
            this.getLangs();
               
            var appchain = locationtool.getParam3();
            if (appchain) {
                var contract = locationtool.getParam();
                var href = locationtool.getUrl() + "/asset/" + appchain;
            }else{
                var href = locationtool.getUrl();
                var contract = locationtool.getParam();
            }               

            let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get("back_chainmessage") + '</a>';
            $("#contract").empty();
            $("#contract").append(html);

            this.loadAssetInfoView(contract);

            this.div.hidden = false;
            this.footer.hidden = false;
        }

        close(): void
        {
            this.div.hidden = true;
            this.footer.hidden = true;
        }

        async loadAssetInfoView(contract: string)
        {                       
            if (locationtool.getParam3()){
                var appchain = locationtool.getParam3();
                var contractstate = await WWW.api_getContractState(appchain, contract);
            }else{
                var contractstate = await WWW.api_getContractState("",contract)
            }   
            
            $("#contract_hash").text(contractstate[0].contract);
            $("#contract_name").text(contractstate[0].name);
            $("#contract_author").text(contractstate[0].author);
            $("#contract_email").text(contractstate[0].email);
            $("#contract_decimals").text(contractstate[0].description);         
        }       
    }
}