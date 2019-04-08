namespace WebBrowser {

    /**
     * @class 交易详情
     */
	export class Transaction implements Page {
		app: App
		langType: string;
		constructor(app: App) {
			this.app = app
		}

		getLangs() {
			if (this.langType != this.app.langmgr.type) {
				let page_lang = [
					"tran_title",
					"tran_title_1",
					"tran_txid",
					"tran_type",
					"tran_sysfee",
					"tran_gas_limit",
            		"tran_gas_price",
					"tran_size",
					"tran_height",
					"tran_time",

					"tran_method",
					"tran_method_calltype",
					"tran_method_method",
					"tran_method_contract",

					"tran_nep5",
					"tran_nep5_asset",
					"tran_nep5_from",
					"tran_nep5_to",
					"tran_nep5_value",

				]
				page_lang.forEach(
					lang => {
						document.getElementById(lang).textContent = this.app.langmgr.get(lang)
					}
				)
				this.langType = this.app.langmgr.type
			}

		}

		close(): void {
			this.div.hidden = true;
			this.footer.hidden = true;
		}
		div: HTMLDivElement = document.getElementById("transaction-info") as HTMLDivElement;
		footer: HTMLDivElement = document.getElementById('footer-box') as HTMLDivElement;

		start() {
			this.getLangs()

			//this.div.innerHTML = pages.transaction;
			var appchain = locationtool.getParam3();
            if (appchain && appchain.length == 40){
				this.updateTxInfo(locationtool.getParam()); 
				var href = locationtool.getUrl() + "/transactions/" + appchain;
			}else{
				this.updateTxInfo(locationtool.getParam());
				var href = locationtool.getUrl() + "/transactions"; 
			}
			
			let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get("tran_goalltran") + '</a>'; 

			$("#goalltrans").empty();
			$("#goalltrans").append(html);
			this.div.hidden = false;
			this.footer.hidden = false;
		}
		public async updateTxInfo(txid: string) {
			var appchain = locationtool.getParam3();
            if (appchain && appchain.length == 40){
				var txInfo: Tx = await WWW.getappchainrawtransaction(appchain, txid);
			}else{
				var txInfo: Tx = await WWW.getrawtransaction(txid);
			}
			$("#type").text(txInfo.type.replace("Transaction", ""));
			$("#txid").text(txInfo.txid);
			$("#blockindex").empty();
			$("#blockindex").append("<a href='" + Url.href_block(txInfo.blockindex) + "'>" + txInfo.blockindex + "</a>");
			$("#txsize").text(txInfo.size + " bytes");
			$("#sysfee").text(txInfo.gas + " BCP");
			$("#gaslimit").text(txInfo.gaslimit);
			$("#gasprice").text(txInfo.gasprice);
			let ajax: Ajax = new Ajax();
			
			let blocks: Block[] = await WWW.getblock(txInfo.blockindex); //let blocks: Block[] = await ajax.post('getblock', [txInfo.blockindex]); 
			let block: Block = blocks[0];
			let time = DateTool.getTime(block.time); 

			$("#transaction-time").text(time);

			$("#txidscriptmethod").empty();
			var appchain = locationtool.getParam3();
            if (appchain && appchain.length == 40){
				var txidMethod = await WWW.api_getScriptMethod(txInfo.txid, appchain);
			}else{
				var txidMethod = await WWW.api_getScriptMethod(txInfo.txid);
			}
			//console.log(txidNep);
			if (txidMethod) {
				$(".txidmethod-warp").show();
				txidMethod.forEach((item) => {
					this.loadTxidMethodView(item.calltype, item.method, item.contract, item.name);
				})
			} else {
				$(".txidmethod-warp").hide();
			}

			$("#txidnep5").empty();
			var appchain = locationtool.getParam3();
            if (appchain && appchain.length == 40){
				var txidNep = await WWW.api_getappchainnep5transferbytxid(appchain, txInfo.txid);
			}else{
				var txidNep = await WWW.api_getnep5transferbytxid(txInfo.txid);
			}
			//console.log(txidNep);
			if (txidNep) {
				$(".txidnep-warp").show();
				txidNep.forEach((item) => {
					this.loadTxidNep5View(item.asset, item.from, item.to, item.value, item.symbol);
				})
			} else {
				$(".txidnep-warp").hide();
			}
		}

		async loadTxidMethodView(calltype: string, method: string, contract: string, name:string) {
			var html = "";
			if (contract.length > 39) {
				let href = Url.href_contractstate(contract);
				html = `
						<tr>
						<td>` + calltype + `</td>
						<td>` + method + `</td>
						<td><a href="`+ href + `" target="_self">` + name + `</td>
						</tr>`
			}else{
				html = `
						<tr>
						<td>` + calltype + `</td>
						<td>` + method + `</td>
						<td>` + contract + `</td>
						</tr>`
			}
			
			$("#txidscriptmethod").append(html);
		}

		async loadTxidNep5View(asset: string, from: string, to: string, value: number, symbol:string) {
			let href = Url.href_nep5(asset);
			//let nep5Name = await WWW.api_getnep5(asset); 
			let html = `
                    <tr>
                    <td> <a href="`+ href + `" target="_self">` + symbol + `</a></td>
                    <td>` + from + `</td>
                    <td>` + to + `</td>
                    <td>` + value + `</td>
                    </tr>`
			$("#txidnep5").append(html);
		}

		public static groupByaddr(arr: any[]) {
			var map = {},
				dest = [];
			for (var i = 0; i < arr.length; i++) {
				var ai = arr[i];
				if (!map[ai.addr]) {
					dest.push({
						addr: ai.addr,
						data: [ai]
					});
					map[ai.addr] = ai;
				} else {
					for (var j = 0; j < dest.length; j++) {
						var dj = dest[j];
						if (dj.addr == ai.addr) {
							dj.data.push(ai);
							break;
						}
					}
				}
			}
			return dest;
		}

	}

}
