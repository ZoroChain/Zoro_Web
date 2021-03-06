﻿namespace WebBrowser
{
    export class Block implements Page
    {
        app: App
        langType: string;
        constructor(app: App) {
            this.app = app
        }

        getLangs()
        {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "block_info_title",
                    "block_info_block",
                   // "block_info_chainhash",
                    "block_info_hash",
                    "block_info_time",
                    "block_info_size",
                    "block_info_pre",
                    "block_info_next",
                    "block_info_tran", "block_info_txid", "block_info_type", "block_info_txsize", "block_info_ver"
                ]
                page_lang.forEach(
                    lang => {
                        document.getElementById(lang).textContent = this.app.langmgr.get(lang)
                    }
                )
                
                this.langType = this.app.langmgr.type
            }
            
        }
        
        div: HTMLDivElement = document.getElementById("block-info") as HTMLDivElement;
        footer: HTMLDivElement = document.getElementById('footer-box') as HTMLDivElement;
        private pageUtil: PageUtil;
        private txs: Tx[];
        close(): void
        {
            this.div.hidden = true;
            this.footer.hidden = true;
        }

        start()
        {
            this.getLangs()
            var appchain = locationtool.getParam3();                       
            if (appchain && appchain.length == 40){
                this.queryBlock(locationtool.getParam());
                var href = locationtool.getUrl() + "/blocks/" + appchain;
            }else{
                this.queryBlock(locationtool.getParam());
                var href = locationtool.getUrl() + "/blocks";
            }
            
            let html = '<a href="' + href + '" target="_self">&lt&lt&lt'+this.app.langmgr.get("block_goallblock")+'</a>';
            $("#goallblock").empty();
            $("#goallblock").append(html);

            $("#block-tran-next").off("click").click(() => {
                if (this.pageUtil.currentPage == this.pageUtil.totalPage) {
                    this.pageUtil.currentPage = this.pageUtil.totalPage;
                } else {
                    this.pageUtil.currentPage += 1;
                    this.updateBlockTrans(this.pageUtil);                    
                }
            });
            $("#block-tran-previous").off("click").click(() => {
                if (this.pageUtil.currentPage <= 1) {
                    this.pageUtil.currentPage = 1;
                } else {
                    this.pageUtil.currentPage -= 1;
                    this.updateBlockTrans(this.pageUtil);  
                }
            });
            this.div.hidden = false;
            this.footer.hidden = false;
        }

        public async queryBlock( index )
        {
            let ajax: Ajax = new Ajax();
            let blocks: Block[] = null;
            var appchain = locationtool.getParam3();
            if (appchain && appchain.length == 40){
                if (index.indexOf("0x") < 0){
                    blocks = await WWW.getacblock(appchain, index);
                }else{
                    blocks = await WWW.getappchainblockFromHash(appchain, index);
                }	
            }else{
                if (index.indexOf("0x") < 0){
                    blocks = await WWW.getblock(index);
                }else{
                    blocks = await WWW.getblockFromHash(index);
                }	
            }           		
            let block: Block = blocks[0];
			let time = DateTool.getTime(block.time);

			var id = block.hash
			id = id.replace('0x', '');
			//id = id.substring(0, 4) + '...' + id.substring(id.length - 4);

	
			//$("#chainhash").text(block.chainhash);
			$("#hash").text(id);
            $("#size" ).text( block.size + ' bytes' );
            $("#time").text(time);
            $("#version" ).text( block.version );
            $("#index").text(block.index);
            //`<a href="`+ Url.href_block(item.index) + `" target="_self">`
            if (block.index == 0) {
                $("#previos-block").html(`<a href="` + Url.href_block(block.index - 1) + `" target="_self"></a>`);
            }else{
                $("#previos-block").html(`<a href="` + Url.href_block(block.index - 1) + `" target="_self">` + (block.index - 1)+`</a>`);
            }            
			$("#next-block").html(`<a href="` + Url.href_block(parseInt(block.index.toString()) + 1) + `" target="_self">` + (parseInt(block.index.toString()) + 1) + `</a>`);
            this.txs = block.tx;
            let txsLength = this.txs.length;
            this.pageUtil = new PageUtil(this.txs.length, 10);
            if (txsLength > this.pageUtil.pageSize) {
                $(".block-tran-page").show();
            } else {
                $(".block-tran-page").hide();
            }
            this.updateBlockTrans(this.pageUtil);
        }
        updateBlockTrans(pageUtil: PageUtil) {
            $("#txs").empty();
            let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
            let maxNum = pageUtil.totalCount;
            let diffNum = maxNum - minNum;
            if (diffNum > pageUtil.pageSize) {
                maxNum = pageUtil.currentPage * pageUtil.pageSize;
            } else {
                maxNum = pageUtil.totalCount;
            }
            let arrtxs = new Array();
            for (let i = minNum; i < maxNum; i++) {
                arrtxs.push(this.txs[i]);
            }
            arrtxs.forEach(tx => {
                var id = tx.txid.replace('0x', '');
                id = id.substring(0, 6) + '...' + id.substring(id.length - 6);
                this.loadBlockTransView(tx.txid, id, tx.type, tx.size, tx.version);
            });

            let pageMsg = "Transactions " + (minNum + 1) + " to " + maxNum + " of " + pageUtil.totalCount;
            $("#block-tran-msg").html(pageMsg);
            if (pageUtil.totalPage - this.pageUtil.currentPage) {
                $("#block-tran-next").removeClass('disabled');
            } else {
                $("#block-tran-next").addClass('disabled');
            }
            if (pageUtil.currentPage - 1) {
                $("#block-tran-previous").removeClass('disabled');
            } else {
                $("#block-tran-previous").addClass('disabled');
            }
        }
        loadBlockTransView(txid: string, id: string, type: string, size: number, version: number) {
            let html = `
                    <tr>
                        <td><a href="` + Url.href_transaction(txid) + `" target="_self">` + id + `</a></td>
                        <td>` + type.replace("Transaction", "") + `</td>
                        <td>` + size + ` bytes</td>
                        <td>` + version + `</td>
                    </tr>`;
            $("#txs").append(html);
        }
    }
}