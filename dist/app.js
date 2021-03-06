var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @private currentPage 当前页
 * @private pageSize 每页条数
 * @private totalCount 总记录数
 * @private currentPage 当前页
 */
var WebBrowser;
/**
 * @private currentPage 当前页
 * @private pageSize 每页条数
 * @private totalCount 总记录数
 * @private currentPage 当前页
 */
(function (WebBrowser) {
    class PageUtil {
        /**
         *
         * @param total 总记录数
         * @param pageSize 每页条数
         */
        constructor(total, pageSize) {
            this._currentPage = 1;
            this._totalCount = total;
            this._pageSize = pageSize;
            this._totalPage = total % pageSize == 0 ? total / pageSize : Math.ceil((total / pageSize));
        }
        ;
        /**
         * currentPage 返回当前页码
         */
        get currentPage() {
            this._totalPage = this.totalCount % this.pageSize == 0 ? this.totalCount / this.pageSize : Math.ceil((this.totalCount / this.pageSize));
            return this._currentPage;
        }
        /**
         *
         */
        set currentPage(currentPage) {
            this._currentPage = currentPage;
        }
        /**
         * pageSize 每页条数
         */
        get pageSize() {
            return this._pageSize;
        }
        /**
         * set count
         */
        set pageSize(pageSize) {
            this._pageSize = pageSize;
        }
        /**
         * pageSize 每页条数
         */
        get totalCount() {
            return this._totalCount;
        }
        /**
         * set count
         */
        set totalCount(totalCount) {
            this._totalCount = totalCount;
        }
        /**
     * pageSize 总页数
     */
        get totalPage() {
            this._totalPage = this._totalCount % this._pageSize == 0 ? this._totalCount / this._pageSize : Math.ceil(this._totalCount / this._pageSize);
            return this._totalPage;
        }
    }
    WebBrowser.PageUtil = PageUtil;
    class Url {
        static href_blocks() {
            var appchain = WebBrowser.locationtool.getParam3();
            if (appchain && appchain.length == 40) {
                return WebBrowser.locationtool.getUrl() + "/blocks/appchain/" + appchain;
            }
            return WebBrowser.locationtool.getUrl() + '/blocks';
        }
        static href_appchains() {
            return WebBrowser.locationtool.getUrl() + '/appchains';
        }
        static href_appchaintransaction(appchain, appchaintransaction) {
            return WebBrowser.locationtool.getUrl() + '/appchaintransaction/' + appchaintransaction + '/' + appchain;
        }
        static href_appchainblock(appchain, index) {
            return WebBrowser.locationtool.getUrl() + '/appchainblock/' + index + '/' + appchain;
        }
        static href_nep5info(nep5id) {
            var appchain = WebBrowser.locationtool.getParam3();
            if (appchain && appchain.length == 40) {
                return WebBrowser.locationtool.getUrl() + '/nep5info/' + nep5id + '/' + appchain;
            }
            return WebBrowser.locationtool.getUrl() + '/nep5info/' + nep5id;
        }
        static href_transactions() {
            var appchain = WebBrowser.locationtool.getParam3();
            if (appchain && appchain.length == 40) {
                return WebBrowser.locationtool.getUrl() + "/transactions/appchain/" + appchain;
            }
            return WebBrowser.locationtool.getUrl() + '/transactions';
        }
        static href_addresses() {
            var appchain = WebBrowser.locationtool.getParam3();
            if (appchain && appchain.length == 40) {
                return WebBrowser.locationtool.getUrl() + "/addresses/appchain/" + appchain;
            }
            return WebBrowser.locationtool.getUrl() + '/addresses';
        }
        static href_assets() {
            return WebBrowser.locationtool.getUrl() + '/appchains';
        }
        static href_nnsevent() {
            return WebBrowser.locationtool.getUrl() + '/nnsevent';
        }
        static href_block(block) {
            var appchain = WebBrowser.locationtool.getParam3();
            if (appchain && appchain.length == 40) {
                return WebBrowser.locationtool.getUrl() + "/block/" + block + "/" + appchain;
            }
            return WebBrowser.locationtool.getUrl() + "/block/" + block;
        }
        static href_gui() {
            return WebBrowser.locationtool.getUrl() + '/gui';
        }
        static href_blockh(block) {
            var appchain = WebBrowser.locationtool.getParam3();
            if (appchain && appchain.length == 40) {
                return WebBrowser.locationtool.getUrl() + "/block/" + block + "/" + appchain;
            }
            return WebBrowser.locationtool.getUrl() + '/block/' + block;
        }
        static href_transaction(tx) {
            var appchain = WebBrowser.locationtool.getParam3();
            if (appchain && appchain.length == 40) {
                return WebBrowser.locationtool.getUrl() + "/transaction/" + tx + "/" + appchain;
            }
            else {
                return WebBrowser.locationtool.getUrl() + "/transaction/" + tx;
            }
        }
        static href_actransaction(tx) {
            return WebBrowser.locationtool.getUrl() + "/asset/" + tx;
        }
        static href_address(addr) {
            var appchain = WebBrowser.locationtool.getParam3();
            if (appchain && appchain.length == 40) {
                return WebBrowser.locationtool.getUrl() + "/address/" + addr + "/" + appchain;
            }
            else {
                return WebBrowser.locationtool.getUrl() + "/address/" + addr;
            }
        }
        static href_acblock(block) {
            return WebBrowser.locationtool.getUrl() + "/appchain/" + block;
        }
        static href_asset(asset) {
            return WebBrowser.locationtool.getUrl() + '/asset/' + asset;
        }
        static href_assettran() {
            return WebBrowser.locationtool.getUrl() + '/asset/';
        }
        static href_assetblock() {
            return WebBrowser.locationtool.getUrl() + '/asset/';
        }
        static href_nep5(nep5) {
            return WebBrowser.locationtool.getUrl() + '/nep5/' + nep5;
        }
        static href_contractstate(contract) {
            return WebBrowser.locationtool.getUrl() + '/contract/' + contract;
        }
    }
    WebBrowser.Url = Url;
    class Nep5as {
    }
    WebBrowser.Nep5as = Nep5as;
    let AssetEnum;
    (function (AssetEnum) {
        AssetEnum["NEO"] = "0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
        AssetEnum["GAS"] = "0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
    })(AssetEnum = WebBrowser.AssetEnum || (WebBrowser.AssetEnum = {}));
    class Detail {
        constructor(address, height, balances) {
            this.address = address;
            this.height = height;
            this.balances = balances;
        }
    }
    WebBrowser.Detail = Detail;
    WebBrowser.network = "mainnet";
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class Neotool {
        constructor() { }
        /**
         * verifyPublicKey 验证公钥
         * @param publicKey 公钥
         */
        static verifyPublicKey(publicKey) {
            var array = Neo.Cryptography.Base58.decode(publicKey);
            //var hexstr = array.toHexString();
            //var salt = array.subarray(0, 1);
            //var hash = array.subarray(1, 1 + 20);
            var check = array.subarray(21, 21 + 4); //
            var checkdata = array.subarray(0, 21); //
            var hashd = Neo.Cryptography.Sha256.computeHash(checkdata); //
            hashd = Neo.Cryptography.Sha256.computeHash(hashd); //
            var hashd = hashd.slice(0, 4); //
            var checked = new Uint8Array(hashd); //
            var error = false;
            for (var i = 0; i < 4; i++) {
                if (checked[i] != check[i]) {
                    error = true;
                    break;
                }
            }
            return !error;
        }
        /**
         * wifDecode wif解码
         * @param wif wif私钥
         */
        static wifDecode(wif) {
            let result = { err: false, result: { pubkey: "", prikey: "", address: "" } };
            var prikey;
            var pubkey;
            var address;
            try {
                prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
                var hexstr = prikey.toHexString();
                result.result.prikey = hexstr;
            }
            catch (e) {
                result.err = true;
                result.result = e.message;
                return result;
            }
            try {
                pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
                var hexstr = pubkey.toHexString();
                result.result.pubkey = hexstr;
            }
            catch (e) {
                result.err = true;
                result.result = e.message;
                return result;
            }
            try {
                address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
                result.result.address = address;
            }
            catch (e) {
                result.err = true;
                result.result = e.message;
                return result;
            }
            return result;
        }
        /**
         * nep2FromWif
         */
        static nep2FromWif(wif, password) {
            var prikey;
            var pubkey;
            var address;
            let res = { err: false, result: { address: "", nep2: "" } };
            try {
                prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
                var n = 16384;
                var r = 8;
                var p = 8;
                ThinNeo.Helper.GetNep2FromPrivateKey(prikey, password, n, r, p, (info, result) => {
                    res.err = false;
                    res.result.nep2 = result;
                    pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
                    var hexstr = pubkey.toHexString();
                    address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
                    res.result.address = address;
                    return res;
                });
            }
            catch (e) {
                res.err = true;
                res.result = e.message;
                return res;
            }
        }
        /**
         * nep2TOWif
         */
        static nep2ToWif(nep2, password) {
            return __awaiter(this, void 0, void 0, function* () {
                var prikey;
                var pubkey;
                var address;
                let promise = new Promise((resolve, reject) => {
                    let n = 16384;
                    var r = 8;
                    var p = 8;
                    ThinNeo.Helper.GetPrivateKeyFromNep2(nep2, password, n, r, p, (info, result) => {
                        //spanNep2.textContent = "info=" + info + " result=" + result;
                        prikey = result;
                        if (prikey != null) {
                            var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
                            var address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
                            var wif = ThinNeo.Helper.GetWifFromPrivateKey(prikey);
                            resolve({ err: false, result: { pubkey, address, prikey } });
                        }
                        else {
                            // spanWif.textContent = "result=" + "info=" + info + " result=" + result;
                            reject({ err: false, result: result });
                        }
                    });
                });
                return promise;
            });
        }
        /**
         * nep6Load
         */
        static nep6Load(wallet, password) {
            return __awaiter(this, void 0, void 0, function* () {
                // let promise:Promise<result> = new Promise((resolve,reject)=>{
                try {
                    //getPrivateKey 是异步方法，且同时只能执行一个
                    var istart = 0;
                    let res = new Array();
                    var getkey = null;
                    // getkey = async (keyindex: number) => {
                    for (let keyindex = 0; keyindex < wallet.accounts.length; keyindex++) {
                        let account = wallet.accounts[keyindex];
                        try {
                            let result = yield this.getPriKeyfromAccount(wallet.scrypt, password, account);
                            res.push(result.result);
                        }
                        catch (error) {
                            console.error(error);
                            return { err: true, result: error };
                        }
                    }
                    return { err: false, result: res };
                }
                catch (e) {
                }
                // });
                // return promise;
            });
        }
        /**
         * getPriKeyform
         */
        static getPriKeyfromAccount(scrypt, password, account) {
            return __awaiter(this, void 0, void 0, function* () {
                let promise = new Promise((resolve, reject) => {
                    account.getPrivateKey(scrypt, password, (info, result) => {
                        if (info == "finish") {
                            var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(result);
                            var address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
                            var wif = ThinNeo.Helper.GetWifFromPrivateKey(result);
                            var hexkey = result.toHexString();
                            resolve({ err: false, result: { pubkey: pubkey, address: address, prikey: result } });
                        }
                        else {
                            // info2.textContent += info + "|" + result;
                            reject({ err: true, result: result });
                        }
                    });
                });
                return promise;
            });
        }
    }
    WebBrowser.Neotool = Neotool;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./tools/neotool.ts" />
var WebBrowser;
/// <reference path="./tools/neotool.ts" />
(function (WebBrowser) {
    class Navbar {
        constructor(app) {
            this.indexBtn = document.getElementById("index-btn");
            this.indexa = document.getElementById("indexa");
            this.browBtn = document.getElementById("brow-btn");
            this.browsea = document.getElementById("browsea");
            this.blockBtn = document.getElementById("blocks-btn");
            this.blocka = document.getElementById("blocksa");
            this.txlistBtn = document.getElementById("txlist-btn");
            this.txlista = document.getElementById("txlista");
            this.addrsBtn = document.getElementById("addrs-btn");
            this.addrsa = document.getElementById("addrsa");
            this.assetBtn = document.getElementById("asset-btn");
            this.asseta = document.getElementById("assetsa");
            this.guiBtn = document.getElementById("gui-btn");
            this.guia = document.getElementById("guia");
            // walletBtn: HTMLLIElement = document.getElementById("wallet-btn") as HTMLLIElement;
            // walleta: HTMLAnchorElement = document.getElementById("walleta") as HTMLAnchorElement;
            // nnsBtn: HTMLLIElement = document.getElementById("nns-btn") as HTMLLIElement;
            // nnsa: HTMLAnchorElement = document.getElementById("nnssa") as HTMLAnchorElement;
            this.searchBtn = document.getElementById("searchBtn");
            this.searchText = document.getElementById("searchText");
            this.searchList = document.getElementById("seach_list");
            this.cpLock = false;
            this.currentLine = 0;
            this.app = app;
        }
        getLangs() {
            let page_lang = ["indexa", "browsea", "blocka", "txlista", "addrsa", "asseta", "guia"];
            page_lang.forEach(lang => {
                this[lang].textContent = this.app.langmgr.get("nav_" + lang);
            });
        }
        start() {
            this.getLangs();
            this.indexa.onclick = () => {
                this.skip("");
            };
            this.blocka.onclick = () => {
                this.skip("/blocks");
            };
            this.txlista.onclick = () => {
                this.skip("/transactions");
            };
            this.addrsa.onclick = () => {
                this.skip("/addresses");
            };
            this.asseta.onclick = () => {
                this.skip("/assets");
            };
            this.guia.onclick = () => {
                this.skip("/gui");
            };
            // this.nnsa.onclick = () => {
            //     this.skip("/nnsevent");
            // }
            this.searchBtn.onclick = () => {
                this.jump();
            };
            this.searchText.addEventListener('compositionstart', () => {
                this.cpLock = true;
            });
            this.searchText.addEventListener('compositionend', () => {
                this.cpLock = false;
                if (!this.cpLock)
                    this.fuzzyseach();
            });
            this.searchText.addEventListener('input', () => {
                if (!this.cpLock)
                    this.fuzzyseach();
            });
            this.searchText.onkeydown = (e) => {
                if (e.keyCode == 13) {
                    this.jump();
                }
                else if (e.keyCode == 38) {
                    this.changeItem();
                    this.currentLine--;
                }
                else if (e.keyCode == 40) {
                    this.changeItem();
                    this.currentLine++;
                }
            };
            this.searchList.onclick = (e) => {
                let event = e || window.event;
                let target = event.target || event.srcElement;
                if (target.nodeName.toLowerCase() == 'li') {
                    this.searchText.value = target.innerHTML;
                    let data = target.getAttribute("data");
                    window.open(WebBrowser.locationtool.getUrl() + '/asset/' + data);
                }
                $("#seach_list").empty();
            };
            // this.walletBtn.onclick = () =>
            // {
            //     if ( locationtool.getNetWork() == 'testnet' )
            //         window.open( "https://testwallet.nel.group/" );
            //     else
            //         window.open( "https://wallet.nel.group/" );
            // }
            document.onclick = (ev) => {
                let event = ev || window.event;
                let target = event.target || event.srcElement;
                if (target.nodeName.toLowerCase() != 'li') {
                    $("#seach_list").empty();
                }
            };
        }
        skip(page) {
            window.location.href = WebBrowser.locationtool.getUrl() + page;
        }
        jump() {
            return __awaiter(this, void 0, void 0, function* () {
                let appchain = WebBrowser.locationtool.getParam3();
                let search = this.searchText.value;
                search = search.trim();
                if (search) {
                    if (search.length == 34) {
                        if (WebBrowser.Neotool.verifyPublicKey(search)) {
                            if (appchain && appchain.length == 40) {
                                window.open(WebBrowser.locationtool.getUrl() + '/address/' + search + "/" + appchain);
                            }
                            else {
                                window.open(WebBrowser.locationtool.getUrl() + '/address/' + search);
                            }
                        }
                        else {
                            $("#errContent").text(this.app.langmgr.get('nav_errContent'));
                            $('#errMsg').modal('show');
                            return false;
                        }
                        return;
                    }
                    else {
                        search = search.replace('0x', '');
                        if (search.length == 64) {
                            if (appchain && appchain.length == 40) {
                                window.open(WebBrowser.locationtool.getUrl() + '/transaction/' + search + "/" + appchain);
                            }
                            else {
                                window.open(WebBrowser.locationtool.getUrl() + '/transaction/' + search);
                            }
                        }
                        else if (search.length == 40 || search.length == 42) {
                            if (appchain && appchain.length == 40) {
                                var page = yield WebBrowser.WWW.getPageMessage(appchain, search);
                                switch (page[0]["page"]) {
                                    case "nep5asset":
                                        window.open(WebBrowser.locationtool.getUrl() + '/nep5info/' + search + "/" + appchain);
                                        break;
                                    case "contract":
                                        window.open(WebBrowser.locationtool.getUrl() + '/contract/' + search + "/" + appchain);
                                        break;
                                }
                            }
                            else {
                                var page = yield WebBrowser.WWW.getPageMessage(WebBrowser.AppChainTool.RootChain, search);
                                switch (page[0]["page"]) {
                                    case "nep5asset":
                                        window.open(WebBrowser.locationtool.getUrl() + '/nep5info/' + search);
                                        break;
                                    case "contract":
                                        window.open(WebBrowser.locationtool.getUrl() + '/contract/' + search);
                                        break;
                                }
                            }
                        }
                        else if (!isNaN(Number(search))) {
                            if (appchain && appchain.length == 40) {
                                window.open(WebBrowser.locationtool.getUrl() + '/block/' + search + "/" + appchain);
                            }
                            else {
                                window.open(WebBrowser.locationtool.getUrl() + '/block/' + search);
                            }
                        }
                        else if (search.length > 64) {
                            let length = this.searchList.children.length;
                            if (length) {
                                let data = this.searchList.children[this.currentLine - 1].getAttribute("data");
                                if (appchain && appchain.length == 40) {
                                    window.open(WebBrowser.locationtool.getUrl() + '/asset/' + search + "/" + appchain);
                                }
                                else {
                                    window.open(WebBrowser.locationtool.getUrl() + '/asset/' + data);
                                }
                                $("#seach_list").empty();
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    return false;
                }
            });
        }
        fuzzyseach() {
            return __awaiter(this, void 0, void 0, function* () {
                $("#seach_list").empty();
                this.currentLine = 0;
                let search = this.searchText.value;
                if (search) {
                    let list = yield WebBrowser.WWW.apiaggr_searchAsset(search);
                    if (list) {
                        let length = list.length;
                        for (let i = 0; i < length; i++) {
                            let oLi = '<li data="' + list[i]["assetid"] + '">' + list[i]["name"] + '(' + list[i]["assetid"] + ')' + '</li>';
                            $("#seach_list").append(oLi);
                        }
                    }
                }
            });
        }
        changeItem() {
            let length = this.searchList.children.length;
            if (length) {
                for (let i = 0; i < length; i++) {
                    this.searchList.children[i].className = "";
                }
                if (this.currentLine < 0 || this.currentLine == 0) {
                    this.currentLine = 0;
                }
                if (this.currentLine == length || this.currentLine > length) {
                    this.currentLine = length - 1;
                }
                //调试使用
                this.searchList.children[this.currentLine].className = "active";
                this.searchText.value = this.searchList.children[this.currentLine].innerHTML;
            }
        }
    }
    WebBrowser.Navbar = Navbar;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class NetWork {
        constructor(app) {
            this.title = document.getElementById("network");
            this.testbtn = document.getElementById("testnet-btn");
            this.testa = document.getElementById("testa");
            this.mainbtn = document.getElementById("mainnet-btn");
            this.maina = document.getElementById("maina");
            this.css = document.getElementById("netCss");
            this.langbtn = document.getElementById("lanuage-btn");
            this.app = app;
            this.getLangs();
        }
        getLangs() {
            this.testa.textContent = this.app.langmgr.get("net_testa");
            this.maina.textContent = this.app.langmgr.get("net_maina");
            this.langbtn.textContent = this.app.langmgr.get("net_" + this.app.langmgr.type);
            if (this.app.netmgr.type == 1) {
                this.title.innerText = this.app.langmgr.get("net_maina");
            }
            else if (this.app.netmgr.type == 2) {
                this.title.innerText = this.app.langmgr.get("net_testa");
            }
        }
        start() {
            this.testa.onclick = () => {
                window.location.hash = "#testnet";
                // var href: string[] = window.location.href.split("#");
                // var net: string = href[1].replace("mainnet", "");
                // net = net.replace("testnet", "");
                // net = "#testnet" + net;
                // window.location.href = href[0] + net;
            };
            this.maina.onclick = () => {
                window.location.hash = "#mainnet";
                // var href: string[] = window.location.href.split("#");
                // var net: string = href[1].replace("mainnet", "");
                // net = net.replace("testnet", "");
                // net = "#mainnet" + net;
                // window.location.href = href[0] + net;
            };
        }
        changeNetWork(net) {
            if (net == "testnet") {
                this.testbtn.classList.add("active");
                this.mainbtn.classList.remove("active");
                this.title.innerText = this.app.langmgr.get("net_testa");
                this.css.href = "./css/testnet.css";
            }
            else if (net == "mainnet") {
                this.mainbtn.classList.add("active");
                this.testbtn.classList.remove("active");
                this.title.innerText = this.app.langmgr.get("net_maina");
                this.css.href = "./css/mainnet.css";
            }
        }
    }
    WebBrowser.NetWork = NetWork;
})(WebBrowser || (WebBrowser = {}));
///<reference path="../lib/neo-ts.d.ts"/>
/// <reference types="jquery" />
var WebBrowser;
///<reference path="../lib/neo-ts.d.ts"/>
/// <reference types="jquery" />
(function (WebBrowser) {
    class Ajax {
        getUrlBase(netType) {
            switch (netType) {
                case "testnet":
                    return "http://47.52.146.36/api/mainnet/";
                case "mainnet":
                    return "http://47.244.141.254/api/testnet/";
            }
        }
        /**
         * async post
         */
        post(method, params) {
            return __awaiter(this, void 0, void 0, function* () {
                var href = window.location.href.split("#");
                var arr = href[1].split("/");
                let promise = new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'POST',
                        url: this.getUrlBase(WebBrowser.NetMgr) + arr[0],
                        data: JSON.stringify({
                            "jsonrpc": "2.0",
                            "method": method,
                            "params": params,
                            "id": 1
                        }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: (data, status) => {
                            if ('result' in data) {
                                // console.log(data['result']);              
                                resolve(data['result']);
                            }
                            else if ('error' in data) {
                                if (data['error']['code'] == -1) {
                                    resolve([]);
                                }
                                else {
                                    resolve([]);
                                    reject("参数出错 code:-100");
                                }
                            }
                        },
                        error: () => {
                            reject("请求失败");
                        }
                    });
                });
                return promise;
            });
        }
        /**
         * async post
         */
        get() {
            return __awaiter(this, void 0, void 0, function* () {
                var href = window.location.href.split("#");
                var arr = href[1].split("/");
                let promise = new Promise((resolve, reject) => {
                    $.ajax({
                        type: 'GET',
                        url: "http://:59908/api/testnet/" + arr[0] + "?jsonrpc=2.0&method=getblock&params=%5b1000%5d&id=1001",
                        success: (data, status) => {
                            resolve(data['result']);
                        },
                        error: () => {
                            reject("请求失败");
                        }
                    });
                });
                return promise;
            });
        }
    }
    WebBrowser.Ajax = Ajax;
    // export class LocationUtil
    // {
    //     public LocString = String(location.href);
    //     constructor() { }
    //     GetQueryString(name: string): string
    //     {
    //         let rs = new RegExp("(^|)" + name + "=([^&]*)(&|$)", "gi").exec(this.LocString), tmp;
    //         if (tmp = rs)
    //         {
    //             return decodeURI(tmp[2]);
    //         }
    //         // parameter cannot be found
    //         return "";
    //     }
    //     getRootPath_web()
    //     {
    //         //获取当前网址，如： http://115.159.53.39   :8083/uimcardprj/share/meun.jsp
    //         var curWwwPath = window.document.location.href;
    //         console.log(curWwwPath);
    //         //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    //         var pathName = window.document.location.pathname;
    //         console.log(pathName);
    //         var pos = curWwwPath.indexOf(pathName);
    //         //获取主机地址，如： http://115.159.53.39   :8083
    //         console.log(pos);
    //         var 115.159.53.39   Paht = curWwwPath.substring(0, pos);
    //         //获取带"/"的项目名，如：/uimcardprj
    //         console.log(115.159.53.39   Paht);
    //         var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    //         console.log(projectName);
    //         return (115.159.53.39   Paht + projectName);
    //     }
    //     getRootPath()
    //     {
    //         var pathName = window.location.pathname.substring(1);
    //         var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
    //         if (webName == "")
    //         {
    //             return window.location.protocol + '//' + window.location.host;
    //         }
    //         else
    //         {
    //             return window.location.protocol + '//' + window.location.host + '/' + webName;
    //         }
    //     }
    // }
    // export class NeoUtil
    // {
    //     constructor() { }
    //     /**
    //      * verifyPublicKey 验证公钥
    //      * @param publicKey 公钥
    //      */
    //     public verifyPublicKey(publicKey: string)
    //     {
    //         var array: Uint8Array = Neo.Cryptography.Base58.decode(publicKey);
    //         //var hexstr = array.toHexString();
    //         //var salt = array.subarray(0, 1);
    //         //var hash = array.subarray(1, 1 + 20);
    //         var check = array.subarray(21, 21 + 4); //
    //         var checkdata = array.subarray(0, 21);//
    //         var hashd = Neo.Cryptography.Sha256.computeHash(checkdata);//
    //         hashd = Neo.Cryptography.Sha256.computeHash(hashd);//
    //         var hashd = hashd.slice(0, 4);//
    //         var checked = new Uint8Array(hashd);//
    //         var error = false;
    //         for (var i = 0; i < 4; i++)
    //         {
    //             if (checked[i] != check[i])
    //             {
    //                 error = true;
    //                 break;
    //             }
    //         }
    //         return !error;
    //     }
    //     /**
    //      * wifDecode wif解码
    //      * @param wif wif私钥
    //      */
    //     public wifDecode(wif: string)
    //     {
    //         let result: result = { err: false, result: { pubkey: "", prikey: "", address: "" } };
    //         var prikey: Uint8Array;
    //         var pubkey: Uint8Array;
    //         var address: string;
    //         try
    //         {
    //             prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
    //             var hexstr = prikey.toHexString();
    //             result.result.prikey = hexstr;
    //         }
    //         catch (e)
    //         {
    //             result.err = true;
    //             result.result = e.message;
    //             return result
    //         }
    //         try
    //         {
    //             pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
    //             var hexstr = pubkey.toHexString();
    //             result.result.pubkey = hexstr;
    //         }
    //         catch (e)
    //         {
    //             result.err = true;
    //             result.result = e.message;
    //             return result
    //         }
    //         try
    //         {
    //             address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
    //             result.result.address = address;
    //         }
    //         catch (e)
    //         {
    //             result.err = true;
    //             result.result = e.message;
    //             return result
    //         }
    //         return result;
    //     }
    //     /**
    //      * nep2FromWif
    //      */
    //     public nep2FromWif(wif: string, password: string): result
    //     {
    //         var prikey: Uint8Array;
    //         var pubkey: Uint8Array;
    //         var address: string;
    //         let res: result = { err: false, result: { address: "", nep2: "" } };
    //         try
    //         {
    //             prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
    //             var n = 16384;
    //             var r = 8;
    //             var p = 8
    //             ThinNeo.Helper.GetNep2FromPrivateKey(prikey, password, n, r, p, (info, result) =>
    //             {
    //                 res.err = false;
    //                 res.result.nep2 = result;
    //                 pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
    //                 var hexstr = pubkey.toHexString();
    //                 address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
    //                 res.result.address = address
    //                 return res;
    //             });
    //         }
    //         catch (e)
    //         {
    //             res.err = true;
    //             res.result = e.message;
    //             return res;
    //         }
    //     }
    //     /**
    //      * nep2TOWif
    //      */
    //     public async nep2ToWif(nep2: string, password: string): Promise<result>
    //     {
    //         var prikey: Uint8Array;
    //         var pubkey: Uint8Array;
    //         var address: string;
    //         let promise: Promise<result> = new Promise((resolve, reject) =>
    //         {
    //             let n: number = 16384;
    //             var r: number = 8;
    //             var p: number = 8
    //             ThinNeo.Helper.GetPrivateKeyFromNep2(nep2, password, n, r, p, (info, result) =>
    //             {
    //                 //spanNep2.textContent = "info=" + info + " result=" + result;
    //                 console.log("result=" + "info=" + info + " result=" + result);
    //                 prikey = result as Uint8Array;
    //                 if (prikey != null)
    //                 {
    //                     var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
    //                     var address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
    //                     var wif = ThinNeo.Helper.GetWifFromPrivateKey(prikey);
    //                     console.log('1:' + address);
    //                     resolve({ err: false, result: { pubkey, address, prikey } });
    //                 }
    //                 else
    //                 {
    //                     // spanWif.textContent = "result=" + "info=" + info + " result=" + result;
    //                     reject({ err: false, result: result });
    //                 }
    //             });
    //         });
    //         return promise;
    //     }
    //     /**
    //      * nep6Load
    //      */
    //     public async nep6Load(wallet: ThinNeo.nep6wallet, password: string)
    //     {
    //         // let promise:Promise<result> = new Promise((resolve,reject)=>{
    //         try
    //         {
    //             //getPrivateKey 是异步方法，且同时只能执行一个
    //             var istart = 0;
    //             let res: any[] = new Array<any>();
    //             var getkey: (n: number) => void = null;
    //             // getkey = async (keyindex: number) => {
    //             for (let keyindex = 0; keyindex < wallet.accounts.length; keyindex++)
    //             {
    //                 let account = wallet.accounts[keyindex];
    //                 try
    //                 {
    //                     let result: result = await this.getPriKeyfromAccount(wallet.scrypt, password, account);
    //                     res.push(result.result);
    //                 } catch (error)
    //                 {
    //                     console.error(error);
    //                     return { err: true, result: error }
    //                 }
    //             }
    //             return { err: false, result: res }
    //         }
    //         catch (e)
    //         {
    //         }
    //         // });
    //         // return promise;
    //     }
    //     /**
    //      * getPriKeyform
    //      */
    //     public async getPriKeyfromAccount(scrypt: ThinNeo.nep6ScryptParameters, password: string, account: ThinNeo.nep6account): Promise<result>
    //     {
    //         let promise: Promise<result> =
    //             new Promise((resolve, reject) =>
    //             {
    //                 account.getPrivateKey(scrypt, password, (info, result) =>
    //                 {
    //                     if (info == "finish")
    //                     {
    //                         var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(result as Uint8Array);
    //                         var address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
    //                         var wif = ThinNeo.Helper.GetWifFromPrivateKey(result as Uint8Array);
    //                         var hexkey = (result as Uint8Array).toHexString();
    //                         console.log(info + "|" + address + " wif=" + wif);
    //                         resolve({ err: false, result: { pubkey: pubkey, address: address, prikey: result as Uint8Array } });
    //                     }
    //                     else
    //                     {
    //                         // info2.textContent += info + "|" + result;
    //                         reject({ err: true, result: result });
    //                     }
    //                 });
    //             })
    //         return promise;
    //     }
    // }
    // export function pageCut(pageUtil: PageUtil)
    // {
    //     if (pageUtil.totalPage - pageUtil.currentPage)
    //     {
    //         $("#next").removeClass('disabled');
    //     } else
    //     {
    //         $("#next").addClass('disabled');
    //     }
    //     if (pageUtil.currentPage - 1)
    //     {
    //         $("#previous").removeClass('disabled');
    //     } else
    //     {
    //         $("#previous").addClass('disabled');
    //     }
    // }
    // export class walletStorage
    // {
    //     public wallets = localStorage.getItem("Nel_wallets");
    //     /**
    //      * setWallet
    //      */
    //     public setWallet(address, nep2)
    //     {
    //         let json = { address, nep2 };
    //         let wallets: any[] = JSON.parse(this.wallets);
    //     }
    // }
    // export class GetNep5Info
    // {
    //     constructor()
    //     {
    //     }
    //     //http://47.96.168.8:20332/?jsonrpc=2.0&id=1&method=invokescript&params=[%2200c1046e616d6567056bd94ecab6fe9607014624ef66bbc991dbcc3f%22]
    //     makeRpcUrl(url: string, method: string, ..._params: any[])
    //     {
    //         if (url[url.length - 1] != '/')
    //             url = url + "/";
    //         var urlout = url + "?jsonrpc=2.0&id=1&method=" + method + "&params=[";
    //         for (var i = 0; i < _params.length; i++)
    //         {
    //             urlout += JSON.stringify(_params[i]);
    //             if (i != _params.length - 1)
    //                 urlout += ",";
    //         }
    //         urlout += "]";
    //         return urlout;
    //     }
    //     nep5decimals: number = 0;
    //     async getInfo(sid: string): Promise<result>
    //     {
    //         let res: result = { err: false, result: { name: "", symbol: "", decimals: 0, totalsupply: 0 } };
    //         try
    //         {
    //             //拼接三次调用
    //             var sb = new ThinNeo.ScriptBuilder();
    //             sb.EmitParamJson(JSON.parse("[]"));//参数倒序入
    //             sb.EmitParamJson("(str)name");//参数倒序入
    //             var shash = sid.hexToBytes();
    //             sb.EmitAppCall(shash.reverse());//nep5脚本
    //             sb.EmitParamJson(JSON.parse("[]"));
    //             sb.EmitParamJson("(str)symbol");
    //             var shash = sid.hexToBytes();
    //             sb.EmitAppCall(shash.reverse());
    //             sb.EmitParamJson(JSON.parse("[]"));
    //             sb.EmitParamJson("(str)decimals");
    //             var shash = sid.hexToBytes();
    //             sb.EmitAppCall(shash.reverse());
    //             sb.EmitParamJson(JSON.parse("[]"));
    //             sb.EmitParamJson("(str)totalSupply");
    //             var shash = sid.hexToBytes();
    //             sb.EmitAppCall(shash.reverse());
    //             var data = sb.ToArray();
    //             var url = this.makeRpcUrl("http://47.96.168.8:20332", "invokescript", data.toHexString());
    //             let response = await fetch(url, { "method": "get" });
    //             let json = await response.json();
    //             // info1.textContent = JSON.stringify(r);
    //             try
    //             {
    //                 var state = json.result.state as string;
    //                 // info2.textContent = "";
    //                 if (state.includes("HALT"))
    //                 {
    //                     // info2.textContent += "Succ\n";
    //                     res.err = false;
    //                 }
    //                 var stack = json.result.stack as any[];
    //                 //find name 他的type 有可能是string 或者ByteArray
    //                 if (stack[0].type == "String")
    //                 {
    //                     // info2.textContent += "name=" + stack[0].value + "\n";
    //                     res.result.name = stack[0].value;
    //                 }
    //                 else if (stack[0].type == "ByteArray")
    //                 {
    //                     var bs = (stack[0].value as string).hexToBytes();
    //                     var str = ThinNeo.Helper.Bytes2String(bs);
    //                     // info2.textContent += "name=" + str + "\n";
    //                     res.result.name = str
    //                 }
    //                 //find symbol 他的type 有可能是string 或者ByteArray
    //                 if (stack[1].type == "String")
    //                 {
    //                     // info2.textContent += "symbol=" + stack[1].value + "\n";
    //                     res.result.symbol = stack[1].value;
    //                 }
    //                 else if (stack[1].type == "ByteArray")
    //                 {
    //                     var bs = (stack[1].value as string).hexToBytes();
    //                     var str = ThinNeo.Helper.Bytes2String(bs);
    //                     // info2.textContent += "symbol=" + str + "\n";
    //                     res.result.symbol = str;
    //                 }
    //                 //find decimals 他的type 有可能是 Integer 或者ByteArray
    //                 if (stack[2].type == "Integer")
    //                 {
    //                     this.nep5decimals = (new Neo.BigInteger(stack[2].value as string)).toInt32();
    //                 }
    //                 else if (stack[2].type == "ByteArray")
    //                 {
    //                     var bs = (stack[2].value as string).hexToBytes();
    //                     var num = new Neo.BigInteger(bs);
    //                     this.nep5decimals = num.toInt32();
    //                 }
    //                 //find decimals 他的type 有可能是 Integer 或者ByteArray
    //                 if (stack[3].type == "Integer")
    //                 {
    //                     var totalsupply = (new Neo.BigInteger(stack[3].value as string)).toInt32();
    //                 }
    //                 else if (stack[3].type == "ByteArray")
    //                 {
    //                     var bs = (stack[3].value as string).hexToBytes();
    //                     var num = new Neo.BigInteger(bs);
    //                     totalsupply = num.toInt32();
    //                 }
    //                 // info2.textContent += "decimals=" + this.nep5decimals + "\n";
    //                 res.result.totalsupply = totalsupply;
    //                 res.result.decimals = this.nep5decimals;
    //                 return res;
    //             }
    //             catch (e)
    //             {
    //                 return e.message;
    //             }
    //         }
    //         catch (e)
    //         {
    //             return e.message;
    //         }
    //     }
    //     async getBalance(sid: string, addr: string): Promise<result>
    //     {
    //         let res: result = { err: false, result: 0 };
    //         var sb = new ThinNeo.ScriptBuilder();
    //         sb.EmitParamJson(["(addr)" + addr]);//参数倒序入
    //         sb.EmitParamJson("(str)balanceOf");//参数倒序入 //name//totalSupply//symbol//decimals
    //         var shash = sid.hexToBytes();
    //         sb.EmitAppCall(shash.reverse());//nep5脚本
    //         var data = sb.ToArray();
    //         // info1.textContent = data.toHexString();        
    //         try
    //         {
    //             var url = this.makeRpcUrl("http://47.96.168.8:20332", "invokescript", data.toHexString());
    //             let response = await fetch(url, { "method": "get" })
    //             let json = await response.json();
    //             var state = json.result.state as string;
    //             // info2.textContent = "";
    //             if (state.includes("HALT"))
    //             {
    //                 // info2.textContent += "Succ\n";
    //             }
    //             var stack = json.result.stack as any[];
    //             var bnum = new Neo.BigInteger(0);
    //             //find decimals 他的type 有可能是 Integer 或者ByteArray
    //             if (stack[0].type == "Integer")
    //             {
    //                 bnum = new Neo.BigInteger(stack[0].value);
    //             }
    //             else if (stack[0].type == "ByteArray")
    //             {
    //                 var bs = (stack[0].value as string).hexToBytes();
    //                 bnum = new Neo.BigInteger(bs);
    //             }
    //             var v = 1;
    //             for (var i = 0; i < this.nep5decimals; i++)
    //             {
    //                 v *= 10;
    //             }
    //             var intv = bnum.divide(v).toInt32();
    //             var smallv = bnum.mod(v).toInt32() / v;
    //             // info2.textContent += "count=" + (intv + smallv);
    //             res.result = intv + smallv;
    //             return res;
    //         }
    //         catch (e)
    //         {
    //             return { err: true, result: "^_^ 请尝试输入正确的地址" };
    //         }
    //     }
    // }
    // export class StorageUtil
    // {
    //     /**
    //      * setStorage
    //      */
    //     public setStorage(name: string, str: string)
    //     {
    //         localStorage.setItem(name, str);
    //     }
    //     /**
    //      * getStorage
    //      */
    //     public getStorage(name: string, decoder: string): any
    //     {
    //         let res = localStorage.getItem(name)
    //         if (!res)
    //         {
    //             localStorage.setItem(name, "");
    //         }
    //         if (decoder)
    //         {
    //             if (!res)
    //             {
    //                 return [];
    //             }
    //             let item = localStorage.getItem(name).split(decoder);
    //             return item;
    //         } else
    //         {
    //             let item = JSON.parse(localStorage.getItem(name));
    //             return item;
    //         }
    //     }
    // }
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class Block {
        constructor(app) {
            this.div = document.getElementById("block-info");
            this.footer = document.getElementById('footer-box');
            this.app = app;
        }
        getLangs() {
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
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        start() {
            this.getLangs();
            var appchain = WebBrowser.locationtool.getParam3();
            if (appchain && appchain.length == 40) {
                this.queryBlock(WebBrowser.locationtool.getParam());
                var href = WebBrowser.locationtool.getUrl() + "/blocks/" + appchain;
            }
            else {
                this.queryBlock(WebBrowser.locationtool.getParam());
                var href = WebBrowser.locationtool.getUrl() + "/blocks";
            }
            let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get("block_goallblock") + '</a>';
            $("#goallblock").empty();
            $("#goallblock").append(html);
            $("#block-tran-next").off("click").click(() => {
                if (this.pageUtil.currentPage == this.pageUtil.totalPage) {
                    this.pageUtil.currentPage = this.pageUtil.totalPage;
                }
                else {
                    this.pageUtil.currentPage += 1;
                    this.updateBlockTrans(this.pageUtil);
                }
            });
            $("#block-tran-previous").off("click").click(() => {
                if (this.pageUtil.currentPage <= 1) {
                    this.pageUtil.currentPage = 1;
                }
                else {
                    this.pageUtil.currentPage -= 1;
                    this.updateBlockTrans(this.pageUtil);
                }
            });
            this.div.hidden = false;
            this.footer.hidden = false;
        }
        queryBlock(index) {
            return __awaiter(this, void 0, void 0, function* () {
                let ajax = new WebBrowser.Ajax();
                let blocks = null;
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    if (index.indexOf("0x") < 0) {
                        blocks = yield WebBrowser.WWW.getacblock(appchain, index);
                    }
                    else {
                        blocks = yield WebBrowser.WWW.getappchainblockFromHash(appchain, index);
                    }
                }
                else {
                    if (index.indexOf("0x") < 0) {
                        blocks = yield WebBrowser.WWW.getblock(index);
                    }
                    else {
                        blocks = yield WebBrowser.WWW.getblockFromHash(index);
                    }
                }
                let block = blocks[0];
                let time = WebBrowser.DateTool.getTime(block.time);
                var id = block.hash;
                id = id.replace('0x', '');
                //id = id.substring(0, 4) + '...' + id.substring(id.length - 4);
                //$("#chainhash").text(block.chainhash);
                $("#hash").text(id);
                $("#size").text(block.size + ' bytes');
                $("#time").text(time);
                $("#version").text(block.version);
                $("#index").text(block.index);
                //`<a href="`+ Url.href_block(item.index) + `" target="_self">`
                if (block.index == 0) {
                    $("#previos-block").html(`<a href="` + WebBrowser.Url.href_block(block.index - 1) + `" target="_self"></a>`);
                }
                else {
                    $("#previos-block").html(`<a href="` + WebBrowser.Url.href_block(block.index - 1) + `" target="_self">` + (block.index - 1) + `</a>`);
                }
                $("#next-block").html(`<a href="` + WebBrowser.Url.href_block(parseInt(block.index.toString()) + 1) + `" target="_self">` + (parseInt(block.index.toString()) + 1) + `</a>`);
                this.txs = block.tx;
                let txsLength = this.txs.length;
                this.pageUtil = new WebBrowser.PageUtil(this.txs.length, 10);
                if (txsLength > this.pageUtil.pageSize) {
                    $(".block-tran-page").show();
                }
                else {
                    $(".block-tran-page").hide();
                }
                this.updateBlockTrans(this.pageUtil);
            });
        }
        updateBlockTrans(pageUtil) {
            $("#txs").empty();
            let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
            let maxNum = pageUtil.totalCount;
            let diffNum = maxNum - minNum;
            if (diffNum > pageUtil.pageSize) {
                maxNum = pageUtil.currentPage * pageUtil.pageSize;
            }
            else {
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
            }
            else {
                $("#block-tran-next").addClass('disabled');
            }
            if (pageUtil.currentPage - 1) {
                $("#block-tran-previous").removeClass('disabled');
            }
            else {
                $("#block-tran-previous").addClass('disabled');
            }
        }
        loadBlockTransView(txid, id, type, size, version) {
            let html = `
                    <tr>
                        <td><a href="` + WebBrowser.Url.href_transaction(txid) + `" target="_self">` + id + `</a></td>
                        <td>` + type.replace("Transaction", "") + `</td>
                        <td>` + size + ` bytes</td>
                        <td>` + version + `</td>
                    </tr>`;
            $("#txs").append(html);
        }
    }
    WebBrowser.Block = Block;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class ACBlock {
        constructor(app) {
            this.div = document.getElementById("acblock-info");
            this.footer = document.getElementById('footer-box');
            this.ac = WebBrowser.locationtool.getParam();
            this.app = app;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "acblock_info_title",
                    "acblock_info_block",
                    "acblock_info_appchain",
                    "acblock_info_hash",
                    "acblock_info_time",
                    "acblock_info_size",
                    "acblock_info_pre",
                    "acblock_info_next",
                    "acblock_info_tran", "acblock_info_txid", "acblock_info_type", "acblock_info_txsize", "acblock_info_ver"
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        start() {
            this.getLangs();
            this.ac = WebBrowser.locationtool.getParam();
            //this.div.innerHTML = pages.block;
            this.queryBlock(this.ac, WebBrowser.locationtool.getParam3());
            let href = WebBrowser.locationtool.getUrl() + "/asset/" + this.ac;
            let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get("acblock_goallblock") + '</a>';
            $("#acgoallblock").empty();
            $("#acgoallblock").append(html);
            $("#acblock-tran-next").off("click").click(() => {
                if (this.pageUtil.currentPage == this.pageUtil.totalPage) {
                    this.pageUtil.currentPage = this.pageUtil.totalPage;
                }
                else {
                    this.pageUtil.currentPage += 1;
                    this.updateBlockTrans(this.ac, this.pageUtil);
                }
            });
            $("#acblock-tran-previous").off("click").click(() => {
                if (this.pageUtil.currentPage <= 1) {
                    this.pageUtil.currentPage = 1;
                }
                else {
                    this.pageUtil.currentPage -= 1;
                    this.updateBlockTrans(this.ac, this.pageUtil);
                }
            });
            this.div.hidden = false;
            this.footer.hidden = false;
        }
        queryBlock(ac, index) {
            return __awaiter(this, void 0, void 0, function* () {
                //let ajax: Ajax = new Ajax();
                let blocks = yield WebBrowser.WWW.getacblock(ac, index);
                let block = blocks[0];
                let time = WebBrowser.DateTool.getTime(block.time);
                var id = block.hash;
                id = id.replace('0x', '');
                //id = id.substring(0, 4) + '...' + id.substring(id.length - 4);
                $("#acchain").text(ac);
                $("#achash").text(id);
                $("#acsize").text(block.size + ' bytes');
                $("#actime").text(time);
                $("#acversion").text(block.version);
                $("#acindex").text(block.index);
                //$("#acindex").html(`<a href="` + Url.href_appchainblock(this.ac, block.index) + `" target="_self">` + (block.index) + `</a>`);
                //	$("#acindex").html(`<a href="` + Url.href_appchainblock(this.ac, block.index) + `" target="_self">` + (block.index) + `</a>`);
                //`<a href="`+ Url.href_block(item.index) + `" target="_self">`
                $("#acprevios-block").html(`<a href="` + WebBrowser.Url.href_appchainblock(ac, block.index - 1) + `" target="_self">` + (block.index - 1) + `</a>`);
                $("#acnext-block").html(`<a href="` + WebBrowser.Url.href_appchainblock(ac, parseInt(block.index.toString()) + 1) + `" target="_self">` + (parseInt(block.index.toString()) + 1) + `</a>`);
                this.txs = block.tx;
                let txsLength = this.txs.length;
                this.pageUtil = new WebBrowser.PageUtil(this.txs.length, 10);
                if (txsLength > this.pageUtil.pageSize) {
                    $(".acblock-tran-page").show();
                }
                else {
                    $(".acblock-tran-page").hide();
                }
                this.updateBlockTrans(this.ac, this.pageUtil);
            });
        }
        updateBlockTrans(appchain, pageUtil) {
            $("#actxs").empty();
            let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
            let maxNum = pageUtil.totalCount;
            let diffNum = maxNum - minNum;
            if (diffNum > pageUtil.pageSize) {
                maxNum = pageUtil.currentPage * pageUtil.pageSize;
            }
            else {
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
            $("#acblock-tran-msg").html(pageMsg);
            if (pageUtil.totalPage - this.pageUtil.currentPage) {
                $("#acblock-tran-next").removeClass('disabled');
            }
            else {
                $("#acblock-tran-next").addClass('disabled');
            }
            if (pageUtil.currentPage - 1) {
                $("#acblock-tran-previous").removeClass('disabled');
            }
            else {
                $("#acblock-tran-previous").addClass('disabled');
            }
        }
        loadBlockTransView(txid, id, type, size, version) {
            let html = `
                    <tr>
                        <td><a href="` + WebBrowser.Url.href_appchaintransaction(this.ac, txid) + `" target="_self">` + id + `</a></td>
                        <td>` + type.replace("Transaction", "") + `</td>
                        <td>` + size + ` bytes</td>
                        <td>` + version + `</td>
                    </tr>`;
            $("#actxs").append(html);
        }
    }
    WebBrowser.ACBlock = ACBlock;
})(WebBrowser || (WebBrowser = {}));
/// <reference types="jquery" />
var WebBrowser;
/// <reference types="jquery" />
(function (WebBrowser) {
    class Blocks {
        constructor(app) {
            this.div = document.getElementById('blocks-page');
            this.footer = document.getElementById('footer-box');
            this.app = app;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "blocks_title", "blocks_height", "blocks_size", "blocks_time", "blocks_txcount", "blocks_hash"
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.getLangs();
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var count = yield WebBrowser.WWW.api_getappchainHeight(appchain);
                }
                else {
                    var count = yield WebBrowser.WWW.api_getHeight();
                }
                this.pageUtil = new WebBrowser.PageUtil(count, 15);
                yield this.updateBlocks(this.pageUtil);
                this.div.hidden = false;
                this.footer.hidden = false;
                $("#blocks-page-next").off("click").click(() => {
                    if (this.pageUtil.currentPage == this.pageUtil.totalPage) {
                        this.pageUtil.currentPage = this.pageUtil.totalPage;
                    }
                    else {
                        this.pageUtil.currentPage += 1;
                        this.updateBlocks(this.pageUtil);
                    }
                });
                $("#blocks-page-previous").off("click").click(() => {
                    if (this.pageUtil.currentPage <= 1) {
                        this.pageUtil.currentPage = 1;
                    }
                    else {
                        this.pageUtil.currentPage -= 1;
                        this.updateBlocks(this.pageUtil);
                    }
                });
            });
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        updateBlocks(pageUtil) {
            return __awaiter(this, void 0, void 0, function* () {
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var blocks = yield WebBrowser.WWW.getappchainblocksdesc(appchain, pageUtil.pageSize, pageUtil.currentPage - 1); //limit this to the 15 by 15 splitting
                }
                else {
                    var blocks = yield WebBrowser.WWW.getblocksdesc(pageUtil.pageSize, pageUtil.currentPage - 1); //limit this to the 15 by 15 splitting
                }
                $("#blocks-page").children("table").children("tbody").empty();
                if (pageUtil.totalPage - pageUtil.currentPage) {
                    $("#blocks-page-next").removeClass('disabled');
                }
                else {
                    $("#blocks-page-next").addClass('disabled');
                }
                if (pageUtil.currentPage - 1) {
                    $("#blocks-page-previous").removeClass('disabled');
                }
                else {
                    $("#blocks-page-previous").addClass('disabled');
                }
                let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
                let maxNum = pageUtil.totalCount;
                let diffNum = maxNum - minNum;
                if (diffNum > 15) {
                    maxNum = pageUtil.currentPage * pageUtil.pageSize;
                }
                let pageMsg = "Blocks " + (minNum + 1) + " to " + maxNum + " of " + pageUtil.totalCount;
                $("#blocks-page-msg").html(pageMsg);
                //let newDate = new Date();
                blocks.forEach((item, index, input) => {
                    //newDate.setTime(item.time * 1000);
                    let time = WebBrowser.DateTool.getTime(item.time);
                    let txcounts = item.txcount;
                    var id = item.hash;
                    id = id.replace('0x', '');
                    id = id.substring(0, 4) + '...' + id.substring(id.length - 4);
                    let html = `
                <tr>
                <td><a href="` + WebBrowser.Url.href_blockh(item.hash) + `" target="_self">` + id + `</a></td>
                <td>` + item.size + ` bytes</td><td>` + time + `</td><td><a href="` + WebBrowser.Url.href_block(item.index) + `" target="_self">` + item.index + `</a></td>
                <td>` + txcounts + `</td>
                </tr>`;
                    $("#blocks-page").find("tbody").append(html);
                });
            });
        }
    }
    WebBrowser.Blocks = Blocks;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class WWW {
        static makeRpcUrl(method, ..._params) {
            var url = WWW.api;
            var urlout = WWW.makeUrl(method, url, ..._params);
            return urlout;
        }
        static makeUrl(method, url, ..._params) {
            var urlout = url + "?jsonrpc=2.0&id=1&method=" + method + "&params=[";
            for (var i = 0; i < _params.length; i++) {
                urlout += JSON.stringify(_params[i]);
                if (i != _params.length - 1)
                    urlout += ",";
            }
            urlout += "]";
            return urlout;
        }
        static makeRpcPostBody(method, ..._params) {
            var body = {};
            body["jsonrpc"] = "2.0";
            body["id"] = 1;
            body["method"] = method;
            var params = [];
            for (var i = 0; i < _params.length; i++) {
                params.push(_params[i]);
            }
            body["params"] = params;
            return body;
        }
        static makeZoroRpcPostBody(method, ..._params) {
            var body = {};
            body["jsonrpc"] = "2.0";
            body["id"] = 1;
            body["method"] = method;
            var params = [];
            for (var i = 0; i < _params[0].length; i++) {
                params.push(_params[0][i]);
            }
            body["params"] = params;
            return body;
        }
        //获得高度
        static api_getHeight() {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getblockcount");
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                var height = parseInt(r[0]["blockcount"]) - 1;
                return height;
            });
        }
        static api_getappchainHeight(ac) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainblockcount", ac);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                var height = parseInt(r[0]["blockcount"]) - 1;
                return height;
            });
        }
        //获得交易总数
        static gettxcount(type) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("gettxcount", type);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r[0]['txcount'];
            });
        }
        static getappchaintxcount(appchain) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchaintxcount", appchain);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r[0]['txcount'];
            });
        }
        //地址总数
        static getaddrcount() {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getaddrcount");
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r[0]['addrcount'];
            });
        }
        static getappchainaddrcount(ac) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getaddrcount", ac);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r[0]['addrcount'];
            });
        }
        /**
         * 获取区块列表
         * @param size 记录条数
         * @param page 页码
         */
        static getblocks(size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getblocks", size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getappchainblocks(appchain, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainblocks", appchain, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        /**
         * 获取区块列表
         * @param size 记录条数
         * @param page 页码
         */
        static getblocksdesc(size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getblocksdesc", size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getPageMessage(chainhash, hash) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getpagemessage", chainhash, hash);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getappchainblocksdesc(appchain, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainblocksdesc", appchain, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getblocksdesccache(size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getblocksdesccache", size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getappchainblocksdesccache(appchain, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainblocksdesccache", appchain, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getblock(index) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getblock", index);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getblockFromHash(hash) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getblockfromhash", hash);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getappchainblockFromHash(ac, hash) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainblockfromhash", ac, hash);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getacblock(ac, index) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getacblock", ac, index);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        //查询交易列表
        static getrawtransactions(size, page, txtype) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getrawtransactions", size, page - 1, txtype);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r; // needs most recent 10 txs returned, needs a sorting by txtype
            });
        }
        static getappchainrawtransactions(appchain, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainrawtransactions", appchain, size, page - 1);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r; // needs most recent 10 txs returned, needs a sorting by txtype
            });
        }
        //查询交易列表
        static getrawtransactionsdesc(size, page, txtype) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getrawtransactionsdesc", size, page, txtype);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r; // needs most recent 10 txs returned, needs a sorting by txtype
            });
        }
        static getappchainrawtransactionsdesc(appchain, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainrawtransactionsdesc", appchain, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r; // needs most recent 10 txs returned, needs a sorting by txtype
            });
        }
        static getrawtransactionsdesccache(size, page, txtype) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getrawtransactionsdesccache", size, page, txtype);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r; // needs most recent 10 txs returned, needs a sorting by txtype
            });
        }
        static getappchainrawtransactionsdesccache(appchain, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainrawtransactionsdesccache", appchain, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r; // needs most recent 10 txs returned, needs a sorting by txtype
            });
        }
        static getaddrs(size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getaddrs", size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getappchainaddrs(ac, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainaddrs", ac, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getrawtransaction(txid) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("gettransaction", txid);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r[0];
            });
        }
        static getappchainrawtransaction(ac, txid) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getactransaction", ac, txid);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r[0];
            });
        }
        static getallnep5asset() {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getallnep5asset");
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getappchainallnep5asset(ac) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainallnep5asset", ac);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getAllAssets() {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getallassets");
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getBalance(addr) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getbalance", addr);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getAllAppchains() {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getallappchains");
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getAppchain(hash) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchain", hash);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getAppchainBlockcount(hash) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainblockcount", hash);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r[0]["blockcount"];
            });
        }
        static api_getAppchainAddrcount(hash) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainaddrcount", hash);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r[0]["addrcount"];
            });
        }
        static api_getUTXOCount(address) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getutxo", address);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getScriptMethod(txid, chainHash = "") {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getscriptmethod", chainHash, txid);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getappchainUTXOCount(ac, address) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainutxo", ac, address);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getUTXO(address, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getutxo", address, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getappchainUTXO(ac, address, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainutxo", ac, address, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getbalances(address) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getbalance", address);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getappchainbalances(ac, address) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainbalance", ac, address);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getasset(asset) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getasset", asset);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getnep5(nep5) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getnep5asset", nep5);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getappchainnep5(ac, nep5) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainnep5asset", ac, nep5);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r[0];
            });
        }
        static api_getContractState(chainhash, nep5) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getcontractstatemessage", chainhash, nep5);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getallnep5assetofaddress(nep5) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getallnep5assetofaddress", nep5, 1);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getaddresstxs(addr, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getaddresstxs", addr, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getappchainaddresstxs(ac, addr, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainaddresstxs", ac, addr, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getaddrMsg(addr) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getaddr", addr);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getappchainaddrMsg(ac, addr) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainaddr", ac, addr);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        //资产排行
        static getrankbyasset(nep5id, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getrankbyasset", nep5id, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static getappchainrankbyasset(ac, nep5id, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainrankbyasset", ac, nep5id, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        //资产排行总数
        static api_getrankbyassetcount(id) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getrankbyassetcount", id);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getappchainrankbyassetcount(ac, id) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainrankbyassetcount", ac, id);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getnep5transfersbyasset(nep5id, size, page) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getnep5transfersbyasset", nep5id, size, page);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getnep5count(type, nep5id) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getnep5count", type, nep5id);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        //根据txid获取nep5
        static api_getnep5transferbytxid(txid) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getnep5transferbytxid", txid);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        static api_getappchainnep5transferbytxid(ac, txid) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getappchainnep5transferbytxid", ac, txid);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        //search asset list
        static apiaggr_searchAsset(str) {
            var str;
            return __awaiter(this, void 0, void 0, function* () {
                str = WWW.makeUrl("fuzzysearchasset", WWW.apiaggr, str);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                return r;
            });
        }
        //new
        static makeZoroRpcUrl(url, method, ..._params) {
            if (url[url.length - 1] != '/')
                url = url + "/";
            var urlout = url + "?jsonrpc=2.0&id=1&method=" + method + "&params=[";
            for (var i = 0; i < _params.length; i++) {
                urlout += JSON.stringify(_params[i]);
                if (i != _params.length - 1)
                    urlout += ",";
            }
            urlout += "]";
            return urlout;
        }
        // neo gas 
        static rpc_getUTXO(address) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeUrl("getutxo", WWW.neoGetUTXO, address);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                WebBrowser.AppChainTool.GAS = 0;
                WebBrowser.AppChainTool.NEO = 0;
                if (r)
                    r.forEach(element => {
                        if (element["asset"] == WebBrowser.AppChainTool.id_GAS) {
                            WebBrowser.AppChainTool.GAS += parseFloat(element["value"]);
                        }
                        if (element["asset"] == WebBrowser.AppChainTool.id_NEO) {
                            WebBrowser.AppChainTool.NEO += parseFloat(element["value"]);
                        }
                    });
                return r;
            });
        }
        static rpc_getBalanceOf(contractHash, address, chainHash = null) {
            return __awaiter(this, void 0, void 0, function* () {
                var sb = new ThinNeo.ScriptBuilder();
                var array = [];
                array.push("(addr)" + address);
                sb.EmitParamJson(array);
                sb.EmitPushString("balanceOf");
                sb.EmitAppCall(contractHash.hexToBytes().reverse());
                var scripthash = sb.ToArray().toHexString();
                if (chainHash == "gold") {
                    return 0;
                }
                if (chainHash == null) {
                    var str = this.makeUrl("invokescript", WWW.neoGetUTXO, scripthash);
                }
                else {
                    var str = this.makeZoroRpcUrl(WWW.rpc, "invokescript", chainHash, scripthash);
                }
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r;
                if (chainHash == null) {
                    r = json["result"][0]["stack"][0]["value"];
                }
                else {
                    if (json["result"]["stack"].length == 0) {
                        r = 0;
                    }
                    else {
                        r = json["result"]["stack"][0]["value"];
                    }
                }
                if (r == "") {
                    r = 0;
                }
                else {
                    r = r.hexToBytes();
                    r = Neo.BigInteger.fromUint8ArrayAutoSign(r);
                }
                return r;
            });
        }
        static api_getAllAppChain() {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeZoroRpcUrl(WWW.rpc, "getappchainhashlist");
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"]["hashlist"];
                return r;
            });
        }
        static api_getAppChainName(chainHash) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeZoroRpcUrl(WWW.rpc, "getappchainstate", chainHash);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"]["name"];
                return r;
            });
        }
        //获得高度
        static api_getNEOHeight() {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeUrl("getblockcount", WWW.neoGetUTXO);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"][0]["blockcount"];
                var height = parseInt(r) - 1;
                return height;
            });
        }
        static api_getBlockIntervals(chainHash, num) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getblockinterval", chainHash, num);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                return json["result"];
            });
        }
        static api_getBlockInterval(chainHash) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeRpcUrl("getblockintervalnext", chainHash);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                return json["result"];
            });
        }
        static api_getZoroHeight(chainHash) {
            return __awaiter(this, void 0, void 0, function* () {
                var str = WWW.makeZoroRpcUrl(WWW.rpc, "getblockcount", chainHash);
                var result = yield fetch(str, { "method": "get" });
                var json = yield result.json();
                var r = json["result"];
                var height = parseInt(r) - 1;
                return height;
            });
        }
        static rpc_invokeScript(params) {
            return __awaiter(this, void 0, void 0, function* () {
                var postdata = WWW.makeZoroRpcPostBody("invokescript", params);
                var result = yield fetch(WWW.rpc, { "method": "post", "body": JSON.stringify(postdata) });
                var json = yield result.json();
                return json["result"];
            });
        }
        static rpc_estimategas(params) {
            return __awaiter(this, void 0, void 0, function* () {
                var postdata = WWW.makeZoroRpcPostBody("estimategas", params);
                var result = yield fetch(WWW.rpc, { "method": "post", "body": JSON.stringify(postdata) });
                var json = yield result.json();
                return json["result"];
            });
        }
        static makeTran(address) {
            var tran = new ThinNeo.Transaction();
            tran.type = ThinNeo.TransactionType.InvocationTransaction;
            tran.version = 1;
            var scriptHash = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(address);
            tran.attributes = [];
            tran.attributes[0] = new ThinNeo.Attribute();
            tran.attributes[0].usage = ThinNeo.TransactionAttributeUsage.Script;
            tran.attributes[0].data = scriptHash;
            tran.inputs = [];
            tran.outputs = [];
            return tran;
        }
        static rpc_sendrawtransaction(params) {
            return __awaiter(this, void 0, void 0, function* () {
                var postdata = WWW.makeZoroRpcPostBody("sendrawtransaction", params);
                var result = yield fetch(WWW.rpc, { "method": "post", "body": JSON.stringify(postdata) });
                var json = yield result.json();
                return json;
            });
        }
        static rpc_postRawTransaction(data) {
            return __awaiter(this, void 0, void 0, function* () {
                var postdata = WWW.makeRpcPostBody("sendrawtransaction", data.toHexString());
                var result = yield fetch(WWW.neoGetUTXO, { "method": "post", "body": JSON.stringify(postdata) });
                var json = yield result.json();
                var r = json["result"][0];
                return r;
            });
        }
    }
    WWW.api = "http://115.159.68.43:59908/api/testnet/";
    WWW.apiaggr = "http://115.159.68.43:59999/api/testnet/";
    WWW.rpc = "http://47.91.210.16:20333";
    WWW.neoRpc = "http://47.52.192.77:20332";
    WWW.neoGetUTXO = "https://api.nel.group/api/testnet/";
    WWW.rpcName = "";
    WWW.blockHeight = 0;
    WWW.chainHashLength = 1;
    WebBrowser.WWW = WWW;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class UTXO {
    }
    WebBrowser.UTXO = UTXO;
    class CoinTool {
        static initAllAsset() {
            return __awaiter(this, void 0, void 0, function* () {
                var allassets = yield WebBrowser.WWW.api_getAllAssets();
                for (var a in allassets) {
                    var asset = allassets[a];
                    var names = asset.name;
                    var id = asset.id;
                    var name = "";
                    if (id == CoinTool.id_GAS) {
                        name = "GAS";
                    }
                    else if (id == CoinTool.id_NEO) {
                        name = "NEO";
                    }
                    else {
                        for (var i in names) {
                            name = names[i].name;
                            if (names[i].lang == "en")
                                break;
                        }
                    }
                    CoinTool.assetID2name[id] = name;
                    CoinTool.name2assetID[name] = id;
                }
            });
        }
        static ZoroFunction() {
            var select = document.createElement('select');
            var sitem = document.createElement("option");
            sitem.text = "NEO->ZORO";
            sitem.value = "NEOBCP";
            select.appendChild(sitem);
            var sitem = document.createElement("option");
            sitem.text = "ZORO->NEO";
            sitem.value = "ZOROBCP";
            select.appendChild(sitem);
            return select;
        }
        static ZoroAsset() {
            var select = document.createElement('select');
            var sitem = document.createElement("option");
            sitem.text = "ZOROBCP";
            sitem.value = "ZOROBCP";
            select.appendChild(sitem);
            var sitem = document.createElement("option");
            sitem.text = "NEOBCP";
            sitem.value = "NEOBCP";
            select.appendChild(sitem);
            var sitem = document.createElement("option");
            sitem.text = "NEO";
            sitem.value = "NEO";
            select.appendChild(sitem);
            var sitem = document.createElement("option");
            sitem.text = "GAS";
            sitem.value = "GAS";
            select.appendChild(sitem);
            return select;
        }
        static getGold(type, address, chainHash = "gold") {
            return __awaiter(this, void 0, void 0, function* () {
                switch (type) {
                    case "ZOROBCP":
                        return yield WebBrowser.AppChainTool.getNativeBalanceOf(chainHash);
                    case "NEOBCP":
                        return yield WebBrowser.WWW.rpc_getBalanceOf(WebBrowser.AppChainTool.neoBCP, address);
                    case "NEO":
                        return WebBrowser.AppChainTool.NEO;
                    case "GAS":
                        return WebBrowser.AppChainTool.GAS;
                    default:
                        let price = "";
                        if (chainHash == "NEO") {
                            price = yield WebBrowser.WWW.rpc_getBalanceOf(WebBrowser.AppChainTool.neoBCP, address);
                        }
                        else {
                            price = yield WebBrowser.AppChainTool.getNativeBalanceOf(chainHash);
                        }
                        return price;
                }
            });
        }
        static getassets(utxos) {
            var assets = {};
            for (var i in utxos) {
                var item = utxos[i];
                var txid = item.txid;
                var n = item.n;
                var asset = item.asset;
                var count = item.value;
                if (assets[asset] == undefined) {
                    assets[asset] = [];
                }
                var utxo = {
                    addr: item.addr,
                    asset: asset,
                    n: n,
                    txid: txid,
                    count: Neo.Fixed8.parse(count + "")
                };
                assets[asset].push(utxo);
            }
            return assets;
        }
        static makeZoroTran(address, targetaddr, sendcount, assetid, chainHash) {
            // if (sendcount.compareTo(Neo.Fixed8.Zero) <= 0)
            //    throw new Error("can not send zero.");           
            var array = [];
            var sb = new ThinNeo.ScriptBuilder();
            var randomBytes = new Uint8Array(32);
            var key = Neo.Cryptography.RandomNumberGenerator.getRandomValues(randomBytes);
            var randomNum = new Neo.BigInteger(key);
            sb.EmitPushNumber(randomNum);
            sb.Emit(ThinNeo.OpCode.DROP);
            array.push("(addr)" + address);
            array.push("(addr)" + targetaddr);
            array.push("(int)" + sendcount);
            sb.EmitParamJson(array);
            sb.EmitPushString("transfer");
            sb.EmitAppCall(assetid.hexToBytes().reverse());
            // var scripthash = sb.ToArray().toHexString();
            // var postArray = [];
            // postArray.push(chainHash);
            // postArray.push(scripthash);
            var extdata = new ThinNeo.InvokeTransData();
            extdata.script = sb.ToArray();
            extdata.gas = Neo.Fixed8.Zero;
            var tran = new ThinNeo.Transaction();
            tran.type = ThinNeo.TransactionType.InvocationTransaction;
            tran.version = 1;
            tran.extdata = extdata;
            var scriptHash = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(address);
            tran.attributes = [];
            tran.attributes[0] = new ThinNeo.Attribute();
            tran.attributes[0].usage = ThinNeo.TransactionAttributeUsage.Script;
            tran.attributes[0].data = scriptHash;
            tran.inputs = [];
            tran.outputs = [];
            return tran;
        }
        static makeTran(utxos, targetaddr, assetid, sendcount) {
            // if (sendcount.compareTo(Neo.Fixed8.Zero) <= 0)
            //     throw new Error("can not send zero.");
            var tran = new ThinNeo.Transaction();
            tran.type = ThinNeo.TransactionType.ContractTransaction;
            tran.version = 0; //0 or 1
            tran.extdata = null;
            tran.attributes = [];
            tran.inputs = [];
            var scraddr = "";
            utxos[assetid].sort((a, b) => {
                return a.count.compareTo(b.count);
            });
            var us = utxos[assetid];
            var count = Neo.Fixed8.Zero;
            for (var i = 0; i < us.length; i++) {
                var input = new ThinNeo.TransactionInput();
                input.hash = us[i].txid.hexToBytes().reverse();
                input.index = us[i].n;
                input["_addr"] = us[i].addr; //利用js的隨意性，臨時傳個值
                tran.inputs.push(input);
                count = count.add(us[i].count);
                scraddr = us[i].addr;
                if (count.compareTo(sendcount) > 0) {
                    break;
                }
            }
            if (count.compareTo(sendcount) >= 0) //输入大于0
             {
                tran.outputs = [];
                //输出
                if (sendcount.compareTo(Neo.Fixed8.Zero) > 0) {
                    var output = new ThinNeo.TransactionOutput();
                    output.assetId = assetid.hexToBytes().reverse();
                    output.value = sendcount;
                    output.toAddress = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(targetaddr);
                    tran.outputs.push(output);
                }
                //找零
                var change = count.subtract(sendcount);
                if (change.compareTo(Neo.Fixed8.Zero) > 0) {
                    var outputchange = new ThinNeo.TransactionOutput();
                    outputchange.toAddress = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(scraddr);
                    outputchange.value = change;
                    outputchange.assetId = assetid.hexToBytes().reverse();
                    tran.outputs.push(outputchange);
                }
            }
            else {
                throw new Error("no enough money.");
            }
            return tran;
        }
    }
    CoinTool.id_GAS = "0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
    CoinTool.id_NEO = "0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    CoinTool.assetID2name = {};
    CoinTool.name2assetID = {};
    WebBrowser.CoinTool = CoinTool;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class DateTool {
        /**************************************时间格式化处理************************************/
        static dateFtt(fmt, date) {
            var o = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "q+": Math.floor((date.getMonth() + 3) / 3),
                "S": date.getMilliseconds() //毫秒   
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
        static getTime(date) {
            date = date.toString().length == 10 ? date * 1000 : date;
            let time = new Date(date);
            // if (sessionStorage.getItem("language") != "cn") {
            //     return new Date(time).toUTCString();
            // } else {
            return this.dateFtt("yyyy/MM/dd hh:mm:ss", new Date(time));
            // }
        }
        static getTimeSecond(data) {
            var now = parseInt(Date.now() / 1000 + "");
            var time = now - data;
            var m = parseInt(time / 60 + "");
            if (m > 0) {
                return m + "min";
            }
            else {
                return time + "sec";
            }
        }
    }
    WebBrowser.DateTool = DateTool;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../tools/wwwtool.ts" />
/// <reference path="../tools/cointool.ts" />
/// <reference path="../tools/timetool.ts" />
var WebBrowser;
/// <reference path="../tools/wwwtool.ts" />
/// <reference path="../tools/cointool.ts" />
/// <reference path="../tools/timetool.ts" />
(function (WebBrowser) {
    class Address {
        constructor(app) {
            this.div = document.getElementById("address-info");
            this.footer = document.getElementById('footer-box');
            this.app = app;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "addr_title",
                    "addr_ctm",
                    "addr_tran",
                    "addr_title2",
                    "addr_title3",
                    "addr_txid",
                    "addr_type",
                    "addr_time",
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.getLangs();
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var address = WebBrowser.locationtool.getParam();
                    var href = WebBrowser.locationtool.getUrl() + "/addresses/" + appchain;
                    var addrMsg = yield WebBrowser.WWW.api_getappchainaddrMsg(appchain, address);
                    var utxos = yield WebBrowser.WWW.api_getappchainUTXOCount(appchain, address);
                    var balances = yield WebBrowser.WWW.api_getappchainbalances(appchain, address);
                }
                else {
                    var address = WebBrowser.locationtool.getParam();
                    var href = WebBrowser.locationtool.getUrl() + "/addresses";
                    var addrMsg = yield WebBrowser.WWW.api_getaddrMsg(address);
                    var utxos = yield WebBrowser.WWW.api_getUTXOCount(address);
                    var balances = yield WebBrowser.WWW.api_getbalances(address);
                }
                let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get("addr_goalladress") + '</a>';
                $("#goalladress").empty();
                $("#goalladress").append(html);
                if (addrMsg) {
                    this.loadAddressInfo(address, addrMsg);
                    this.pageUtil = new WebBrowser.PageUtil(addrMsg[0].txcount, 10);
                    this.initTranPage(addrMsg[0].txcount, address);
                    this.updateAddrTrasctions(address, this.pageUtil);
                }
                else {
                    $("#address").text("-");
                    $("#created").text("-");
                    $("#totalTran").text("-");
                    let html = '<div class="line" style="text-align:center;padding:16px;font-size:16px;">' + this.app.langmgr.get('no_data') + '</div>';
                    $("#addr-trans").append(html);
                }
                this.loadView(balances);
                // if (utxos) {
                // 	this.pageUtilUtxo = new PageUtil(utxos.length, 10);
                // 	this.initUTXOPage(utxos.length, address);
                // 	this.updateAddrUTXO(address, this.pageUtilUtxo)
                // } else {
                // 	let html = '<tr><td colspan="3" >' + this.app.langmgr.get('no_data') + '</td></tr>';
                // 	$("#add-utxos").append(html);
                // }
                //this.loadUTXOView(utxos);
                this.div.hidden = false;
                this.footer.hidden = false;
            });
        }
        //AddressInfo视图
        loadAddressInfo(address, addrMsg) {
            let createdTime = WebBrowser.DateTool.getTime(addrMsg[0].firstDate);
            let totalTran = addrMsg[0].txcount;
            $("#address").text(address);
            $("#created").text(createdTime);
            $("#totalTran").text(totalTran);
        }
        loadView(balances) {
            $("#balance").empty();
            if (balances) {
                balances.forEach((balance) => {
                    if (balance.symbol.indexOf("{") >= 0) {
                        var json = JSON.parse(balance.symbol);
                        for (let i = 0; i < json.length; i++) {
                            if (this.langType == "cn" && json[i].lang == "zh-CN") {
                                balance.symbol = json[i].name;
                                break;
                            }
                            else if (json[i].lang == this.langType) {
                                balance.symbol = json[i].name;
                                break;
                            }
                        }
                        ;
                    }
                    let html = `
                <div class="line" > <div class="title-nel" > <span>` + balance.symbol + ` </span></div >
                <div class="content-nel" > <span> ` + balance.balance + ` </span></div > </div>`;
                    $("#balance").append(html);
                });
            }
            if (!balances) {
                let html = '<div class="line"><div class="title-nel" style="width:100%;text-align:center;display: block;line-height: 56px;"><span>' + this.app.langmgr.get('no_data') + '</span></div> </div>';
                $("#balance").append(html);
            }
        }
        loadUTXOView(utxos) {
            $("#add-utxos").empty();
            if (utxos) {
                utxos.forEach((utxo) => {
                    let html = `
                <tr>
                <td class='code'>` + WebBrowser.CoinTool.assetID2name[utxo.asset] + `
                </td>
                <td>` + utxo.value + `
                </td>
                <td><a class='code' target='_self' href='` + WebBrowser.Url.href_transaction(utxo.txid) + `'>` + utxo.txid + `
                </a>[` + utxo.n + `]</td>
                </tr>`;
                    $("#add-utxos").append(html);
                });
            }
        }
        initTranPage(transtotal, address) {
            if (transtotal > 10) {
                $("#trans-page-msg").show();
                $("#addr-trans-page").show();
            }
            else {
                $("#trans-page-msg").hide();
                $("#addr-trans-page").hide();
            }
            $("#trans-next").off("click").click(() => {
                if (this.pageUtil.currentPage == this.pageUtil.totalPage) {
                    this.pageUtil.currentPage = this.pageUtil.totalPage;
                    $('#errMsg').modal('show');
                }
                else {
                    this.pageUtil.currentPage += 1;
                    this.updateAddrTrasctions(address, this.pageUtil);
                }
            });
            $("#trans-previous").off("click").click(() => {
                if (this.pageUtil.currentPage <= 1) {
                    this.pageUtil.currentPage = 1;
                }
                else {
                    this.pageUtil.currentPage -= 1;
                    this.updateAddrTrasctions(address, this.pageUtil);
                }
            });
        }
        initUTXOPage(utxototal, address) {
            if (utxototal > 10) {
                $("#utxo-page-msg").show();
                $("#addr-utxo-page").show();
            }
            else {
                $("#utxo-page-msg").hide();
                $("#addr-utxo-page").hide();
            }
            $("#utxo-next").off("click").click(() => {
                if (this.pageUtilUtxo.currentPage == this.pageUtilUtxo.totalPage) {
                    this.pageUtil.currentPage = this.pageUtil.totalPage;
                }
                else {
                    this.pageUtilUtxo.currentPage += 1;
                    this.updateAddrUTXO(address, this.pageUtilUtxo);
                }
            });
            $("#utxo-previous").off("click").click(() => {
                if (this.pageUtilUtxo.currentPage <= 1) {
                    this.pageUtil.currentPage = 1;
                }
                else {
                    this.pageUtilUtxo.currentPage -= 1;
                    this.updateAddrUTXO(address, this.pageUtilUtxo);
                }
            });
        }
        //更新交易记录
        updateAddrTrasctions(address, pageUtil) {
            return __awaiter(this, void 0, void 0, function* () {
                //分页查询交易记录
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var txlist = yield WebBrowser.WWW.getappchainaddresstxs(appchain, address, pageUtil.pageSize, pageUtil.currentPage - 1);
                }
                else {
                    var txlist = yield WebBrowser.WWW.getaddresstxs(address, pageUtil.pageSize, pageUtil.currentPage - 1);
                }
                $("#addr-trans").empty();
                let listLength = 0;
                if (txlist) {
                    if (txlist.length < 10) {
                        listLength = txlist.length;
                    }
                    else {
                        listLength = pageUtil.pageSize;
                    }
                    for (var n = 0; n < listLength; n++) {
                        let txid = txlist[n].txid;
                        let time = WebBrowser.DateTool.getTime(txlist[n].blocktime);
                        let html = yield this.getAddrTransLine(txid, txlist[n].blockindex.toString(), time);
                        $("#addr-trans").append(html);
                    }
                }
                else {
                    let html = '<div class="line"><div class="title-nel" style="width:100%;text-align:center;display: block;line-height: 56px;"><span>' + this.app.langmgr.get('no_data') + '</span></div></div>';
                    $("#addr-trans").append(html);
                }
                let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
                let maxNum = pageUtil.totalCount;
                let diffNum = maxNum - minNum;
                if (diffNum > 10) {
                    maxNum = pageUtil.currentPage * pageUtil.pageSize;
                }
                let pageMsg = "Transactions " + (minNum + 1) + " to " + maxNum + " of " + pageUtil.totalCount;
                $("#trans-page-msg").html(pageMsg);
                if (pageUtil.totalPage - pageUtil.currentPage) {
                    $("#trans-next").removeClass('disabled');
                }
                else {
                    $("#trans-next").addClass('disabled');
                }
                if (pageUtil.currentPage - 1) {
                    $("#trans-previous").removeClass('disabled');
                }
                else {
                    $("#trans-previous").addClass('disabled');
                }
            });
        }
        //更新UTXO记录
        updateAddrUTXO(address, pageUtil) {
            return __awaiter(this, void 0, void 0, function* () {
                $("#add-utxos").empty();
                //分页查询交易记录
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var utxolist = yield WebBrowser.WWW.api_getappchainUTXO(appchain, address, pageUtil.pageSize, pageUtil.currentPage);
                }
                else {
                    var utxolist = yield WebBrowser.WWW.api_getUTXO(address, pageUtil.pageSize, pageUtil.currentPage);
                }
                let listLength = 0;
                if (utxolist) {
                    if (utxolist.length < 10) {
                        listLength = utxolist.length;
                    }
                    else {
                        listLength = pageUtil.pageSize;
                    }
                    this.loadUTXOView(utxolist);
                }
                let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
                let maxNum = pageUtil.totalCount;
                let diffNum = maxNum - minNum;
                if (diffNum > 10) {
                    maxNum = pageUtil.currentPage * pageUtil.pageSize;
                }
                let pageMsg = "UTXO " + (minNum + 1) + " to " + maxNum + " of " + pageUtil.totalCount;
                $("#utxo-page-msg").html(pageMsg);
                if (pageUtil.totalPage - pageUtil.currentPage) {
                    $("#utxo-next").removeClass('disabled');
                }
                else {
                    $("#utxo-next").addClass('disabled');
                }
                if (pageUtil.currentPage - 1) {
                    $("#utxo-previous").removeClass('disabled');
                }
                else {
                    $("#utxo-previous").addClass('disabled');
                }
            });
        }
        getAddrTransLine(txid, blockindex, time) {
            return __awaiter(this, void 0, void 0, function* () {
                var id = txid.replace('0x', '');
                id = id.substring(0, 6) + '...' + id.substring(id.length - 6);
                return `
            <div class="line">
                <div class="line-general">
                    <div class="content-nel"><span><a href="` + WebBrowser.Url.href_transaction(txid) + `" target="_self">` + id + `</a></span></div>
                    <div class="content-nel"><span>` + blockindex + `</span></div>
                    <div class="content-nel"><span>` + time + `</a></span></div>
                </div>
            </div>
            `;
            });
        }
    }
    WebBrowser.Address = Address;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    //地址列表
    class Addresses {
        constructor(app) {
            this.div = document.getElementById('addrs-page');
            this.footer = document.getElementById('footer-box');
            this.app = app;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "addrs_title",
                    "addrs_addr",
                    "addrs_first",
                    "addrs_last",
                    "addrs_txcount",
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        /**
         * addrlistInit
         */
        addrlistInit() {
            return __awaiter(this, void 0, void 0, function* () {
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var addrlist = yield WebBrowser.WWW.getappchainaddrs(appchain, this.pageUtil.pageSize, this.pageUtil.currentPage - 1);
                }
                else {
                    var addrlist = yield WebBrowser.WWW.getaddrs(this.pageUtil.pageSize, this.pageUtil.currentPage - 1);
                }
                //let newDate: Date = new Date();
                addrlist.map((item) => {
                    let firstTime = WebBrowser.DateTool.getTime(parseInt(item.firstDate));
                    item.firstDate = firstTime;
                    let lastTime = WebBrowser.DateTool.getTime(parseInt(item.lastDate));
                    item.lastDate = lastTime;
                });
                this.loadView(addrlist);
                let minNum = this.pageUtil.currentPage * this.pageUtil.pageSize - this.pageUtil.pageSize;
                let maxNum = this.pageUtil.totalCount;
                let diffNum = maxNum - minNum;
                if (diffNum > 15) {
                    maxNum = this.pageUtil.currentPage * this.pageUtil.pageSize;
                }
                let pageMsg = "Addresses " + (minNum + 1) + " to " + maxNum + " of " + this.pageUtil.totalCount;
                $("#addrs-page").find("#addrs-page-msg").html(pageMsg);
                if (this.pageUtil.totalPage - this.pageUtil.currentPage) {
                    $("#addrs-page-next").removeClass('disabled');
                }
                else {
                    $("#addrs-page-next").addClass('disabled');
                }
                if (this.pageUtil.currentPage - 1) {
                    $("#addrs-page-previous").removeClass('disabled');
                }
                else {
                    $("#addrs-page-previous").addClass('disabled');
                }
            });
        }
        /**
         * start
         */
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.getLangs();
                this.div.hidden = false;
                var appchain = WebBrowser.locationtool.getParam();
                if (appchain && appchain.length == 40) {
                    var prom = yield WebBrowser.WWW.getappchainaddrcount(appchain);
                }
                else {
                    var prom = yield WebBrowser.WWW.getaddrcount();
                }
                this.pageUtil = new WebBrowser.PageUtil(prom, 15);
                yield this.addrlistInit();
                //this.addrlistInit();
                $("#addrs-page-next").off("click").click(() => {
                    if (this.pageUtil.currentPage == this.pageUtil.totalPage) {
                        this.pageUtil.currentPage = this.pageUtil.totalPage;
                    }
                    else {
                        this.pageUtil.currentPage += 1;
                        this.addrlistInit();
                    }
                });
                $("#addrs-page-previous").off("click").click(() => {
                    if (this.pageUtil.currentPage <= 1) {
                        this.pageUtil.currentPage = 1;
                    }
                    else {
                        this.pageUtil.currentPage -= 1;
                        this.addrlistInit();
                    }
                });
                this.footer.hidden = false;
            });
        }
        /**
         * loadView
         */
        loadView(addrlist) {
            $("#addrlist").empty();
            addrlist.forEach(item => {
                let href = WebBrowser.Url.href_address(item.addr);
                let html = `
                <tr>
                <td><a class="code" target="_self" href="` + href + `">` + item.addr + `</a></td>
                <td>` + item.firstDate + `</td>
                <td>` + item.lastDate + `</td>
                <td>` + item.txcount + `</td></tr>`;
                $('#addrlist').append(html);
            });
        }
    }
    WebBrowser.Addresses = Addresses;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class AssetInfo {
        constructor(app) {
            this.viewtxlist = document.getElementById("ac_viewtxlist");
            this.viewblocks = document.getElementById("ac_viewblocks");
            this.acblockssection = document.getElementById("assets-balance-list");
            this.actranssection = document.getElementById("assets-trans-list");
            this.div = document.getElementById("asset-info");
            this.footer = document.getElementById('footer-box');
            this.acalladdress = document.getElementById("ac_alladdress");
            this.acallblock = document.getElementById("ac_allblock");
            this.acalltxlist = document.getElementById("ac_alltxlist");
            this.actxcount = 0;
            this.acblockcount = 0;
            this.acaddcount = 0;
            this.ac = null;
            this.app = app;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "asset_title",
                    "asset_id",
                    "asset_asset",
                    "asset_type",
                    "asset_ava",
                    "asset_pre",
                    "asset_adm",
                    "ac_summary",
                    "ac_lastblock", "ac_allblock",
                    "ac_totaltrans", "ac_alltxlist",
                    "ac_walletcreate", "ac_alladdress",
                    "ac_assets_title", "ac_nep5assets_val", "ac_nep5assets_asset",
                    "ac_nep5assets_ava", "ac_nep5assets_pre", "ac_nep5assets_id",
                    "ac_last10",
                    "ac_appchain",
                    "ac_last10_height",
                    "ac_last10_size",
                    "ac_last10_ctm",
                    "ac_last10_txcount",
                    "ac_viewblocks",
                    "ac_last10t",
                    "ac_last10t_txid",
                    "ac_last10t_type",
                    "ac_last10t_height",
                    "ac_last10t_size",
                    "ac_viewtxlist",
                    "ac_chaindata",
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.assetlist = $("#asset-page");
                this.acalladdress.href = WebBrowser.Url.href_addresses(); // document.getElementById("i_acalladdress") as HTMLAnchorElement;  // 
                this.acallblock.href = WebBrowser.Url.href_blocks(); // addeventlistener // this.acblockssection
                this.acalltxlist.href = WebBrowser.Url.href_transactions(); // location.getUrl()   //  window.location.href()          
                this.ac = WebBrowser.locationtool.getParam();
                var ap = this.ac;
                ap = WebBrowser.locationtool.getParam();
                ap = ap.replace('0x', '');
                let href = WebBrowser.locationtool.getUrl() + "/assets";
                let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get('asset_goallasset') + '</a>';
                $("#goallasset").empty();
                $("#goallasset").append(html);
                this.loadAssetInfoView(ap);
                this.acblockcount = (yield WebBrowser.WWW.api_getappchainHeight(ap));
                this.actxcount = (yield WebBrowser.WWW.getappchaintxcount(ap));
                this.acaddcount = (yield WebBrowser.WWW.api_getAppchainAddrcount(ap));
                $("#ac_blockHeight").text(this.acblockcount); //$("#blockHeight").text(NumberTool.toThousands(this.acblockcount)); 
                $("#ac_txcount").text(this.actxcount); //$("#txcount").text(NumberTool.toThousands(this.actxcount)); // 
                $("#ac_addrCount").text(this.acaddcount); //$("#addrCount").text(NumberTool.toThousands(this.acaddcount));
                //分页查询区块数据
                let blocks = yield WebBrowser.WWW.getappchainblocksdesc(ap, 10, 0);
                this.getTenBlock(blocks);
                //分页查询交易记录
                let txs = yield WebBrowser.WWW.getappchainrawtransactionsdesc(ap, 10, 0);
                this.getTenTx(txs);
                this.nep5s = yield WebBrowser.WWW.getappchainallnep5asset(ap);
                if (this.nep5s) {
                    this.pageUtil = new WebBrowser.PageUtil(this.nep5s.length, 15);
                    this.pageUtil.currentPage = 1;
                    if (this.nep5s.length > 15) {
                        this.updateNep5s(this.pageUtil);
                        this.assetlist.find(".page").show();
                    }
                    else {
                        this.loadNep5View(this.nep5s);
                        let pageMsg = "Assets 1 to " + this.pageUtil.totalCount + " of " + this.pageUtil.totalCount;
                        $("#asset-page").find("#asset-page-msg").html(pageMsg);
                        this.assetlist.find(".page").hide();
                    }
                    $("#asset-page-next").off("click").click(() => {
                        if (this.pageUtil.currentPage == this.pageUtil.totalPage) {
                            this.pageUtil.currentPage = this.pageUtil.totalPage;
                        }
                        else {
                            this.pageUtil.currentPage += 1;
                            if (this.assetType == "Nep5") {
                                this.updateNep5s(this.pageUtil);
                            }
                        }
                    });
                    $("#asset-page-previous").off("click").click(() => {
                        if (this.pageUtil.currentPage <= 1) {
                            this.pageUtil.currentPage = 1;
                        }
                        else {
                            this.pageUtil.currentPage -= 1;
                            if (this.assetType == "Nep5") {
                                this.updateNep5s(this.pageUtil);
                            }
                        }
                    });
                    this.pageUtil = new WebBrowser.PageUtil(this.nep5s.length, 15);
                    if (this.nep5s.length > 15) {
                        this.updateNep5s(this.pageUtil);
                        this.assetlist.find(".page").show();
                    }
                    else {
                        this.loadNep5View(this.nep5s);
                        let pageMsg = "AppChains 1 to " + this.pageUtil.totalCount + " of " + this.pageUtil.totalCount;
                        $("#asset-page").find("#asset-page-msg").html(pageMsg);
                        this.assetlist.find(".page").hide();
                    }
                }
                this.getLangs();
                this.div.hidden = false;
                this.footer.hidden = false;
                /*$("#i_acallblock").off("click").click(() => { //
                    if (this.pageUtil.currentPage <= 1) {
                        this.pageUtil.currentPage = 1;
                    } else {
                        this.pageUtil.currentPage -= 1;
                        this.updateNep5TransView(ap, this.pageUtil); // this is for the ac blocks click button
    
                    //this.allacblock.href = document.getElementById("assets-balance-list") as HTMLAnchorElement; //
                    }
                });*/
            });
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        loadAssetInfoView(appchain) {
            $("#appchain_list").empty();
            var html = `<div class="line"></div>
				<div class="line"><div class="title-nel"><span id="asset_id">ID</span></div> <div class="content-nel"><span id="id"></span></div></div>
				<div class="line"><div class="title-nel"><span id="asset_asset">Asset</span></div> <div class="content-nel"><span id="name"></span></div></div>
				<div class="line"><div class="title-nel"><span id="asset_type">Type</span></div> <div class="content-nel"><span id="type"></span></div></div>					
				<div class="line"><div class="title-nel"><span id="asset_adm">Admin</span></div><div class="content-nel"><span id="admin"></span></div></div>`;
            $("#appchain_list").append(html);
            //this.div.innerHTML = pages.asset; 
            WebBrowser.WWW.api_getAppchain(appchain).then((data) => {
                var appchain = data[0];
                var seedlist = appchain.seedlist;
                var valsplit = appchain.validators;
                let time = WebBrowser.DateTool.getTime(appchain.timestamp);
                $("#id").text(appchain.hash);
                $("#name").text(appchain.name);
                $("#type").text(time);
                $("#admin").text(appchain.owner);
                for (var i = 0; i < seedlist.length; i++) {
                    var html = `<div class="line"><div class="title-nel"><span id="asset_ava"></span></div><div class="content-nel">
					<span>` + seedlist[i] + `</span>
					</div></div>`;
                    $("#appchain_list").append(html);
                }
                for (var i = 0; i < valsplit.length; i++) {
                    var html = `<div class="line"><div class="title-nel"><span id="asset_pre"></span></div><div class="content-nel">
					<span>` + valsplit[i] + `</span>
					</div></div>`;
                    $("#appchain_list").append(html);
                }
            });
        }
        loadAssetTranView(txid, from, to, blockindex) {
            let html = `
                    <tr>
                    <td><a class="code omit" href="` + WebBrowser.Url.href_appchaintransaction(this.ac, txid) + `" target="_self">` + txid.replace('0x', '') + `
                    </a></td>
                    <td>` + from + `
                    </td>
                    <td>` + to + `
                    </td>
                    <td>` + blockindex + `</td>
                    </tr>`;
            $("#assets-tran-list").append(html);
        }
        loadNep5View(nep5s) {
            $("#nep5s").empty();
            nep5s.forEach((nep5s) => {
                let href = WebBrowser.Url.href_nep5info(nep5s.assetid);
                let assetId = nep5s.assetid.substring(2, 6) + '...' + nep5s.assetid.substring(nep5s.assetid.length - 4);
                if (nep5s.symbol.indexOf("{") >= 0) {
                    var json = JSON.parse(nep5s.symbol);
                    for (var i = 0; i < json.length; i++) {
                        if (this.app.langmgr.type == "cn" && json[i].lang == "zh-CN") {
                            nep5s.symbol = json[i].name;
                            break;
                        }
                        else if (this.app.langmgr.type == json[i].lang) {
                            nep5s.symbol = json[i].name;
                            break;
                        }
                    }
                    var json = JSON.parse(nep5s.name);
                    for (var i = 0; i < json.length; i++) {
                        if (this.app.langmgr.type == "cn" && json[i].lang == "zh-CN") {
                            nep5s.name = json[i].name;
                            break;
                        }
                        else if (this.app.langmgr.type == json[i].lang) {
                            nep5s.name = json[i].name;
                            break;
                        }
                    }
                }
                let htmlnep5 = `
					<tr>
					<td>` + nep5s.symbol + `</td>
                    <td> <a href="` + href + `" target="_self">` + assetId + `</a></td>
                    <td>` + nep5s.name + `</td>
                    <td>` + nep5s.totalsupply + `</td>                    
                    <td>` + nep5s.decimals + `</td>
                    </tr>`;
                $("#nep5s").append(htmlnep5);
            });
        }
        //更新asset表格
        updateNep5s(pageUtil) {
            return __awaiter(this, void 0, void 0, function* () {
                $("#asset-page").find("#asset-page-msg").html("");
                let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
                let maxNum = pageUtil.totalCount;
                let diffNum = maxNum - minNum;
                if (diffNum > 15) {
                    maxNum = pageUtil.currentPage * pageUtil.pageSize;
                }
                else {
                    maxNum = pageUtil.totalCount;
                }
                let arrNep5s = new Array();
                for (let i = minNum; i < maxNum; i++) {
                    arrNep5s.push(this.nep5s[i]);
                }
                this.loadNep5View(arrNep5s);
                let pageMsg = "Assets " + (minNum + 1) + " to " + maxNum + " of " + pageUtil.totalCount;
                $("#asset-page").find("#asset-page-msg").html(pageMsg);
                if (this.pageUtil.totalPage - this.pageUtil.currentPage) {
                    $("#asset-page-next").removeClass('disabled');
                }
                else {
                    $("#asset-page-next").addClass('disabled');
                }
                if (this.pageUtil.currentPage - 1) {
                    $("#asset-page-previous").removeClass('disabled');
                }
                else {
                    $("#asset-page-previous").addClass('disabled');
                }
            });
        }
        getTenBlock(blocks) {
            $("#asset-info").find("#ac_blocks").children("tbody").empty();
            let html_blocks = ``;
            blocks.forEach((item, index, input) => {
                let time = WebBrowser.DateTool.getTime(item.time);
                var id = item.hash;
                id.replace('0x', '');
                id = id.substring(0, 4) + '...' + id.substring(id.length - 4);
                html_blocks += `
                <tr><td>
                <a class="code" target="_self" href ='` + WebBrowser.Url.href_blockh(item.hash) + `' > 
                ` + id + `</a></td>
                <td>` + item.size + ` bytes</td>
                <td>` + time + `</td>
                <td><a class="code" target="_self" href ='` + WebBrowser.Url.href_block(item.index) + `' > 
                ` + item.index + `</a></td>
                <td>` + item.tx.length + `</td></tr>`;
            });
            $("#asset-info").find("#ac_blocks").children("tbody").append(html_blocks);
        }
        getTenTx(txs) {
            $("#asset-info").find("#ac_transactions").children("tbody").empty();
            let html_txs = ``;
            txs.forEach((tx) => {
                let txid = tx.txid;
                let txtype = tx.type.replace("Transaction", "");
                txid = txid.replace('0x', '');
                txid = txid.substring(0, 4) + '...' + txid.substring(txid.length - 4);
                html_txs += `
                <tr>
                <td><a class='code' target='_self'
                 href ='` + WebBrowser.Url.href_transaction(tx.txid) + `' > ` + txid + ` </a>
                </td>
                <td>` + txtype + `
                </td>
                <td> ` + tx.blockindex + `
                </td>
                <td> ` + tx.size + ` bytes
                </td>
                </tr>`;
            });
            $("#asset-info").find("#ac_transactions").children("tbody").append(html_txs);
        }
    }
    WebBrowser.AssetInfo = AssetInfo;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    //资产页面管理器
    class Appchains {
        constructor(app) {
            this.div = document.getElementById("asset-page");
            this.footer = document.getElementById('footer-box');
            this.app = app;
            this.assetlist = $("#asset-page");
            //监听交易列表选择框
            $("#asset-TxType").change(() => {
                this.pageUtil.currentPage = 1;
                this.assetType = $("#asset-TxType").val();
                if (this.assetType == "Assets") {
                    this.pageUtil = new WebBrowser.PageUtil(this.appchains.length, 15);
                    this.pageUtil.currentPage = 1;
                    if (this.appchains.length > 15) {
                        this.updateAssets(this.pageUtil);
                        this.assetlist.find(".page").show();
                    }
                    else {
                        this.loadAssetView(this.appchains);
                        let pageMsg = "Assets 1 to " + this.pageUtil.totalCount + " of " + this.pageUtil.totalCount;
                        $("#asset-page").find("#asset-page-msg").html(pageMsg);
                        this.assetlist.find(".page").hide();
                    }
                }
            });
            $("#asset-page-next").off("click").click(() => {
                if (this.pageUtil.currentPage == this.pageUtil.totalPage) {
                    this.pageUtil.currentPage = this.pageUtil.totalPage;
                }
                else {
                    this.pageUtil.currentPage += 1;
                    if (this.assetType == "Assets") {
                        this.updateAssets(this.pageUtil);
                    }
                }
            });
            $("#asset-page-previous").off("click").click(() => {
                if (this.pageUtil.currentPage <= 1) {
                    this.pageUtil.currentPage = 1;
                }
                else {
                    this.pageUtil.currentPage -= 1;
                    if (this.assetType == "Assets") {
                        this.updateAssets(this.pageUtil);
                    }
                }
            });
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "assets_title",
                    "assets_asset",
                    "assets_id",
                    "assets_type",
                    "assets_ava",
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        //更新asset表格
        updateAssets(pageUtil) {
            return __awaiter(this, void 0, void 0, function* () {
                $("#asset-page").find("#asset-page-msg").html("");
                let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
                let maxNum = pageUtil.totalCount;
                let diffNum = maxNum - minNum;
                if (diffNum > 15) {
                    maxNum = pageUtil.currentPage * pageUtil.pageSize;
                }
                let arrAsset = new Array();
                for (let i = minNum; i < maxNum; i++) {
                    arrAsset.push(this.appchains[i]);
                }
                this.loadAssetView(arrAsset);
                let pageMsg = "Assets " + (minNum + 1) + " to " + maxNum + " of " + pageUtil.totalCount;
                $("#asset-page").find("#asset-page-msg").html(pageMsg);
            });
        }
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.getLangs();
                $("#asset-TxType").val("Assets");
                this.assetType = $("#asset-TxType").val();
                this.appchains = yield WebBrowser.WWW.api_getAllAppchains();
                this.pageUtil = new WebBrowser.PageUtil(this.appchains.length, 15);
                if (this.appchains.length > 15) {
                    this.updateAssets(this.pageUtil);
                    this.assetlist.find(".page").show();
                }
                else {
                    this.loadAssetView(this.appchains);
                    let pageMsg = "App Chains 1 to " + this.pageUtil.totalCount + " of " + this.pageUtil.totalCount;
                    $("#asset-page").find("#asset-page-msg").html(pageMsg);
                    this.assetlist.find(".page").hide();
                }
                this.div.hidden = false;
                this.footer.hidden = false;
            });
        }
        /**
         * loadView 页面展现
         */
        loadAssetView(appchains) {
            $("#assets").empty();
            appchains.forEach((appchain) => {
                var id = appchain.hash;
                id = id.replace('0x', '');
                let href = WebBrowser.Url.href_asset(id);
                id = appchain.hash.substring(0, 4) + '...' + appchain.hash.substring(appchain.hash.length - 4);
                let chainowner = appchain.owner.substring(2, 6) + '...' + appchain.owner.substring(appchain.owner.length - 4);
                let time = WebBrowser.DateTool.getTime(appchain.timestamp);
                let html = `
                    <tr>
                    <td> <a href="` + href + `" target="_self">` + appchain.name + `</a></td>
                    <td> <a href="` + href + `" target="_self">` + id + `</a></td>
                    <td>` + chainowner + `</td>
                    <td>` + time + `</td>
         
                    </tr>`;
                $("#assets").append(html);
            });
        }
    }
    WebBrowser.Appchains = Appchains;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../../lib/neo-ts.d.ts"/>
var WebBrowser;
/// <reference path="../../lib/neo-ts.d.ts"/>
(function (WebBrowser) {
    class WebHelper {
        static getScriptBuilderCreate(type, ..._params) {
            var sb = new ThinNeo.ScriptBuilder();
            switch (type) {
                case Nep5Type.Neo:
                    sb.EmitPushString(_params[0]);
                    sb.EmitPushString(_params[1]);
                    sb.EmitPushString(_params[2]);
                    sb.EmitPushString(_params[3]);
                    sb.EmitPushString(_params[4]);
                    sb.EmitPushNumber(new Neo.BigInteger(_params[5]));
                    sb.EmitPushBytes(_params[6]);
                    sb.EmitPushBytes(_params[7]);
                    var contract = new Uint8Array(_params[8]);
                    sb.EmitPushBytes(contract);
                    sb.EmitSysCall("Neo.Contract.Create");
                    break;
                case Nep5Type.Zoro:
                    sb.EmitPushString(_params[0]);
                    sb.EmitPushString(_params[1]);
                    sb.EmitPushString(_params[2]);
                    sb.EmitPushString(_params[3]);
                    sb.EmitPushString(_params[4]);
                    sb.EmitPushNumber(new Neo.BigInteger(_params[5]));
                    sb.EmitPushBytes(_params[6]);
                    sb.EmitPushBytes(_params[7]);
                    var contract = new Uint8Array(_params[8]);
                    sb.EmitPushBytes(contract);
                    sb.EmitSysCall("Zoro.Contract.Create");
                    break;
                case Nep5Type.NativeNep5:
                    var amount = _params[3] * Math.pow(10, _params[2]);
                    var script = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(_params[1]);
                    var ss = new Neo.Uint160(script).toString();
                    sb.EmitPushBytes(_params[0].hexToBytes().reverse());
                    sb.EmitPushString(ss);
                    sb.EmitPushBytes(_params[1]);
                    sb.EmitPushNumber(new Neo.BigInteger(_params[2]));
                    sb.EmitPushNumber(new Neo.BigInteger(amount));
                    sb.EmitPushString(_params[4]);
                    sb.EmitPushString(_params[5]);
                    sb.EmitSysCall("Zoro.NativeNEP5.Create");
                    break;
            }
            return sb;
        }
    }
    WebBrowser.WebHelper = WebHelper;
    let Nep5Type;
    (function (Nep5Type) {
        Nep5Type[Nep5Type["Neo"] = 0] = "Neo";
        Nep5Type[Nep5Type["Zoro"] = 1] = "Zoro";
        Nep5Type[Nep5Type["NativeNep5"] = 2] = "NativeNep5";
    })(Nep5Type = WebBrowser.Nep5Type || (WebBrowser.Nep5Type = {}));
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../tools/wwwtool.ts"/>
/// <reference path="../tools/WebHelper.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
var WebBrowser;
/// <reference path="../tools/wwwtool.ts"/>
/// <reference path="../tools/WebHelper.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
(function (WebBrowser) {
    class AppChainTool {
        static initAllAppChain() {
            return __awaiter(this, void 0, void 0, function* () {
                var allChainHash = yield WebBrowser.WWW.api_getAllAppChain();
                this.chainName2Hash["NEO"] = "NEO";
                this.chainName2Hash["AppRoot"] = AppChainTool.RootChain;
                this.appChainLength = 2;
                for (var a in allChainHash) {
                    var chainHash = allChainHash[a];
                    var chainName = yield WebBrowser.WWW.api_getAppChainName(chainHash);
                    this.chainName2Hash[chainName] = chainHash;
                    this.appChainLength++;
                }
                WebBrowser.WWW.chainHashLength = this.appChainLength;
                return this.chainName2Hash;
            });
        }
        static updateAllAppChain() {
            return __awaiter(this, void 0, void 0, function* () {
                var allChainHash = yield WebBrowser.WWW.api_getAllAppChain();
                this.chainName2Hash["NEO"] = "NEO";
                this.chainName2Hash["AppRoot"] = AppChainTool.RootChain;
                this.appChainLength = 2;
                for (var a in allChainHash) {
                    var chainHash = allChainHash[a];
                    var chainName = yield WebBrowser.WWW.api_getAppChainName(chainHash);
                    this.chainName2Hash[chainName] = chainHash;
                    this.appChainLength++;
                }
                return this.chainName2Hash;
            });
        }
        static initAppChainSelectList() {
            for (var i = 0; i < 9; i++) {
                this.pubKey_List["pubKey" + (i + 1)] = this.Node_List["node" + (i + 1)]["pubkey"];
                this.ip_List["ip" + (i + 1)] = this.Node_List["node" + (i + 1)]["ip"];
            }
        }
        static createSelect(panel, type, num) {
            var select = document.createElement("select");
            panel.appendChild(select);
            switch (type) {
                case "pubkey":
                    for (var name in AppChainTool.pubKey_List) {
                        var sitem = document.createElement("option");
                        sitem.text = name;
                        sitem.value = AppChainTool.pubKey_List[name];
                        select.appendChild(sitem);
                    }
                    break;
                case "ip":
                    for (var name in AppChainTool.ip_List) {
                        var sitem = document.createElement("option");
                        sitem.text = name;
                        sitem.value = AppChainTool.ip_List[name];
                        select.appendChild(sitem);
                    }
                    break;
            }
            select.selectedIndex = num - 1;
            return select;
        }
        static getNativeBalanceOf(chainHash) {
            return __awaiter(this, void 0, void 0, function* () {
                var sb = new ThinNeo.ScriptBuilder();
                var a = [];
                a.push("(hex160)" + this.zoroBCP);
                a.push("(addr)" + WebBrowser.GUITool.address);
                sb.EmitParamJson(a);
                sb.EmitPushString("BalanceOf");
                sb.EmitSysCall("Zoro.NativeNEP5.Call");
                sb.EmitPushBytes(this.zoroBCP.hexToBytes().reverse());
                sb.EmitPushString("Decimals");
                sb.EmitSysCall("Zoro.NativeNEP5.Call");
                var result = yield this.InvokeZoroContract(sb, chainHash);
                var decimals = Number(result[0]["stack"][1]["value"]);
                var value = new Neo.BigInteger(result[0]["stack"][0]["value"]).toString();
                if (value.length < 8) {
                    let s = "0.";
                    for (var i = 0; i < 8 - value.length; i++) {
                        s += "0";
                    }
                    value = s + value;
                }
                else {
                    let s = value.substr(0, value.length - 8);
                    s += ".";
                    s += value.substr(value.length - 8);
                    value = s;
                }
                return value;
            });
        }
        static SendNativeContract(presion, totalsupply, symbol, name, chainHash, pubkey, prikey) {
            return __awaiter(this, void 0, void 0, function* () {
                var sb = new ThinNeo.ScriptBuilder();
                sb = WebBrowser.WebHelper.getScriptBuilderCreate(WebBrowser.Nep5Type.NativeNep5, AppChainTool.zoroBCP, pubkey, presion, totalsupply, symbol, name);
                var scripthash = Neo.Cryptography.Sha256.computeHash(sb.ToArray());
                scripthash = Neo.Cryptography.RIPEMD160.computeHash(scripthash);
                var invokeResult = yield this.InvokeZoroContract(sb, chainHash);
                var gasLimit = invokeResult[0]["gas_consumed"];
                var tran = this.getZoroTransaction(Neo.Fixed8.parse(gasLimit), Neo.Fixed8.One, sb.ToArray(), ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey));
                var result = this.SendZororawtransaction(tran, prikey, pubkey, chainHash);
                alert(JSON.stringify(result));
                //NativeNep5 Hash
                alert(new Neo.Uint160(scripthash).toString());
            });
        }
        static SendContract(need_storage, need_canCharge, description, email, auther, version, name, ContractAvm, chainHash, pubkey, prikey) {
            return __awaiter(this, void 0, void 0, function* () {
                var parameter__list = "0710".hexToBytes();
                var return_type = "05".hexToBytes();
                var storage = 1;
                var nep4 = 0;
                var canCharge = 4;
                var sb = new ThinNeo.ScriptBuilder();
                storage = need_storage ? storage : 0;
                nep4 = nep4;
                canCharge = need_canCharge ? canCharge : 4;
                var ss = storage | nep4 | canCharge;
                if (chainHash == "NEO")
                    sb = WebBrowser.WebHelper.getScriptBuilderCreate(WebBrowser.Nep5Type.Neo, description, email, auther, version, name, ss, return_type, parameter__list, ContractAvm);
                else {
                    sb = WebBrowser.WebHelper.getScriptBuilderCreate(WebBrowser.Nep5Type.Zoro, description, email, auther, version, name, ss, return_type, parameter__list, ContractAvm);
                }
                if (chainHash == "NEO") {
                    var tran = yield this.getNeoTransaction(sb, pubkey);
                    let result = yield this.SendNeorawtransaction(tran, prikey, pubkey);
                    alert("txid=" + tran.GetHash().toHexString());
                }
                else {
                    var invokeResult = yield this.InvokeZoroContract(sb, chainHash);
                    var gasLimit = invokeResult["gas_consumed"];
                    let tran = this.getZoroTransaction(Neo.Fixed8.parse(gasLimit), Neo.Fixed8.One, sb.ToArray(), ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey));
                    let result = this.SendZororawtransaction(tran, prikey, pubkey, chainHash);
                    alert("txid=" + tran.GetHash().toHexString());
                }
            });
        }
        static SendInvokeContractMethod(chainHash, pubkey, prikey, method, contract) {
            return __awaiter(this, void 0, void 0, function* () {
                var sb = this.getJointScriptBuilder(method, contract);
                if (chainHash == "NEO") {
                    var result = yield this.InvokeNeoContract(sb);
                }
                else {
                    var result = yield this.InvokeZoroContract(sb, chainHash);
                }
                return result;
            });
        }
        static SendContractMethod(chainHash, pubkey, prikey, method, contract) {
            return __awaiter(this, void 0, void 0, function* () {
                var sb = this.getJointScriptBuilder(method, contract);
                if (chainHash == "NEO") {
                    var tran = yield this.getNeoTransaction(sb, pubkey);
                    var result = yield this.SendNeorawtransaction(tran, prikey, pubkey);
                    return tran.GetHash().toHexString();
                }
                else {
                    var invokeResult = yield this.InvokeZoroContract(sb, chainHash);
                    var gasLimit = invokeResult["gas_consumed"];
                    let tran = this.getZoroTransaction(Neo.Fixed8.parse(gasLimit), Neo.Fixed8.One, sb.ToArray(), ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey));
                    var txid = yield this.SendZororawtransaction(tran, prikey, pubkey, chainHash);
                    return tran.GetHash().toHexString();
                }
            });
        }
        //拼接scriptbuilder合约调用
        static getJointScriptBuilder(method, contract) {
            var sb = new ThinNeo.ScriptBuilder();
            for (var i = 0; i < method.length; i++) {
                var array = [];
                for (var j = 0; j < method[i]["params"].length; j++) {
                    var s = method[i]["params"][j];
                    array.push(s);
                }
                sb.EmitParamJson(array);
                sb.EmitPushString(method[i]["methodName"]);
                sb.EmitAppCall(contract.hexToBytes().reverse());
            }
            return sb;
        }
        static SendCreateAppChain(name, pubkey, validators, seedList, prikey, chainHash) {
            return __awaiter(this, void 0, void 0, function* () {
                var sb = this.makeAppChainScriptBuilder(pubkey, validators, seedList);
                var invokeResult = yield this.InvokeZoroContract(sb, chainHash);
                var gasLimit = invokeResult["gas_consumed"];
                var tran = this.getZoroTransaction(Neo.Fixed8.parse(gasLimit), Neo.Fixed8.One, sb.ToArray(), ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey));
                var txid = yield this.SendZororawtransaction(tran, prikey, pubkey, chainHash);
                alert("this is txid = " + txid);
            });
        }
        //发送Zoro交易
        static SendZororawtransaction(tran, prikey, pubkey, chainHash) {
            return __awaiter(this, void 0, void 0, function* () {
                var msg = tran.GetMessage();
                var signdata = ThinNeo.Helper.Sign(msg, prikey);
                tran.AddWitness(signdata, pubkey, ThinNeo.Helper.GetAddressFromPublicKey(pubkey));
                var data = tran.GetRawData();
                var rawdata = data.toHexString();
                var postRawArray = [];
                postRawArray.push(chainHash);
                postRawArray.push(rawdata);
                var postResult = yield WebBrowser.WWW.rpc_sendrawtransaction(postRawArray);
                if (postResult["result"] == true) {
                    return tran.GetHash().toHexString();
                }
            });
        }
        static SendNeorawtransaction(tran, prikey, pubkey) {
            return __awaiter(this, void 0, void 0, function* () {
                var msg = tran.GetMessage();
                var signdata = ThinNeo.Helper.Sign(msg, prikey);
                tran.AddWitness(signdata, pubkey, ThinNeo.Helper.GetAddressFromPublicKey(pubkey));
                var data = tran.GetRawData();
                var postResult = yield WebBrowser.WWW.rpc_postRawTransaction(data);
            });
        }
        static getNeoTransaction(sb, pubkey) {
            return __awaiter(this, void 0, void 0, function* () {
                var extdata = new ThinNeo.InvokeTransData();
                extdata.script = sb.ToArray();
                extdata.gas = Neo.Fixed8.Zero;
                var utxo = yield WebBrowser.WWW.rpc_getUTXO(WebBrowser.GUITool.address);
                let tran = WebBrowser.CoinTool.makeTran(WebBrowser.CoinTool.getassets(utxo), ThinNeo.Helper.GetAddressFromPublicKey(pubkey), this.id_GAS, Neo.Fixed8.Zero);
                tran.type = ThinNeo.TransactionType.InvocationTransaction;
                tran.extdata = extdata;
                return tran;
            });
        }
        static InvokeNeoContract(sb) {
            return __awaiter(this, void 0, void 0, function* () {
                var scriptPublish = sb.ToArray().toHexString();
                var str = WebBrowser.WWW.makeUrl("invokescript", WebBrowser.WWW.neoRpc, scriptPublish);
                var r = yield fetch(str, { "method": "get" });
                var result = yield r.json();
                return result;
            });
        }
        //zoro invokescript
        static InvokeZoroContract(sb, chainHash) {
            return __awaiter(this, void 0, void 0, function* () {
                var data = sb.ToArray();
                var scriptPublish = data.toHexString();
                var array = [];
                array.push(chainHash);
                array.push(scriptPublish);
                var postdata = WebBrowser.WWW.makeZoroRpcPostBody("invokescript", array);
                var result = yield fetch(WebBrowser.WWW.api, { "method": "post", "body": JSON.stringify(postdata) });
                var json = yield result.json();
                return json["result"];
            });
        }
        //获取ZoroTransaction
        static getZoroTransaction(gasLimit, gasPrice, script, scriptHash) {
            var exData = new ThinNeo.ZoroInvokeTransData();
            exData.gasLimit = gasLimit;
            exData.gasPrice = gasPrice;
            exData.script = script;
            var tran = new ThinNeo.ZoroTransaction();
            tran.type = ThinNeo.ZoroTransactionType.InvocationTransaction;
            tran.version = 0;
            tran.nonce = ThinNeo.ZoroTransaction.GetNonce();
            tran.Account = scriptHash;
            tran.attributes = [];
            tran.extdata = exData;
            return tran;
        }
        //拼接应用链scriptbuilder
        static makeAppChainScriptBuilder(pubkey, validators, seedList) {
            var sb = new ThinNeo.ScriptBuilder();
            for (var i = 0; i < validators.length; i++) {
                sb.EmitPushString(validators[i]);
            }
            sb.EmitPushNumber(new Neo.BigInteger(validators.length));
            for (var i = 0; i < seedList.length; i++) {
                sb.EmitPushString(seedList[i]);
            }
            sb.EmitPushNumber(new Neo.BigInteger(seedList.length));
            { //获取UTC时间
                var date = new Date();
                var y = date.getUTCFullYear();
                var M = date.getUTCMonth();
                var d = date.getUTCDay();
                var h = date.getUTCHours();
                var m = date.getUTCMinutes();
                var s = date.getUTCSeconds();
            }
            var time = Math.floor(Date.UTC(y, M, d, h, m, s) / 1000);
            sb.EmitPushNumber(new Neo.BigInteger(time));
            sb.EmitPushBytes(Neo.Cryptography.ECPoint.fromUint8Array(pubkey, Neo.Cryptography.ECCurve.secp256r1).encodePoint(true));
            sb.EmitPushString(name);
            var chainHash = new Neo.Uint160(Neo.Cryptography.RIPEMD160.computeHash(Neo.Cryptography.Sha256.computeHash(sb.ToArray())));
            sb.EmitPushBytes(chainHash.toArray());
            sb.EmitSysCall("Zoro.AppChain.Create");
            return sb;
        }
        static MakeZoroTransaction(address, targetaddress, sendCount, assetid, contractHash, prikey, pubkey, chainHash) {
            return __awaiter(this, void 0, void 0, function* () {
                var sb = new ThinNeo.ScriptBuilder();
                sb.EmitPushNumber(new Neo.BigInteger(sendCount * Math.pow(10, 8)));
                sb.EmitPushBytes(ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(targetaddress));
                sb.EmitPushBytes(ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(address));
                sb.EmitPushBytes(assetid.hexToBytes().reverse());
                sb.EmitPushString("Transfer");
                sb.EmitSysCall("Zoro.NativeNEP5.Call");
                var invokeResult = yield this.InvokeZoroContract(sb, chainHash);
                var gasLimit = invokeResult[0]["gas_consumed"];
                var tran = this.getZoroTransaction(Neo.Fixed8.parse(gasLimit), Neo.Fixed8.One, sb.ToArray(), ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey));
                var result = this.SendZororawtransaction(tran, prikey, pubkey, chainHash);
                alert("txid=" + tran.GetHash().toHexString());
            });
        }
        static MakeInvokeTransaction(utxo, address, targetaddress, assetid, sendCount, prikey, pubkey) {
            return __awaiter(this, void 0, void 0, function* () {
                var tran = WebBrowser.CoinTool.makeTran(utxo, address, this.id_GAS, Neo.Fixed8.Zero);
                tran.type = ThinNeo.TransactionType.InvocationTransaction;
                tran.extdata = new ThinNeo.InvokeTransData();
                var sb = new ThinNeo.ScriptBuilder();
                var randomBytes = new Uint8Array(32);
                var key = Neo.Cryptography.RandomNumberGenerator.getRandomValues(randomBytes);
                var randomNum = new Neo.BigInteger(key);
                sb.EmitPushNumber(randomNum);
                sb.Emit(ThinNeo.OpCode.DROP);
                var array = [];
                array.push("(addr)" + address);
                array.push("(addr)" + targetaddress);
                array.push("(int)" + sendCount);
                sb.EmitParamJson(array);
                sb.EmitPushString("transfer");
                sb.EmitAppCall(assetid.hexToBytes().reverse());
                tran.extdata.script = sb.ToArray();
                tran.extdata.gas = Neo.Fixed8.Zero;
                var msg = tran.GetMessage();
                var signdata = ThinNeo.Helper.Sign(msg, prikey);
                tran.AddWitness(signdata, pubkey, address);
                var data = tran.GetRawData();
                var postResult = yield WebBrowser.WWW.rpc_postRawTransaction(data);
                if (postResult)
                    alert(tran.GetHash().clone().reverse().toHexString());
            });
        }
        static MakeTransaction(utxo, targetaddress, assetid, sendCount, prikey, pubkey) {
            return __awaiter(this, void 0, void 0, function* () {
                var tran = WebBrowser.CoinTool.makeTran(utxo, targetaddress, assetid, sendCount);
                var msg = tran.GetMessage();
                var signdata = ThinNeo.Helper.Sign(msg, prikey);
                tran.AddWitness(signdata, pubkey, ThinNeo.Helper.GetAddressFromPublicKey(pubkey));
                var data = tran.GetRawData();
                var postResult = yield WebBrowser.WWW.rpc_postRawTransaction(data);
                if (postResult["result"])
                    alert(tran.GetHash().clone().reverse().toHexString());
            });
        }
        static selectClear(select) {
            if (select)
                while (select.childNodes.length > 0) {
                    select.removeChild(select.options[0]);
                    select.remove(0);
                    select.options[0] = null;
                }
        }
        static getChain(select) {
            return __awaiter(this, void 0, void 0, function* () {
                this.selectClear(select);
                var name2Hash = yield AppChainTool.initAllAppChain();
                for (var chainName in name2Hash) {
                    var sitem = document.createElement("option");
                    sitem.text = chainName;
                    sitem.value = name2Hash[chainName];
                    select.appendChild(sitem);
                }
            });
        }
    }
    AppChainTool.zoroBCP = "0000000000000000000000000000000000000001";
    AppChainTool.neoBCP = "d49d37845d0b0bf4ba7575509c44c6e9e98e6b6b";
    AppChainTool.CNEO = "c074a05e9dcf0141cbe6b4b3475dd67baf4dcb60";
    AppChainTool.CGAS = "74f2dc36a68fdc4682034178eb2220729231db76";
    AppChainTool.Neotransfer = "0x04e31cee0443bb916534dad2adf508458920e66d";
    AppChainTool.Zorotransfer = "0x67147557c0b6431e9b9297de26b46d9889434e49";
    AppChainTool.RootChain = "0000000000000000000000000000000000000000";
    //跨链相关参数
    AppChainTool.zoroBank = "0xb6a0b10d8cb60392068c16212f5e79fcacb18e67";
    AppChainTool.zoroBankAddr = "ARDSBp77KGwnFctq4ETkdsesoE2LY28uwA";
    AppChainTool.neoBank = "0x816c36f0318b3fdd4630c50ec76f16323e63f059";
    AppChainTool.neoBankAddr = "APyRkzuadaczn1xSvQ3WXn5uEH6u5HK5K5";
    AppChainTool.id_GAS = "0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
    AppChainTool.id_NEO = "0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    AppChainTool.GAS = 0;
    AppChainTool.NEO = 0;
    AppChainTool.port = 15000;
    AppChainTool.chainName2Hash = {};
    AppChainTool.appChainLength = 1;
    AppChainTool.pubKey_List = {};
    AppChainTool.ip_List = {};
    AppChainTool.Node_List = {
        "node1": {
            "ip": "182.254.221.14",
            "wallet": "1.json",
            "address": "AbE6cCQGstikD1QvwTnkrD3Jid6JGPY4oq",
            "pubkey": "025178aa02ccb9a30c74c0e9771ed60d771710625e41d1ae37a192a6db2c00e7d6"
        },
        "node2": {
            "ip": "123.207.183.55",
            "wallet": "2.json",
            "address": "ANULCFJSek2qmaomk3x9KD4zR89rftsTKU",
            "pubkey": "02ade1a21bd7d90b88299e7e1fef91c12fdc9988ad9100816d3b50cb6090fd88a2"
        },
        "node3": {
            "ip": "182.254.219.170",
            "wallet": "3.json",
            "address": "ASzuDdnb2Uzkk7XoXxsJ52Wx22er6VXWYt",
            "pubkey": "02f0a7538d3aa6fc6a91315c5842733820df5b4ec1e4f273adc5d36eebd0f7463a"
        },
        "node4": {
            "ip": "115.159.68.43",
            "wallet": "4.json",
            "address": "AXBnQ5itNMYnNTW6YNvfR668AeYZ893hDR",
            "pubkey": "03f35c16c5e8837697b9263f44f62be58c058562e76b033ed29a2223792901f6b1"
        },
        "node5": {
            "ip": "115.159.53.39",
            "wallet": "5.json",
            "address": "AeTshMKrTFtmowwtHH2Da4bW19HbASmyQN",
            "pubkey": "0394f2618478474d3d5744ddd0628cf22fff4deaed4264f468f55a34758a64ac72"
        },
        "node6": {
            "ip": "115.159.85.92",
            "wallet": "6.json",
            "address": "AG6AMhWAPNk9ZAzRccb4ca1z9PmNz6JpnC",
            "pubkey": "03b7034750ff07afe1d122602fe1581672d3741bf4a729118e6fb3169237146120"
        },
        "node7": {
            "ip": "123.206.197.174",
            "wallet": "7.json",
            "address": "AWEyVxBus6NADVHpkABxoN9hyasmqLKpnt",
            "pubkey": "036fd67a326378779db32574c5610f9537411376834a1c9a50aaecae74f733b8ae"
        },
        "node8": {
            "ip": "115.159.161.150",
            "wallet": "8.json",
            "address": "AeFt22JgXDRyxuMR326xdH5FrGVNtN7ju9",
            "pubkey": "039ae33d9489d15936a9a4197d9ad029bc60469afd2482150af8ec7e7b3b81bfa1"
        },
        "node9": {
            "ip": "115.159.183.238",
            "wallet": "9.json",
            "address": "AUHxthEAYQG47E5TLBevDyhVaSkex7sQzR",
            "pubkey": "021421f6b70a410ff14521d699343f136fe58857fab45a0984bee8e73670fd2512"
        }
    };
    WebBrowser.AppChainTool = AppChainTool;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class GUITool {
    }
    WebBrowser.GUITool = GUITool;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./Base.ts"/>
var WebBrowser;
/// <reference path="./Base.ts"/>
(function (WebBrowser) {
    class GUI_Route {
        constructor() {
            this.pageName = [];
        }
        static get instance() {
            if (this.route == null) {
                this.route = new GUI_Route();
            }
            return this.route;
        }
        showUI(pageName) {
            if (this.pageName[pageName])
                this.pageName[pageName].showUI();
        }
        pushUI(pageName, base) {
            this.pageName[pageName] = base;
        }
        hideUI(pageName) {
            if (this.pageName[pageName])
                this.pageName[pageName].hideUI();
        }
        getUI(pageName) {
            if (this.pageName[pageName])
                return this.pageName[pageName];
            return null;
        }
    }
    GUI_Route.route = null;
    WebBrowser.GUI_Route = GUI_Route;
    let PageName;
    (function (PageName) {
        PageName[PageName["Login"] = 0] = "Login";
        PageName[PageName["Wallet"] = 1] = "Wallet";
        PageName[PageName["MainView"] = 2] = "MainView";
        PageName[PageName["Title"] = 3] = "Title";
        PageName[PageName["Asset"] = 4] = "Asset";
        PageName[PageName["Charge"] = 5] = "Charge";
        PageName[PageName["AppChain"] = 6] = "AppChain";
        PageName[PageName["Contract"] = 7] = "Contract";
        PageName[PageName["TxMessage"] = 8] = "TxMessage";
        PageName[PageName["Message"] = 9] = "Message";
    })(PageName = WebBrowser.PageName || (WebBrowser.PageName = {}));
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./GUIRoute.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
var WebBrowser;
/// <reference path="./GUIRoute.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
(function (WebBrowser) {
    class LoginView {
        constructor() {
        }
        static show(div) {
            if (div.children.length > 1)
                div.removeChild(div.lastChild);
            var loginbackground = document.createElement('div');
            div.appendChild(loginbackground);
            loginbackground.className = "login-bg";
            var name = document.createElement('h3');
            name.textContent = "登陆你的钱包";
            loginbackground.appendChild(name);
            name.className = "login-title";
            var uploadFiles = document.createElement("div"); //外层div
            loginbackground.appendChild(uploadFiles);
            uploadFiles.className = "upload-file";
            //feile  外层
            var firstFile = document.createElement("div");
            var putIn = document.createElement("div");
            putIn.textContent = "请选择钱包文件";
            firstFile.appendChild(putIn);
            putIn.className = "putin";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/file.png";
            putIn.appendChild(fileIcon);
            fileIcon.className = "file-icon";
            uploadFiles.appendChild(firstFile);
            firstFile.className = "first-file";
            //将file添加到feile  外层里
            var file = document.createElement("input");
            firstFile.appendChild(file);
            file.type = "file";
            file.className = "file";
            //提示添加file上传的文字
            var fileTip = document.createElement("p");
            fileTip.textContent = '*请上传钱包文件';
            uploadFiles.appendChild(fileTip);
            fileTip.className = "file-tip";
            //密码的
            var password = document.createElement("input");
            uploadFiles.appendChild(password);
            password.type = "password";
            password.placeholder = "请输入密码";
            password.className = "password";
            $(password).on("input", function () {
                if (password.value.length) {
                    passwordTip.textContent = '';
                }
                else {
                    passwordTip.textContent = '*密码输入有误';
                }
            });
            //密码提示的
            var passwordTip = document.createElement("p");
            passwordTip.textContent = '*密码输入有误';
            uploadFiles.appendChild(passwordTip);
            passwordTip.className = "file-tip";
            var btn = document.createElement("button");
            uploadFiles.appendChild(btn);
            btn.textContent = "登录";
            btn.className = "btn-commit";
            btn.onclick = () => {
                if (wallet.accounts.length > 0 && wallet.accounts[0].nep2key != null) {
                    let nepkey = wallet.accounts[0].nep2key;
                    var s = wallet.scrypt;
                    ThinNeo.Helper.GetPrivateKeyFromNep2(nepkey, password.value, s.N, s.r, s.p, (info, result) => {
                        if (info == "finish") {
                            WebBrowser.GUITool.prikey = result;
                            var wif = ThinNeo.Helper.GetWifFromPrivateKey(WebBrowser.GUITool.prikey);
                            WebBrowser.GUITool.pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(WebBrowser.GUITool.prikey);
                            WebBrowser.GUITool.address = ThinNeo.Helper.GetAddressFromPublicKey(WebBrowser.GUITool.pubkey);
                            localStorage.setItem("prikey", WebBrowser.GUITool.prikey);
                            localStorage.setItem("address", WebBrowser.GUITool.address);
                            WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.MainView);
                        }
                    });
                }
            };
            var createWallet = document.createElement("a");
            uploadFiles.appendChild(createWallet);
            createWallet.textContent = "创建钱包>>";
            createWallet.onclick = () => {
                WebBrowser.WalletView.show(div);
            };
            createWallet.className = "create-wallet";
            var wallet;
            var reader = new FileReader();
            reader.onload = (e) => {
                var walletstr = reader.result;
                wallet = new ThinNeo.nep6wallet();
                wallet.fromJsonStr(walletstr);
            };
            file.onchange = (ev) => {
                if (file.files.length > 0)
                    if (file.files[0].name.includes(".json")) {
                        putIn.textContent = file.files[0].name.substr(0, 6) + "...*.json";
                        fileTip.textContent = '';
                        reader.readAsText(file.files[0]);
                    }
            };
        }
    }
    WebBrowser.LoginView = LoginView;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../tools/wwwtool.ts"/>
/// <reference path="../tools/AppChainTool.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
var WebBrowser;
/// <reference path="../tools/wwwtool.ts"/>
/// <reference path="../tools/AppChainTool.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
(function (WebBrowser) {
    class Test {
        static getTransaction(s) {
            var tran = new ThinNeo.ZoroTransaction();
            tran.type = ThinNeo.ZoroTransactionType.InvocationTransaction;
            tran.extdata = new ThinNeo.ZoroInvokeTransData();
            var steam = new Neo.IO.MemoryStream(s.hexToBytes());
            var buffer = new Neo.IO.BinaryReader(steam);
            tran.Deserialize(buffer);
            console.log(tran.GetHash().reverse().toHexString());
        }
        static ZoroTransfer() {
            return __awaiter(this, void 0, void 0, function* () {
                var bcp = "0000000000000000000000000000000000000001";
                var chainHash = "";
                var wif = "L4ooZWvkj6QM9AjPREmF2SZZFYgEFAxWPzYJY6jdr4XJNx62Smbf";
                var targetwif = "L17Cq1FEbZJ8bc8Y8HcqVCgxsNpWY6LHDoau9DBD98m8vtGcVpuQ";
                var prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
                var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
                // var address = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(pubkey);
                // var addr = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
                //address = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress("AWN6jngST5ytpNnY1dhBQG7QHd7V8SqSCp");
                var sb = new ThinNeo.ScriptBuilder();
                var a = [];
                a.push("(hex160)" + bcp);
                //a.push("(hex160)" + address.reverse().toHexString());
                a.push("(addr)AWN6jngST5ytpNnY1dhBQG7QHd7V8SqSCp");
                sb.EmitParamJson(a);
                // sb.EmitPushBytes(address);
                // sb.EmitPushBytes(this.getUint160(bcp));           
                sb.EmitPushString("BalanceOf");
                sb.EmitSysCall("Zoro.NativeNEP5.Call");
                var data = sb.ToArray();
                var scriptPublish = data.toHexString();
                var array = [];
                array.push(chainHash);
                array.push(scriptPublish);
                var postdata = WebBrowser.WWW.makeZoroRpcPostBody("invokescript", array);
                var result = yield fetch(WebBrowser.WWW.api, { "method": "post", "body": JSON.stringify(postdata) });
                var json = yield result.json();
                alert(JSON.stringify(json));
            });
        }
        static Transfer() {
            return __awaiter(this, void 0, void 0, function* () {
                var bcp = "0000000000000000000000000000000000000001";
                var chainHash = "";
                var wif = "L4ooZWvkj6QM9AjPREmF2SZZFYgEFAxWPzYJY6jdr4XJNx62Smbf";
                var targetwif = "L17Cq1FEbZJ8bc8Y8HcqVCgxsNpWY6LHDoau9DBD98m8vtGcVpuQ";
                let scriptHash = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(wif)));
                var targetScriptHash = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(targetwif)));
                var sb = new ThinNeo.ScriptBuilder();
                sb.EmitPushBytes(this.getUint160(bcp));
                sb.EmitPushString("Decimals");
                sb.EmitSysCall("Zoro.NativeNEP5.Call");
                var data = sb.ToArray();
                var scriptPublish = data.toHexString();
                var array = [];
                array.push(chainHash);
                array.push(scriptPublish);
                var json = yield WebBrowser.WWW.rpc_invokeScript(array);
                var decimals = parseInt(json["stack"][0]["value"]);
                var value = 1;
                value = 1 * Math.pow(10, decimals);
                // sb = new ThinNeo.ScriptBuilder();
                // sb.EmitPushNumber(new Neo.BigInteger(value));
                // sb.EmitPushBytes(ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress("AWN6jngST5ytpNnY1dhBQG7QHd7V8SqSCp"));
                // //sb.EmitPushBytes(targetScriptHash);
                // sb.EmitPushBytes(scriptHash);           
                // sb.EmitPushBytes(this.getUint160(bcp));
                // sb.EmitPushString("Transfer");
                // sb.EmitSysCall("Zoro.NativeNEP5.Call");
                sb = new ThinNeo.ScriptBuilder();
                array = [];
                array.push("(addr)AcQLYjGbQU2bEQ8RKFXUcf8XvromfUQodq");
                array.push("(addr)AbN2K2trYzgx8WMg2H7U7JHH6RQVzz2fnx");
                array.push("(bytes)f8c86f9cfaade7d2863403b706497caaba47f633598fd684cf71dc1546a87e02");
                sb.EmitParamJson(array);
                sb.EmitPushString("exchange");
                sb.EmitAppCall("7e465b65c8ba9bd255ba93947732502e30985007".hexToBytes().reverse());
                scriptPublish = sb.ToArray().toHexString();
                array = [];
                array.push(chainHash);
                array.push(scriptPublish);
                this.makeTransaction(sb.ToArray(), wif, Neo.Fixed8.One);
            });
        }
        static makeTransaction(script, wif, gasPrice) {
            return __awaiter(this, void 0, void 0, function* () {
                var chainHash = "";
                var rawdata = this.getTransactionString(script, wif, Neo.Fixed8.Zero, Neo.Fixed8.One);
                this.getTransaction(rawdata);
                return;
                var postRawArray = [];
                postRawArray.push(chainHash);
                postRawArray.push(rawdata);
                var gaspostdata = WebBrowser.WWW.makeZoroRpcPostBody("estimategas", postRawArray);
                var result = yield fetch("http://localhost:59908/api/testnet", { "method": "post", "body": JSON.stringify(gaspostdata) });
                var json = yield result.json();
                var estimategas = json["result"][0]["gas"];
                estimategas = Neo.Fixed8.parse(estimategas + "");
                var rawdata = this.getTransactionString(script, wif, estimategas, Neo.Fixed8.One);
                var postRawArray = [];
                postRawArray.push(chainHash);
                postRawArray.push(rawdata);
                var postdata = WebBrowser.WWW.makeZoroRpcPostBody("sendrawtransaction", postRawArray);
                var result = yield fetch("http://localhost:59908/api/testnet", { "method": "post", "body": JSON.stringify(postdata) });
                var json = yield result.json();
                var postResult1 = json;
            });
        }
        static getTransactionString(script, wif, gasLimit, gasPrice) {
            var exData = new ThinNeo.ZoroInvokeTransData();
            exData.gasLimit = gasLimit;
            exData.gasPrice = gasPrice;
            exData.script = script;
            let scriptHash = ThinNeo.Helper.GetPublicKeyScriptHashFromPublicKey(ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(wif)));
            var tran = new ThinNeo.ZoroTransaction();
            tran.type = ThinNeo.ZoroTransactionType.InvocationTransaction;
            tran.version = 0;
            tran.nonce = ThinNeo.ZoroTransaction.GetNonce();
            tran.Account = scriptHash;
            tran.attributes = [];
            tran.extdata = exData;
            console.log("gasLimit = " + gasLimit);
            console.log("gasPrice = " + gasPrice);
            console.log("scriptHash = " + scriptHash);
            var msg = tran.GetMessage();
            var signdata = ThinNeo.Helper.Sign(msg, ThinNeo.Helper.GetPrivateKeyFromWIF(wif));
            tran.AddWitness(signdata, ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(wif)), ThinNeo.Helper.GetAddressFromPublicKey(ThinNeo.Helper.GetPublicKeyFromPrivateKey(ThinNeo.Helper.GetPrivateKeyFromWIF(wif))));
            var data = tran.GetRawData();
            alert("txid=" + tran.GetHash().reverse().toHexString());
            return data.toHexString();
        }
        static getUint160(value) {
            if (value == null) {
                throw "err";
            }
            if (value.startsWith("0x")) {
                value = value.substring(2);
            }
            if (value.length != 40) {
                throw "err";
            }
            return value.hexToBytes().reverse();
        }
    }
    WebBrowser.Test = Test;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./Base.ts"/>
/// <reference path="./GUIRoute.ts"/>
/// <reference path="./LoginView.ts"/>
/// <reference path="../tools/Test.ts"/>
var WebBrowser;
/// <reference path="./Base.ts"/>
/// <reference path="./GUIRoute.ts"/>
/// <reference path="./LoginView.ts"/>
/// <reference path="../tools/Test.ts"/>
(function (WebBrowser) {
    class GUI_Login {
        constructor(div) {
            this.div = div;
        }
        showUI() {
            //Test.ZoroTransfer();
            //Test.Transfer();
            if (localStorage.getItem("prikey")) {
                WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.MainView);
            }
            else
                this.login();
        }
        hideUI() {
        }
        login() {
            if (this.div.firstChild)
                this.div.removeChild(this.div.firstChild);
            this.div.className = "wallet-bg";
            var background = document.createElement('div');
            this.div.appendChild(background);
            var messagebackground = document.createElement('div');
            background.appendChild(messagebackground);
            messagebackground.className = "message-bg";
            var titleSpan = document.createElement('span');
            titleSpan.textContent = "最安全的资产管理";
            messagebackground.appendChild(titleSpan);
            titleSpan.className = "title-font";
            var hr = document.createElement('hr');
            messagebackground.appendChild(hr);
            hr.className = "login-hr";
            var messageSpan = document.createElement('span');
            messageSpan.textContent = "为全世界，打造最便捷，最安全的虚拟物品创作，购买和销售方式适用于交易游戏代码和视频游戏皮肤等物品或电子产品等物品的任何人。";
            messagebackground.appendChild(messageSpan);
            messageSpan.className = "value-font";
            WebBrowser.LoginView.show(background);
        }
    }
    WebBrowser.GUI_Login = GUI_Login;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class DownView {
        constructor() {
        }
        static show(div, url, walletName) {
            if (div.children.length > 1)
                div.removeChild(div.lastChild);
            var loginbackground = document.createElement('div');
            div.appendChild(loginbackground);
            loginbackground.className = "login-bg";
            var name = document.createElement('h3');
            name.textContent = "您的钱包文件已创建";
            loginbackground.appendChild(name);
            name.className = "login-title";
            var uploadFiles = document.createElement("div"); //外层div
            loginbackground.appendChild(uploadFiles);
            uploadFiles.className = "upload-file";
            var text1 = document.createElement('h5');
            text1.textContent = "点击“下载”来保存您的文件";
            text1.style.color = "#eeeeee";
            text1.style.fontSize = "14px";
            text1.style.padding = "5px 0";
            uploadFiles.appendChild(text1);
            var text2 = document.createElement('h5');
            text2.textContent = "不要丢失！如果丢失，将无法恢复";
            text2.style.color = "#eeeeee";
            text2.style.fontSize = "14px";
            text2.style.paddingBottom = "50px";
            uploadFiles.appendChild(text2);
            var downLoad = document.createElement('button');
            uploadFiles.appendChild(downLoad);
            downLoad.textContent = "下载文件";
            downLoad.className = "btn-commit";
            var b = true;
            downLoad.onclick = () => {
                var downurl = document.createElement("a");
                loginbackground.appendChild(downurl);
                downurl.download = walletName + ".json";
                downurl.href = url;
                if (b) {
                    downurl.click();
                    b = false;
                }
                WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.MainView);
            };
            var returnLogin = document.createElement('a');
            uploadFiles.appendChild(returnLogin);
            returnLogin.textContent = "返回登录>>";
            returnLogin.className = "create-wallet";
            returnLogin.onclick = () => {
                WebBrowser.LoginView.show(div);
            };
        }
    }
    WebBrowser.DownView = DownView;
})(WebBrowser || (WebBrowser = {}));
///<reference path="./DownView.ts" />
var WebBrowser;
///<reference path="./DownView.ts" />
(function (WebBrowser) {
    class WalletView {
        constructor() {
        }
        static show(div) {
            if (div.children.length > 1)
                div.removeChild(div.lastChild);
            var loginbackground = document.createElement('div');
            div.appendChild(loginbackground);
            loginbackground.className = "login-bg";
            var name = document.createElement('h3');
            name.textContent = "创建您的钱包";
            loginbackground.appendChild(name);
            name.className = "login-title";
            var uploadFiles = document.createElement("div"); //外层div
            loginbackground.appendChild(uploadFiles);
            uploadFiles.className = "upload-file";
            var walletName = document.createElement("input");
            uploadFiles.appendChild(walletName);
            walletName.type = "text";
            walletName.placeholder = "输入钱包名";
            walletName.className = "password";
            var moneyTip = document.createElement("p");
            moneyTip.textContent = '*钱包名不能为空';
            uploadFiles.appendChild(moneyTip);
            moneyTip.className = "file-tip";
            var password = document.createElement("input");
            uploadFiles.appendChild(password);
            password.type = "password";
            password.placeholder = "输入密码";
            password.className = "password";
            //密码提示的
            var passwordTip = document.createElement("p");
            passwordTip.textContent = '*请输入密码';
            uploadFiles.appendChild(passwordTip);
            passwordTip.className = "file-tip";
            var repassword = document.createElement("input");
            uploadFiles.appendChild(repassword);
            repassword.type = "password";
            repassword.placeholder = "重复密码";
            repassword.className = "password";
            //重复密码
            var repeatTip = document.createElement("p");
            repeatTip.textContent = '*请输入相同的密码';
            uploadFiles.appendChild(repeatTip);
            repeatTip.className = "file-tip";
            var create = document.createElement('button');
            uploadFiles.appendChild(create);
            create.textContent = "新建";
            create.className = "btn-commit";
            create.onclick = () => {
                try {
                    var array = new Uint8Array(32);
                    var key = Neo.Cryptography.RandomNumberGenerator.getRandomValues(array);
                    var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(key);
                    var addr = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
                    var wallet = new ThinNeo.nep6wallet();
                    wallet.scrypt = new ThinNeo.nep6ScryptParameters();
                    wallet.scrypt.N = 16384;
                    wallet.scrypt.r = 8;
                    wallet.scrypt.p = 8;
                    wallet.accounts = [];
                    wallet.accounts[0] = new ThinNeo.nep6account();
                    wallet.accounts[0].address = addr;
                    ThinNeo.Helper.GetNep2FromPrivateKey(key, repassword.value, wallet.scrypt.N, wallet.scrypt.r, wallet.scrypt.p, (info, result) => {
                        if (info == "finish") {
                            wallet.accounts[0].nep2key = result;
                            wallet.accounts[0].contract = new ThinNeo.contract();
                            WebBrowser.GUITool.prikey = key;
                            WebBrowser.GUITool.pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(key);
                            WebBrowser.GUITool.address = ThinNeo.Helper.GetAddressFromPublicKey(WebBrowser.GUITool.pubkey);
                            wallet.accounts[0].contract.script = ThinNeo.Helper.GetAddressCheckScriptFromPublicKey(pubkey).toHexString();
                            var jsonstr = JSON.stringify(wallet.toJson());
                            var blob = new Blob([ThinNeo.Helper.String2Bytes(jsonstr)]);
                            var downLoadUrl = URL.createObjectURL(blob);
                            WebBrowser.DownView.show(div, downLoadUrl, walletName.value);
                        }
                    });
                }
                catch (e) {
                }
            };
            var returnLogin = document.createElement('a');
            uploadFiles.appendChild(returnLogin);
            returnLogin.textContent = "返回登录>>";
            returnLogin.className = "create-wallet";
            returnLogin.onclick = () => {
                WebBrowser.LoginView.show(div);
            };
        }
    }
    WebBrowser.WalletView = WalletView;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../tools/wwwtool.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
var WebBrowser;
/// <reference path="../tools/wwwtool.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
(function (WebBrowser) {
    class CSSTool {
        static loginbackground_set(element) {
            element.style.width = "100%";
            element.style.backgroundImage = "url(./img/mainbg.jpg)";
            element.style.textAlign = "center";
            element.style.backgroundRepeat = "round";
            element.style.marginTop = "20px";
        }
        static messagebg_set(element) {
            element.style.display = "block";
            element.style.width = "440px";
            element.style.cssFloat = "left";
            element.style.marginLeft = "50px";
            element.style.marginTop = "80px";
        }
        static loginhr_set(element) {
            element.style.display = "block";
            element.style.width = "240px";
            element.style.marginLeft = "0px";
        }
        static titleFont_set(element) {
            element.style.display = "block";
            element.style.width = "100%";
            element.style.fontSize = "30px";
            element.style.textAlign = "left";
            element.style.fontWeight = "bold";
            element.style.color = "#fff";
        }
        static valueFont_set(element) {
            element.style.display = "block";
            element.style.width = "100%";
            element.style.fontSize = "18px";
            element.style.textAlign = "left";
            element.style.color = "#fff";
        }
        static loginbg_set(element) {
            element.style.display = "inline-block";
            element.style.width = "340px";
            element.style.backgroundColor = "rgb(51,53,66)";
            element.style.borderRadius = "25px";
            element.style.margin = "50px";
        }
        //标题
        static name_set(element) {
            element.style.color = "#ffffff";
            element.style.fontSize = "15px";
            element.style.borderBottom = "1px solid black";
            element.style.lineHeight = "60px";
        }
        //处理浮动的
        static handle_set(element) {
            element.style.textAlign = 'left';
            element.style.width = '100%';
            element.style.overflow = 'hidden';
            element.style.margin = '15px 0';
        }
        //功能部分
        static uploadFiles_set(element) {
            element.style.width = "300px";
            element.style.margin = "0 auto";
            element.style.padding = "40px 0 60px 0";
        }
        //上传文件修饰
        static firstFile_set(element) {
            element.style.width = "100%";
            element.style.backgroundColor = "black";
            element.style.color = "#ffffff";
            element.style.padding = "10px 0";
            element.style.cursor = "pointer";
            element.style.position = "relative";
        }
        //上传file标签修改
        static file_set(element) {
            element.style.width = "100%";
            element.style.position = "absolute";
            element.style.opacity = "0";
            element.style.cursor = "pointer";
            element.style.top = "8px";
        }
        //上传文字提示  密码提示
        static fileTip_set(element) {
            element.style.color = "red";
            element.style.textAlign = "left";
            element.style.height = "30px";
            element.style.lineHeight = "30px";
            element.style.marginBottom = "0px";
        }
        //密码输入
        static password_set(element) {
            element.style.width = "100%";
            element.style.border = "none";
            element.style.outline = "none";
            element.style.backgroundColor = "#CDCEE0";
            element.style.height = "45px";
            element.style.textAlign = "center";
        }
        //登录按钮
        static btn_set(element) {
            element.style.width = "100%";
            element.style.border = "none";
            element.style.outline = "none";
            element.style.backgroundColor = "#C8AB73";
            element.style.borderRadius = "10px";
            element.style.padding = "15px 0";
            element.style.fontSize = "15px";
            element.style.fontWeight = "bold";
        }
        //创建钱包的
        static createWallet_set(element) {
            element.style.width = "100%";
            element.style.border = "1px solid #C8AB73";
            element.style.outline = "none";
            element.style.backgroundColor = "#333542";
            element.style.borderRadius = "10px";
            element.style.padding = "15px 0";
            element.style.fontSize = "15px";
            element.style.fontWeight = "bold";
            element.style.color = "#C8AB73";
            element.style.marginTop = "15px";
        }
        //资产转账等等标题
        static title_set(element) {
            element.style.margin = '0 auto';
            element.style.overflow = 'hidden';
            element.style.background = "#3D3E4C";
        }
        //资产转账等等标题按钮
        static titleBtn_set(element) {
            element.style.cssFloat = 'left';
            element.style.color = "white";
            element.style.padding = '5px 30px';
            element.style.border = "none";
            element.style.outline = "none";
        }
        //资产左边的标题
        static assets_setname(element) {
            element.style.color = '#F2F2F2';
            element.style.fontSize = '18px';
            element.style.padding = '10px 0';
            element.style.borderBottom = '1px solid #BFBFBF';
        }
        //资产左边
        static zoroChain_set(element) {
            element.style.cssFloat = "left";
            element.style.width = '400px';
            element.style.textAlign = 'center';
            element.style.border = '1px solid #BFBFBF';
            element.style.borderRadius = '3px';
            element.style.background = '#3D3E4C';
            element.style.marginTop = '50px';
        }
        //列表
        static BCP_set(element) {
            element.style.color = "#F2F2F2";
            element.style.overflow = 'hidden';
            element.style.padding = '10px 15px';
            element.style.borderBottom = '1px solid #BFBFBF';
        }
        //左浮动
        static flowLeft_set(element) {
            element.style.cssFloat = "left";
        }
        //右浮动
        static flowRight_set(element) {
            element.style.cssFloat = "right";
        }
        //转账模块
        static transfer_set(element) {
            element.style.width = "600px";
            element.style.height = "50px";
            element.style.background = '#3C3E4B';
            element.style.margin = '50px auto';
            element.style.marginBottom = '0px';
            element.style.border = '1px solid #3C3E4B';
        }
        //转账三个按钮
        static transfer_btn(element) {
            element.style.width = "33.33333333333333%";
            element.style.textAlign = "center";
            element.style.lineHeight = '45px';
            element.style.background = '#333542';
            element.style.border = 'none';
            element.style.outline = 'none';
            element.style.color = "white";
        }
        //转账子模块
        static normalbackground_set(element) {
            element.style.width = "600px";
            element.style.background = "#3C3E4B";
            element.style.margin = '0 auto';
            element.style.padding = '25px 45px';
        }
        //下拉选择框
        static select_set(element) {
            element.style.border = '1px solid #CDCEE0';
            element.style.background = '#3C3E4B';
            element.style.color = 'white';
            element.style.width = '150px';
            element.style.padding = '5px 15px';
        }
        // 转账输入框
        static addr_set(element) {
            element.style.marginLeft = '20px';
            element.style.width = '90%';
            element.style.height = '30px';
            element.style.background = '#CDCEE0';
            element.style.textAlign = 'left';
            element.style.padding = '10px 15px';
            element.style.border = 'none';
            element.style.outline = 'none';
        }
        // 刷新按钮
        static break_set(element) {
            element.style.border = 'none';
            element.style.outline = 'none';
            element.style.color = 'white';
            element.style.background = '#3C3E4B';
        }
        //addMethod  =按钮  左边的
        static addMethod_btn(element) {
            element.style.border = 'none';
            element.style.outline = 'none';
            element.style.background = '#C8AB73';
            element.style.padding = '10px 15px';
            element.style.borderRadius = '5px';
            element.style.marginLeft = '125px';
        }
        //addMethod  =按钮  右边的
        static subParams_btn(element) {
            element.style.border = 'none';
            element.style.outline = 'none';
            element.style.background = '#C8AB73';
            element.style.padding = '10px 15px';
            element.style.borderRadius = '5px';
            element.style.marginRight = '125px';
        }
    }
    WebBrowser.CSSTool = CSSTool;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./Base.ts"/>
/// <reference path="../tools/CSSTools.ts"/>
var WebBrowser;
/// <reference path="./Base.ts"/>
/// <reference path="../tools/CSSTools.ts"/>
(function (WebBrowser) {
    class GUI_Asset {
        constructor(div) {
            this.div = div;
        }
        showUI() {
            this.mainAsset(this.div);
        }
        hideUI() {
        }
        mainAsset(div) {
            return __awaiter(this, void 0, void 0, function* () {
                if (div.firstChild)
                    div.removeChild(div.firstChild);
                var zoroChainBackGround = document.createElement('div');
                zoroChainBackGround.style.width = "100%";
                zoroChainBackGround.style.margin = '0 auto';
                div.appendChild(zoroChainBackGround);
                //zoro
                var zoroChain = document.createElement('div');
                zoroChain.className = "main-view-title";
                zoroChainBackGround.appendChild(zoroChain);
                var name = document.createElement('div');
                name.textContent = 'ZORO CHAIN';
                name.className = "textcss";
                zoroChain.appendChild(name);
                var img = document.createElement('img');
                img.src = "./img/height.png";
                zoroChain.appendChild(img);
                img.className = "title-img";
                var height = document.createElement('span');
                height.textContent = (yield WebBrowser.WWW.api_getZoroHeight(WebBrowser.AppChainTool.RootChain)) + "";
                zoroChain.appendChild(height);
                height.className = "height-num";
                var itemsbg = document.createElement('div');
                itemsbg.className = "asset-item-bg";
                zoroChainBackGround.appendChild(itemsbg);
                var balance = yield WebBrowser.WWW.api_getBalance(localStorage.address);
                if (balance)
                    for (var i = 0; i < balance.length; i++)
                        this.additem(itemsbg, balance[i].symbol, balance[i].balance);
                //NEO
                var zoroChain = document.createElement('div');
                zoroChain.className = "main-view-title";
                zoroChainBackGround.appendChild(zoroChain);
                var name = document.createElement('div');
                name.textContent = 'NEO CHAIN';
                name.className = "textcss";
                zoroChain.appendChild(name);
                var img = document.createElement('img');
                img.src = "./img/height.png";
                zoroChain.appendChild(img);
                img.className = "title-img";
                var height = document.createElement('span');
                height.textContent = (yield WebBrowser.WWW.api_getNEOHeight()) + "";
                zoroChain.appendChild(height);
                height.className = "height-num";
                var itemsbg = document.createElement('div');
                itemsbg.className = "asset-item-bg";
                zoroChainBackGround.appendChild(itemsbg);
                var utxo = yield WebBrowser.WWW.rpc_getUTXO(localStorage.address);
                this.additem(itemsbg, "NEO", WebBrowser.AppChainTool.NEO.toFixed(8).toString());
                this.additem(itemsbg, "GAS", WebBrowser.AppChainTool.GAS.toFixed(8).toString());
                var cneo = yield WebBrowser.WWW.rpc_getBalanceOf(WebBrowser.AppChainTool.CGAS, localStorage.address);
                this.additem(itemsbg, "CNEO", cneo);
                var cgas = yield WebBrowser.WWW.rpc_getBalanceOf(WebBrowser.AppChainTool.CGAS, localStorage.address);
                this.additem(itemsbg, "CGAS", cgas);
                var bcp = yield WebBrowser.WWW.rpc_getBalanceOf(WebBrowser.AppChainTool.neoBCP, localStorage.address);
                this.additem(itemsbg, "BCP", bcp);
            });
        }
        additem(itemsbg, nametext, numtext) {
            var itembg = document.createElement('div');
            itembg.className = "item-bg";
            itemsbg.appendChild(itembg);
            var name = document.createElement('span');
            name.textContent = nametext;
            name.className = "item-name";
            itembg.appendChild(name);
            var num = document.createElement('span');
            num.textContent = numtext;
            num.className = "item-num";
            itembg.appendChild(num);
        }
    }
    WebBrowser.GUI_Asset = GUI_Asset;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./Base.ts"/>
/// <reference path="../tools/CSSTools.ts"/>
var WebBrowser;
/// <reference path="./Base.ts"/>
/// <reference path="../tools/CSSTools.ts"/>
(function (WebBrowser) {
    class GUI_Charge {
        constructor(div) {
            this.div = div;
        }
        showUI() {
            this.mainCharge(this.div);
            WebBrowser.GUI_Route.instance.hideUI(WebBrowser.PageName.Title);
        }
        hideUI() {
        }
        mainCharge(div) {
            if (div.firstChild)
                div.removeChild(div.firstChild);
            var chargeBackGround = document.createElement('div');
            chargeBackGround.style.width = "100%";
            chargeBackGround.style.cssFloat = "left";
            div.appendChild(chargeBackGround);
            var upBackGround = document.createElement('div');
            upBackGround.style.width = "100%";
            upBackGround.style.cssFloat = "left";
            chargeBackGround.appendChild(upBackGround);
            var downBackGround = document.createElement('div');
            downBackGround.style.width = "100%";
            downBackGround.style.cssFloat = "left";
            chargeBackGround.appendChild(downBackGround);
            var transfer = document.createElement("div");
            transfer.className = "charge-title-bg";
            upBackGround.appendChild(transfer);
            var normalcharge = document.createElement("button");
            transfer.appendChild(normalcharge);
            normalcharge.className = "charge-title-item";
            normalcharge.textContent = "普通转账";
            normalcharge.onclick = () => {
                this.normalCharge(downBackGround);
                var item = document.querySelectorAll('.charge-title-item');
                for (var i = 0; i < item.length; i++) {
                    item[i].className = "charge-title-item";
                }
                normalcharge.className = "charge-title-item charge-on";
            };
            normalcharge.click();
            var chainCharge = document.createElement("button");
            transfer.appendChild(chainCharge);
            chainCharge.className = "charge-title-item";
            chainCharge.textContent = "跨链转账";
            chainCharge.onclick = () => {
                this.chainCharge(downBackGround);
                var item = document.querySelectorAll('.charge-title-item');
                for (var i = 0; i < item.length; i++) {
                    item[i].className = "charge-title-item";
                }
                chainCharge.className = "charge-title-item charge-on";
            };
        }
        singleCharge(div) {
            return __awaiter(this, void 0, void 0, function* () {
                if (div.firstChild)
                    div.removeChild(div.firstChild);
                var singlebackground = document.createElement('div');
                WebBrowser.CSSTool.normalbackground_set(singlebackground);
                div.appendChild(singlebackground);
                var top = document.createElement("div");
                top.style.width = '100%';
                top.style.overflow = 'hidden';
                top.style.margin = '15px 0';
                singlebackground.appendChild(top);
                var asset = document.createElement('span');
                top.appendChild(asset);
                asset.style.color = "#eeeeee";
                asset.textContent = "链名";
                WebBrowser.CSSTool.flowLeft_set(asset);
                var select = document.createElement("select");
                top.appendChild(select);
                select.style.marginLeft = '20px';
                WebBrowser.CSSTool.select_set(select);
                WebBrowser.CSSTool.flowLeft_set(select);
                WebBrowser.AppChainTool.getChain(select);
                var balance = document.createElement("div");
                WebBrowser.CSSTool.flowRight_set(balance);
                top.appendChild(balance);
                var coin = document.createElement('span');
                balance.appendChild(coin);
                coin.style.paddingRight = "15px";
                coin.style.color = "#eeeeee";
                coin.textContent = "余额";
                var coinNum = document.createElement('span');
                balance.appendChild(coinNum);
                coinNum.style.color = "#C8AB73";
                coinNum.textContent = yield WebBrowser.CoinTool.getGold("default", WebBrowser.GUITool.address, "NEO");
                select.onchange = (e) => __awaiter(this, void 0, void 0, function* () {
                    coinNum.textContent = yield WebBrowser.CoinTool.getGold("default", WebBrowser.GUITool.address, select.childNodes[select.selectedIndex].value);
                });
                var button = document.createElement("button");
                balance.appendChild(button);
                button.textContent = "刷新";
                WebBrowser.CSSTool.break_set(button);
                button.onclick = () => __awaiter(this, void 0, void 0, function* () {
                    coinNum.textContent = yield WebBrowser.CoinTool.getGold("default", WebBrowser.GUITool.address, select.childNodes[select.selectedIndex].value);
                });
                var address = document.createElement("div");
                address.style.textAlign = 'left';
                address.style.margin = '20px 0';
                singlebackground.appendChild(address);
                var addrText = document.createElement('span');
                address.appendChild(addrText);
                addrText.style.color = "#eeeeee";
                addrText.textContent = "地址";
                var addr = document.createElement('input');
                address.appendChild(addr);
                WebBrowser.CSSTool.password_set(addr);
                addr.placeholder = '请输入地址';
                WebBrowser.CSSTool.addr_set(addr);
                addrText.appendChild(addr);
                var editMoney = document.createElement("div");
                editMoney.style.textAlign = 'left';
                editMoney.style.margin = '20px 0';
                singlebackground.appendChild(editMoney);
                var goldText = document.createElement('span');
                editMoney.appendChild(goldText);
                goldText.style.color = "#eeeeee";
                goldText.textContent = "金额";
                var gold = document.createElement('input');
                address.appendChild(gold);
                WebBrowser.CSSTool.password_set(gold);
                gold.placeholder = '请输入金额';
                WebBrowser.CSSTool.addr_set(gold);
                editMoney.appendChild(gold);
                var btnSend = document.createElement('button');
                singlebackground.appendChild(btnSend);
                btnSend.textContent = "发送";
                WebBrowser.CSSTool.btn_set(btnSend);
                btnSend.style.width = '50%';
                btnSend.onclick = () => __awaiter(this, void 0, void 0, function* () {
                    if (coinNum.textContent == "0")
                        return;
                    switch (select.childNodes[select.selectedIndex].value) {
                        case "NEO":
                            var utxo = yield WebBrowser.WWW.rpc_getUTXO(WebBrowser.GUITool.address);
                            return yield WebBrowser.AppChainTool.MakeInvokeTransaction(WebBrowser.CoinTool.getassets(utxo), WebBrowser.GUITool.address, addr.value, WebBrowser.AppChainTool.neoBCP, parseInt(gold.value), WebBrowser.GUITool.prikey, WebBrowser.GUITool.pubkey);
                        default:
                            return yield WebBrowser.AppChainTool.MakeZoroTransaction(WebBrowser.GUITool.address, addr.value, Number(gold.value), WebBrowser.AppChainTool.zoroBCP, WebBrowser.AppChainTool.zoroBCP, WebBrowser.GUITool.prikey, WebBrowser.GUITool.pubkey, select.childNodes[select.selectedIndex].value);
                    }
                });
            });
        }
        normalCharge(div) {
            return __awaiter(this, void 0, void 0, function* () {
                if (div.firstChild)
                    div.removeChild(div.firstChild);
                var normalbackground = document.createElement('div');
                WebBrowser.CSSTool.normalbackground_set(normalbackground);
                div.appendChild(normalbackground);
                var up = document.createElement('div');
                up.style.width = '100%';
                up.style.overflow = 'hidden';
                up.style.margin = '15px 0';
                normalbackground.appendChild(up);
                var asset = document.createElement('span');
                up.appendChild(asset);
                asset.style.color = "#eeeeee";
                asset.textContent = "资产";
                WebBrowser.CSSTool.flowLeft_set(asset);
                var select = WebBrowser.CoinTool.ZoroAsset();
                select.style.marginLeft = '20px';
                $(select).prepend("<option value=''>请选择</option>").val('');
                WebBrowser.CSSTool.select_set(select);
                WebBrowser.CSSTool.flowLeft_set(select);
                up.appendChild(select);
                var balance = document.createElement("div");
                WebBrowser.CSSTool.flowRight_set(balance);
                up.appendChild(balance);
                var coin = document.createElement('span');
                balance.appendChild(coin);
                coin.style.paddingRight = '15px';
                coin.style.color = "#eeeeee";
                coin.textContent = "余额";
                var coinNum = document.createElement('span');
                balance.appendChild(coinNum);
                coinNum.style.color = "#C8AB73";
                coinNum.textContent = yield WebBrowser.CoinTool.getGold(select.childNodes[select.selectedIndex].value, WebBrowser.GUITool.address, WebBrowser.AppChainTool.RootChain);
                select.onchange = () => __awaiter(this, void 0, void 0, function* () {
                    coinNum.textContent = yield WebBrowser.CoinTool.getGold(select.childNodes[select.selectedIndex].value, WebBrowser.GUITool.address, WebBrowser.AppChainTool.RootChain);
                });
                var address = document.createElement("div");
                address.style.textAlign = 'left';
                address.style.margin = '20px 0';
                normalbackground.appendChild(address);
                var addrText = document.createElement('span');
                address.appendChild(addrText);
                addrText.style.color = "#eeeeee";
                addrText.textContent = "地址";
                var addr = document.createElement('input');
                WebBrowser.CSSTool.password_set(addr);
                addr.placeholder = '请输入地址或域名';
                WebBrowser.CSSTool.addr_set(addr);
                address.appendChild(addr);
                var editMoney = document.createElement("div");
                editMoney.style.textAlign = 'left';
                editMoney.style.margin = '20px 0';
                normalbackground.appendChild(editMoney);
                var goldText = document.createElement('span');
                editMoney.appendChild(goldText);
                goldText.style.color = "#eeeeee";
                goldText.textContent = "金额";
                var gold = document.createElement('input');
                WebBrowser.CSSTool.password_set(gold);
                gold.placeholder = '请输入金额';
                WebBrowser.CSSTool.addr_set(gold);
                editMoney.appendChild(gold);
                var btnSend = document.createElement('button');
                normalbackground.appendChild(btnSend);
                btnSend.textContent = "发送";
                WebBrowser.CSSTool.btn_set(btnSend);
                btnSend.style.width = '50%';
                btnSend.onclick = () => __awaiter(this, void 0, void 0, function* () {
                    if (coinNum.textContent == "0")
                        return;
                    switch (select.childNodes[select.selectedIndex].value) {
                        case "ZOROBCP":
                            return yield WebBrowser.AppChainTool.MakeZoroTransaction(WebBrowser.GUITool.address, addr.value, Number(gold.value), WebBrowser.AppChainTool.zoroBCP, WebBrowser.AppChainTool.zoroBCP, WebBrowser.GUITool.prikey, WebBrowser.GUITool.pubkey, WebBrowser.AppChainTool.RootChain);
                        case "NEOBCP":
                            var utxo = yield WebBrowser.WWW.rpc_getUTXO(WebBrowser.GUITool.address);
                            return yield WebBrowser.AppChainTool.MakeInvokeTransaction(WebBrowser.CoinTool.getassets(utxo), WebBrowser.GUITool.address, addr.value, WebBrowser.AppChainTool.neoBCP, parseInt(gold.value), WebBrowser.GUITool.prikey, WebBrowser.GUITool.pubkey);
                        case "NEO":
                            var utxo = yield WebBrowser.WWW.rpc_getUTXO(WebBrowser.GUITool.address);
                            return yield WebBrowser.AppChainTool.MakeTransaction(WebBrowser.CoinTool.getassets(utxo), addr.value, WebBrowser.AppChainTool.id_NEO, parseInt(gold.value), WebBrowser.GUITool.prikey, WebBrowser.GUITool.pubkey);
                        case "GAS":
                            var utxo = yield WebBrowser.WWW.rpc_getUTXO(WebBrowser.GUITool.address);
                            return yield WebBrowser.AppChainTool.MakeTransaction(WebBrowser.CoinTool.getassets(utxo), addr.value, WebBrowser.AppChainTool.id_GAS, parseInt(gold.value), WebBrowser.GUITool.prikey, WebBrowser.GUITool.pubkey);
                    }
                });
            });
        }
        chainCharge(div) {
            return __awaiter(this, void 0, void 0, function* () {
                if (div.firstChild)
                    div.removeChild(div.firstChild);
                var chainbackground = document.createElement('div');
                WebBrowser.CSSTool.normalbackground_set(chainbackground);
                div.appendChild(chainbackground);
                var top = document.createElement("div");
                top.style.width = '100%';
                top.style.overflow = 'hidden';
                top.style.margin = '15px 0';
                chainbackground.appendChild(top);
                var asset = document.createElement('span');
                top.appendChild(asset);
                asset.style.color = "#eeeeee";
                asset.textContent = "方法";
                WebBrowser.CSSTool.flowLeft_set(asset);
                var funcSelect = WebBrowser.CoinTool.ZoroFunction();
                funcSelect.style.marginLeft = '20px';
                top.appendChild(funcSelect);
                WebBrowser.CSSTool.flowLeft_set(funcSelect);
                WebBrowser.CSSTool.select_set(funcSelect);
                var center = document.createElement("div");
                center.style.width = '100%';
                center.style.overflow = 'hidden';
                center.style.margin = '15px 0';
                chainbackground.appendChild(center);
                var asset = document.createElement('span');
                center.appendChild(asset);
                asset.style.color = "#eeeeee";
                asset.textContent = "资产";
                WebBrowser.CSSTool.flowLeft_set(asset);
                var coinSelect = document.createElement('select');
                var sitem = document.createElement("option");
                WebBrowser.CSSTool.flowLeft_set(coinSelect);
                WebBrowser.CSSTool.select_set(coinSelect);
                coinSelect.style.marginLeft = '20px';
                sitem.text = "BCP";
                sitem.value = "BCP";
                coinSelect.appendChild(sitem);
                center.appendChild(coinSelect);
                var balance = document.createElement("div");
                WebBrowser.CSSTool.flowRight_set(balance);
                center.appendChild(balance);
                var coin = document.createElement('span');
                balance.appendChild(coin);
                coin.style.paddingRight = '15px';
                coin.style.color = "#eeeeee";
                coin.textContent = "余额";
                var coinNum = document.createElement('span');
                balance.appendChild(coinNum);
                coinNum.style.color = "#C8AB73";
                coinNum.textContent = yield WebBrowser.CoinTool.getGold(funcSelect.childNodes[funcSelect.selectedIndex].value, WebBrowser.GUITool.address, WebBrowser.GUITool.chainHash);
                var editMoney = document.createElement("div");
                editMoney.style.textAlign = 'left';
                editMoney.style.margin = '20px 0';
                chainbackground.appendChild(editMoney);
                var goldText = document.createElement('span');
                editMoney.appendChild(goldText);
                goldText.style.color = "#eeeeee";
                goldText.textContent = "金额";
                var gold = document.createElement('input');
                WebBrowser.CSSTool.password_set(gold);
                gold.placeholder = '请输入金额';
                WebBrowser.CSSTool.addr_set(gold);
                editMoney.appendChild(gold);
                var btnSend = document.createElement('button');
                chainbackground.appendChild(btnSend);
                WebBrowser.CSSTool.btn_set(btnSend);
                btnSend.style.width = '50%';
                btnSend.textContent = "发送";
                btnSend.onclick = () => __awaiter(this, void 0, void 0, function* () {
                    if (coinNum.textContent == "0")
                        return;
                    switch (funcSelect.childNodes[funcSelect.selectedIndex].value) {
                        case "ZOROBCP":
                            return yield WebBrowser.AppChainTool.MakeZoroTransaction(WebBrowser.GUITool.address, "AUB7tMoKTzN33iVVqhz98vnT3KiG4bqx3f", Number(gold.value), WebBrowser.AppChainTool.Zorotransfer, WebBrowser.AppChainTool.Zorotransfer, WebBrowser.GUITool.prikey, WebBrowser.GUITool.pubkey, WebBrowser.GUITool.chainHash);
                        case "NEOBCP":
                            var utxo = yield WebBrowser.WWW.rpc_getUTXO(WebBrowser.GUITool.address);
                            return yield WebBrowser.AppChainTool.MakeInvokeTransaction(WebBrowser.CoinTool.getassets(utxo), WebBrowser.GUITool.address, "AMjCDmrbfcBxGPitHcdrUYRyPXD7DfC52c", WebBrowser.AppChainTool.Neotransfer, parseInt(gold.value), WebBrowser.GUITool.prikey, WebBrowser.GUITool.pubkey);
                    }
                });
                funcSelect.onchange = () => __awaiter(this, void 0, void 0, function* () {
                    coinNum.textContent = yield WebBrowser.CoinTool.getGold(funcSelect.childNodes[funcSelect.selectedIndex].value, WebBrowser.GUITool.address, WebBrowser.GUITool.chainHash);
                });
            });
        }
    }
    WebBrowser.GUI_Charge = GUI_Charge;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./Base.ts"/>
var WebBrowser;
/// <reference path="./Base.ts"/>
(function (WebBrowser) {
    class GUI_AppChain {
        constructor(div) {
            this.div = div;
        }
        showUI() {
            this.mainAppChain(this.div);
            WebBrowser.GUI_Route.instance.hideUI(WebBrowser.PageName.Title);
        }
        hideUI() {
        }
        mainAppChain(div) {
            if (div.firstChild)
                div.removeChild(div.firstChild);
            div.style.background = '#333542';
            div.style.position = 'relative';
            div.style.overflow = 'hidden';
            var appChainBackGround = document.createElement('div');
            WebBrowser.CSSTool.zoroChain_set(appChainBackGround);
            appChainBackGround.style.position = 'relative';
            appChainBackGround.style.width = '600px';
            $(appChainBackGround).css("left", ($(window).width() - $(appChainBackGround).width()) / 2);
            div.appendChild(appChainBackGround);
            var appChainText = document.createElement('div');
            WebBrowser.CSSTool.assets_setname(appChainText);
            appChainText.textContent = "应用链";
            appChainBackGround.appendChild(appChainText);
            var chain = document.createElement("div");
            chain.style.textAlign = 'left';
            chain.style.margin = '20px 0';
            chain.style.padding = '10px 45px';
            appChainBackGround.appendChild(chain);
            var appChainName = document.createElement('span');
            appChainName.style.color = "#eeeeee";
            appChainName.textContent = "应用链名称";
            chain.appendChild(appChainName);
            var name = document.createElement('input');
            name.placeholder = '请输入应用链名称';
            WebBrowser.CSSTool.addr_set(name);
            name.style.width = '80%';
            WebBrowser.CSSTool.flowRight_set(name);
            chain.appendChild(name);
            var firstInt = document.createElement("div");
            firstInt.style.textAlign = 'left';
            firstInt.style.margin = '20px 0';
            firstInt.style.padding = '10px 45px';
            appChainBackGround.appendChild(firstInt);
            var pubkeyList = document.createElement('span');
            pubkeyList.style.color = "#eeeeee";
            pubkeyList.textContent = "共识节点数量";
            firstInt.appendChild(pubkeyList);
            var pubkeyListNumber = document.createElement('input');
            pubkeyListNumber.type = "number";
            WebBrowser.CSSTool.addr_set(pubkeyListNumber);
            pubkeyListNumber.style.width = '80%';
            pubkeyListNumber.style.marginLeft = '';
            pubkeyListNumber.placeholder = '请输入共识节点数量';
            WebBrowser.CSSTool.flowRight_set(pubkeyListNumber);
            firstInt.appendChild(pubkeyListNumber);
            var pbutton = document.createElement("button");
            firstInt.appendChild(pbutton);
            pbutton.textContent = "确认";
            pbutton.style.position = 'absolute';
            pbutton.style.right = '0';
            pbutton.style.lineHeight = '30px';
            WebBrowser.CSSTool.break_set(pbutton);
            pbutton.onkeyup = () => {
                if (pbutton.value.length == 1) {
                    pbutton.value = pbutton.value.replace(/[^1-9]/g, '');
                }
                else {
                    pbutton.value = pbutton.value.replace(/\D/g, '');
                }
            };
            pbutton.onpaste = () => {
                if (pbutton.value.length == 1) {
                    pbutton.value = pbutton.value.replace(/[^1-9]/g, '');
                }
                else {
                    pbutton.value = pbutton.value.replace(/\D/g, '');
                }
            };
            var back = document.createElement("div");
            $(back).addClass("back");
            appChainBackGround.appendChild(back);
            var pubkey = [];
            pbutton.onclick = () => {
                if (parseInt(pubkeyListNumber.value) < 4) {
                    alert("it must be >= 4");
                    return;
                }
                while (back.children.length > 0) {
                    back.removeChild(back.firstChild);
                }
                for (let i = 0; i < parseInt(pubkeyListNumber.value); i++) {
                    var pkey1 = document.createElement('span'), pkeyDiv = document.createElement("div");
                    pkey1.style.color = "#eeeeee";
                    pkey1.textContent = "选择公钥" + (i + 1);
                    $(pkeyDiv).css({ "margin": "5px 0", "text-align": "left", "padding": "0 45px" });
                    pkeyDiv.appendChild(pkey1);
                    back.appendChild(pkeyDiv);
                    pubkey.push(WebBrowser.AppChainTool.createSelect(pkeyDiv, "pubkey", i + 1));
                    pubkey.forEach(element => {
                        element.style.border = '1px solid #CDCEE0';
                        element.style.background = '#3C3E4B';
                        element.style.color = 'white';
                        element.style.width = '150px';
                        element.style.padding = '5px 15px';
                        element.style.marginLeft = '15px';
                    });
                }
            };
            var lastInt = document.createElement("div");
            lastInt.style.textAlign = 'left';
            lastInt.style.margin = '20px 0';
            lastInt.style.padding = '10px 45px';
            appChainBackGround.appendChild(lastInt);
            var ipList = document.createElement('span');
            ipList.style.color = "#eeeeee";
            ipList.textContent = "种子节点数量";
            lastInt.appendChild(ipList);
            var ipListNumber = document.createElement('input');
            ipListNumber.type = "number";
            ipListNumber.placeholder = '请输入种子节点数量';
            WebBrowser.CSSTool.addr_set(ipListNumber);
            ipListNumber.style.width = '80%';
            ipListNumber.style.marginLeft = '';
            WebBrowser.CSSTool.flowRight_set(ipListNumber);
            lastInt.appendChild(ipListNumber);
            var ipbutton = document.createElement("button");
            lastInt.appendChild(ipbutton);
            ipbutton.style.position = 'absolute';
            ipbutton.style.right = '0';
            ipbutton.style.lineHeight = '30px';
            WebBrowser.CSSTool.break_set(ipbutton);
            ipbutton.textContent = "确认";
            ipbutton.onkeyup = () => {
                if (ipbutton.value.length == 1) {
                    ipbutton.value = ipbutton.value.replace(/[^1-9]/g, '');
                }
                else {
                    ipbutton.value = ipbutton.value.replace(/\D/g, '');
                }
            };
            ipbutton.onpaste = () => {
                if (ipbutton.value.length == 1) {
                    ipbutton.value = ipbutton.value.replace(/[^1-9]/g, '');
                }
                else {
                    ipbutton.value = ipbutton.value.replace(/\D/g, '');
                }
            };
            var backip = document.createElement("div");
            appChainBackGround.appendChild(backip);
            var ip = [];
            var port = [];
            ipbutton.onclick = () => {
                if (parseInt(ipListNumber.value) < 1) {
                    alert("it must be >= 1");
                    return;
                }
                while (backip.children.length > 0) {
                    backip.removeChild(backip.firstChild);
                }
                for (let i = 0; i < parseInt(ipListNumber.value); i++) {
                    var seed1 = document.createElement('span'), seedDiv = document.createElement("div");
                    seed1.style.color = "#eeeeee";
                    seed1.textContent = "选择种子地址" + (i + 1);
                    seedDiv.appendChild(seed1);
                    $(seedDiv).css({ "margin": "5px 0", "text-align": "left", "padding": "0 45px" });
                    backip.appendChild(seedDiv);
                    ip.push(WebBrowser.AppChainTool.createSelect(seedDiv, "ip", i + 1));
                    ip.forEach(element => {
                        element.style.border = '1px solid #CDCEE0';
                        element.style.background = '#3C3E4B';
                        element.style.color = 'white';
                        element.style.width = '150px';
                        element.style.padding = '5px 15px';
                        element.style.marginLeft = '15px';
                    });
                    let port1 = document.createElement('input');
                    port1.value = "15000";
                    WebBrowser.CSSTool.addr_set(port1);
                    port1.style.width = '230px';
                    seedDiv.appendChild(port1);
                    port.push(port1);
                }
            };
            var btnCreate = document.createElement('button');
            btnCreate.textContent = "创建";
            WebBrowser.CSSTool.btn_set(btnCreate);
            btnCreate.style.width = '50%';
            btnCreate.style.margin = '20px 0';
            btnCreate.onclick = () => {
                var listpubkey = [];
                for (let i = 0; i < parseInt(pubkeyListNumber.value); i++) {
                    listpubkey.push(pubkey[i].childNodes[pubkey[i].selectedIndex].value);
                }
                var listip = [];
                for (let i = 0; i < parseInt(ipListNumber.value); i++) {
                    listpubkey.push(ip[i].childNodes[ip[i].selectedIndex].value + ":" + port[i].value);
                }
                WebBrowser.AppChainTool.SendCreateAppChain(name.value, WebBrowser.GUITool.pubkey, listpubkey, listip, WebBrowser.GUITool.prikey, "0000000000000000000000000000000000000000");
            };
            appChainBackGround.appendChild(btnCreate);
        }
    }
    WebBrowser.GUI_AppChain = GUI_AppChain;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./Base.ts"/>
var WebBrowser;
/// <reference path="./Base.ts"/>
(function (WebBrowser) {
    class GUI_Contract {
        constructor(div) {
            this.div = div;
        }
        showUI() {
            this.mainContract(this.div);
            WebBrowser.GUI_Route.instance.hideUI(WebBrowser.PageName.Title);
        }
        hideUI() {
        }
        mainContract(div) {
            if (div.firstChild)
                div.removeChild(div.firstChild);
            div.style.overflow = 'hidden';
            div.style.background = '#333542';
            var contractBackGround = document.createElement('div');
            contractBackGround.style.width = "100%";
            contractBackGround.style.cssFloat = "left";
            div.appendChild(contractBackGround);
            var upBackGround = document.createElement('div');
            WebBrowser.CSSTool.transfer_set(upBackGround);
            contractBackGround.appendChild(upBackGround);
            var downBackGround = document.createElement('div');
            WebBrowser.CSSTool.normalbackground_set(downBackGround);
            downBackGround.style.overflow = 'hidden';
            contractBackGround.appendChild(downBackGround);
            var putContract = document.createElement("button");
            upBackGround.appendChild(putContract);
            putContract.textContent = "发布合约";
            upBackGround.appendChild(putContract);
            WebBrowser.CSSTool.transfer_btn(putContract);
            WebBrowser.CSSTool.flowLeft_set(putContract);
            putContract.style.borderTop = '1px solid #C8AB73';
            putContract.onclick = () => {
                this.putContract(downBackGround);
                $(putContract).css({ "borderTop": "1px solid #C8AB73", "background": '#3C3E4B' }).siblings().css({ "borderTop": "1px solid #333542", "background": "#333542" });
            };
            putContract.click();
            var useContract = document.createElement("button");
            upBackGround.appendChild(useContract);
            upBackGround.appendChild(useContract);
            WebBrowser.CSSTool.transfer_btn(useContract);
            WebBrowser.CSSTool.flowLeft_set(useContract);
            useContract.textContent = "调用合约";
            useContract.onclick = () => {
                this.useContract(downBackGround, true);
                $(useContract).css({ "borderTop": "1px solid #C8AB73", "background": '#3C3E4B' }).siblings().css({ "borderTop": "1px solid #333542", "background": "#333542" });
            };
            var invokeContract = document.createElement("button");
            upBackGround.appendChild(invokeContract);
            upBackGround.appendChild(invokeContract);
            WebBrowser.CSSTool.transfer_btn(invokeContract);
            WebBrowser.CSSTool.flowLeft_set(invokeContract);
            invokeContract.textContent = "预调用合约";
            invokeContract.onclick = () => {
                this.useContract(downBackGround, false);
                $(invokeContract).css({ "borderTop": "1px solid #C8AB73", "background": '#3C3E4B' }).siblings().css({ "borderTop": "1px solid #333542", "background": "#333542" });
            };
        }
        putContract(div) {
            if (div.firstChild)
                div.removeChild(div.firstChild);
            div.style.marginBottom = '30px';
            var contractBackGround = document.createElement('div');
            contractBackGround.style.width = "100%";
            div.appendChild(contractBackGround);
            var assetModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(assetModel);
            contractBackGround.appendChild(assetModel);
            var asset = document.createElement('span');
            assetModel.appendChild(asset);
            asset.style.color = "#eeeeee";
            asset.textContent = "链名";
            WebBrowser.CSSTool.flowLeft_set(asset);
            var select = document.createElement("select");
            select.style.marginLeft = '20px';
            WebBrowser.CSSTool.select_set(select);
            WebBrowser.CSSTool.flowLeft_set(select);
            assetModel.appendChild(select);
            WebBrowser.AppChainTool.getChain(select);
            var changeModel = document.createElement("div");
            contractBackGround.appendChild(changeModel);
            var chooseNative = document.createElement("div");
            contractBackGround.appendChild(chooseNative);
            var nativeBackGround = document.createElement('div');
            chooseNative.appendChild(nativeBackGround);
            var BoolNativeNep5 = null;
            select.onchange = () => {
                if (select.childNodes[select.selectedIndex].value != "NEO") {
                    if (chooseNative.firstChild)
                        chooseNative.removeChild(chooseNative.firstChild);
                    var nativeBackGround = document.createElement('div');
                    chooseNative.appendChild(nativeBackGround);
                    var nativeNep5_lable = document.createElement("div");
                    WebBrowser.CSSTool.handle_set(nativeNep5_lable);
                    $(nativeNep5_lable).addClass("switch-wrap");
                    nativeBackGround.appendChild(nativeNep5_lable);
                    var NativeNep5 = document.createElement('span');
                    NativeNep5.style.color = "#eeeeee";
                    NativeNep5.textContent = "NativeNep5";
                    nativeNep5_lable.appendChild(NativeNep5);
                    var lable_nativeNep5 = document.createElement("span");
                    WebBrowser.CSSTool.flowRight_set(lable_nativeNep5);
                    lable_nativeNep5.style.marginRight = '373px';
                    nativeNep5_lable.appendChild(lable_nativeNep5);
                    var BoolNativeNep5 = document.createElement('input');
                    $(BoolNativeNep5).attr("id", "switch_nativeNep5");
                    BoolNativeNep5.type = "checkbox";
                    BoolNativeNep5.checked = false;
                    lable_nativeNep5.appendChild(BoolNativeNep5);
                    var lable_s = document.createElement("label");
                    $(lable_s).attr("for", "switch_nativeNep5");
                    lable_nativeNep5.appendChild(lable_s);
                    // var nativeName = document.createElement('span') as HTMLSpanElement;
                    // nativeBackGround.appendChild(nativeName);
                    // nativeName.style.color = "#eeeeee";
                    // nativeName.textContent = "选择是否NativeNep5类型";
                    // BoolNativeNep5 = document.createElement('input') as HTMLInputElement;
                    // BoolNativeNep5.type = "checkbox";
                    // BoolNativeNep5.checked = false;
                    // nativeBackGround.appendChild(BoolNativeNep5);  
                    var nativeBackGround2 = document.createElement('div');
                    nativeBackGround.appendChild(nativeBackGround2);
                    BoolNativeNep5.onchange = () => {
                        if (BoolNativeNep5.checked) {
                            if (nativeBackGround2)
                                nativeBackGround.removeChild(nativeBackGround2);
                            nativeBackGround2 = document.createElement('div');
                            nativeBackGround.appendChild(nativeBackGround2);
                            this.createNativeContract(nativeBackGround2, select);
                        }
                        else {
                            if (nativeBackGround2)
                                nativeBackGround.removeChild(nativeBackGround2);
                            nativeBackGround2 = document.createElement('div');
                            nativeBackGround.appendChild(nativeBackGround2);
                            this.createContract(nativeBackGround2, select);
                        }
                    };
                    this.createContract(nativeBackGround2, select);
                }
                else {
                    if (chooseNative.firstChild)
                        chooseNative.removeChild(chooseNative.firstChild);
                    var nativeBackGround = document.createElement('div');
                    chooseNative.appendChild(nativeBackGround);
                    this.createContract(nativeBackGround, select);
                }
            };
            this.createContract(nativeBackGround, select);
        }
        useContract(div, use) {
            if (div.firstChild)
                div.removeChild(div.firstChild);
            var contractBackGround = document.createElement('div');
            contractBackGround.style.width = "100%";
            div.appendChild(contractBackGround);
            var assetModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(assetModel);
            contractBackGround.appendChild(assetModel);
            var asset = document.createElement('span');
            assetModel.appendChild(asset);
            asset.style.color = "#eeeeee";
            asset.textContent = "链名";
            var select = document.createElement("select");
            assetModel.appendChild(select);
            WebBrowser.CSSTool.select_set(select);
            select.style.marginLeft = '20px';
            WebBrowser.AppChainTool.getChain(select);
            var fillinTextModel = document.createElement("span");
            WebBrowser.CSSTool.flowRight_set(fillinTextModel);
            assetModel.appendChild(fillinTextModel);
            var fillinText = document.createElement("span");
            fillinText.style.color = "#eeeeee";
            fillinText.textContent = "手动输入合约hash";
            fillinTextModel.appendChild(fillinText);
            var hash_lable = document.createElement("span");
            hash_lable.style.marginLeft = '25px';
            $(hash_lable).addClass("switch-wrap");
            fillinTextModel.appendChild(hash_lable);
            var HashFilein = document.createElement("input");
            $(HashFilein).attr("id", "hash_switch");
            HashFilein.type = "checkbox";
            HashFilein.checked = true;
            hash_lable.appendChild(HashFilein);
            var label_con = document.createElement("label");
            $(label_con).attr("for", "hash_switch");
            hash_lable.appendChild(label_con);
            var hashBackGround = document.createElement("div");
            WebBrowser.CSSTool.handle_set(hashBackGround);
            contractBackGround.appendChild(hashBackGround);
            var ContractAvm = null;
            var contractHash = null;
            var fileText = document.createElement("span");
            fileText.style.color = "#eeeeee";
            fileText.textContent = "合约hash";
            hashBackGround.appendChild(fileText);
            ContractAvm = document.createElement("input");
            WebBrowser.CSSTool.addr_set(ContractAvm);
            WebBrowser.CSSTool.flowRight_set(ContractAvm);
            ContractAvm.style.width = '80%';
            ContractAvm.placeholder = '请输入合约hash';
            hashBackGround.appendChild(ContractAvm);
            HashFilein.onchange = () => {
                while (hashBackGround.children.length > 0) {
                    hashBackGround.removeChild(hashBackGround.firstChild);
                }
                if (HashFilein.checked) {
                    var fileText = document.createElement("span");
                    fileText.style.color = "#eeeeee";
                    fileText.textContent = "合约hash";
                    hashBackGround.appendChild(fileText);
                    ContractAvm = document.createElement("input");
                    WebBrowser.CSSTool.addr_set(ContractAvm);
                    WebBrowser.CSSTool.flowRight_set(ContractAvm);
                    ContractAvm.style.width = '80%';
                    ContractAvm.placeholder = '请输入合约hash';
                    hashBackGround.appendChild(ContractAvm);
                }
                else {
                    ContractAvm = null;
                    var firstFile = document.createElement("div");
                    var putIn = document.createElement("div");
                    putIn.textContent = "请选择avm文件";
                    firstFile.appendChild(putIn);
                    var fileIcon = document.createElement("i");
                    $(fileIcon).addClass("glyphicon glyphicon-file").css("padding-left", "5px").appendTo(putIn);
                    hashBackGround.appendChild(firstFile);
                    WebBrowser.CSSTool.firstFile_set(firstFile);
                    firstFile.style.width = '50%';
                    firstFile.style.margin = '0 auto';
                    firstFile.style.textAlign = 'center';
                    //将file添加到feile  外层里
                    var file = document.createElement("input");
                    firstFile.appendChild(file);
                    file.type = "file";
                    WebBrowser.CSSTool.file_set(file);
                    //提示添加file上传的文字
                    // var fileTip = document.createElement("p");
                    // fileTip.textContent='*请上传钱包文件';
                    // $(fileTip).attr("id","fileTip");
                    // hashBackGround.appendChild(fileTip);
                    // CSSTool.fileTip_set(fileTip);
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        contractHash = reader.result;
                        contractHash = (new Neo.Uint160(Neo.Cryptography.RIPEMD160.computeHash(Neo.Cryptography.Sha256.computeHash(contractHash)))).toString();
                    };
                    file.onchange = (ev) => {
                        if (file.files.length > 0)
                            if (file.files[0].name.includes(".avm")) {
                                putIn.textContent = file.files[0].name;
                                reader.readAsArrayBuffer(file.files[0]);
                            }
                    };
                }
            };
            var methodBackGround = document.createElement("div");
            contractBackGround.appendChild(methodBackGround);
            var btnAddMethod = document.createElement("button");
            btnAddMethod.textContent = "AddMethod";
            WebBrowser.CSSTool.addMethod_btn(btnAddMethod);
            btnAddMethod.style.marginLeft = '73px';
            contractBackGround.appendChild(btnAddMethod);
            var JsonMethod = [];
            btnAddMethod.onclick = () => {
                var json = {};
                JsonMethod.push(json);
                var params = [];
                var singleMethodBackGround = document.createElement("div");
                WebBrowser.CSSTool.handle_set(singleMethodBackGround);
                methodBackGround.appendChild(singleMethodBackGround);
                var methodText = document.createElement("span");
                methodText.style.color = "#eeeeee";
                methodText.textContent = "方法名";
                singleMethodBackGround.appendChild(methodText);
                var methodInput = document.createElement("input");
                singleMethodBackGround.appendChild(methodInput);
                WebBrowser.CSSTool.addr_set(methodInput);
                WebBrowser.CSSTool.flowRight_set(methodInput);
                methodInput.style.width = '80%';
                methodInput.style.marginBottom = '15px';
                methodInput.placeholder = '请输入方法名';
                json["methodName"] = methodInput;
                json["params"] = params;
                var paramsBackGround = document.createElement("div");
                WebBrowser.CSSTool.handle_set(singleMethodBackGround);
                singleMethodBackGround.appendChild(paramsBackGround);
                var btnAddParams = document.createElement("button");
                btnAddParams.textContent = "AddParams";
                WebBrowser.CSSTool.addMethod_btn(btnAddParams);
                singleMethodBackGround.appendChild(btnAddParams);
                btnAddParams.onclick = () => {
                    var singleParamsBackGround = document.createElement("div");
                    WebBrowser.CSSTool.handle_set(singleParamsBackGround);
                    paramsBackGround.appendChild(singleParamsBackGround);
                    var paramsText = document.createElement("span");
                    paramsText.style.color = "#eeeeee";
                    paramsText.textContent = "参数";
                    singleParamsBackGround.appendChild(paramsText);
                    var paramsInput = document.createElement("input");
                    WebBrowser.CSSTool.addr_set(paramsInput);
                    WebBrowser.CSSTool.flowRight_set(paramsInput);
                    paramsInput.style.width = '80%';
                    paramsInput.placeholder = '请输入参数';
                    singleParamsBackGround.appendChild(paramsInput);
                    params.push(paramsInput);
                };
                var btnSubParams = document.createElement("button");
                WebBrowser.CSSTool.subParams_btn(btnSubParams);
                WebBrowser.CSSTool.flowRight_set(btnSubParams);
                btnSubParams.textContent = "SubParams";
                singleMethodBackGround.appendChild(btnSubParams);
                btnSubParams.onclick = () => {
                    paramsBackGround.removeChild(paramsBackGround.lastChild);
                    params.pop();
                };
            };
            var btnSubMethod = document.createElement("button");
            WebBrowser.CSSTool.subParams_btn(btnSubMethod);
            WebBrowser.CSSTool.flowRight_set(btnSubMethod);
            btnSubMethod.textContent = "SubMethod";
            contractBackGround.appendChild(btnSubMethod);
            btnSubMethod.onclick = () => {
                methodBackGround.removeChild(methodBackGround.lastChild);
                JsonMethod.pop();
            };
            var btnSend = document.createElement('div');
            WebBrowser.CSSTool.btn_set(btnSend);
            btnSend.style.width = '50%';
            btnSend.textContent = "send";
            btnSend.style.margin = '15px auto';
            btnSend.style.cursor = 'pointer';
            contractBackGround.appendChild(btnSend);
            var txText = document.createElement("span");
            txText.style.color = "#eeeeee";
            contractBackGround.appendChild(txText);
            var txMessage = null;
            btnSend.onclick = () => __awaiter(this, void 0, void 0, function* () {
                if (ContractAvm) {
                    contractHash = ContractAvm.value;
                }
                else if (!contractHash) {
                    alert("hash not available!");
                    return;
                }
                var json = [];
                for (var i = 0; i < JsonMethod.length; i++) {
                    var singleJson = {};
                    var array = [];
                    for (var j = 0; j < JsonMethod[i]["params"].length; j++) {
                        var s = JsonMethod[i]["params"][j].value;
                        array.push(s);
                    }
                    singleJson["params"] = array;
                    singleJson["methodName"] = JsonMethod[i]["methodName"].value;
                    json.push(singleJson);
                }
                if (use) {
                    txMessage = yield WebBrowser.AppChainTool.SendContractMethod(select.childNodes[select.selectedIndex].value, WebBrowser.GUITool.pubkey, WebBrowser.GUITool.prikey, json, contractHash);
                }
                else {
                    txMessage = yield WebBrowser.AppChainTool.SendInvokeContractMethod(select.childNodes[select.selectedIndex].value, WebBrowser.GUITool.pubkey, WebBrowser.GUITool.prikey, json, contractHash);
                    txMessage = JSON.stringify(txMessage);
                }
                txText.textContent = (use ? "txid = " : "invokeMessage = ") + txMessage;
            });
        }
        createContract(contractBackGround, select) {
            var ContractText = document.createElement('span');
            ContractText.style.color = "#eeeeee";
            ContractText.textContent = "合约";
            contractBackGround.appendChild(ContractText);
            var storage_lable = document.createElement("div");
            WebBrowser.CSSTool.handle_set(storage_lable);
            $(storage_lable).addClass("switch-wrap");
            contractBackGround.appendChild(storage_lable);
            var storageName = document.createElement('span');
            storageName.style.color = "#eeeeee";
            storageName.textContent = "storage";
            storage_lable.appendChild(storageName);
            var lable_store = document.createElement("span");
            WebBrowser.CSSTool.flowRight_set(lable_store);
            lable_store.style.marginRight = '373px';
            storage_lable.appendChild(lable_store);
            var need_storage = document.createElement('input');
            $(need_storage).attr("id", "switch_s");
            need_storage.type = "checkbox";
            need_storage.checked = false;
            lable_store.appendChild(need_storage);
            var lable_s = document.createElement("label");
            $(lable_s).attr("for", "switch_s");
            lable_store.appendChild(lable_s);
            var can_lable = document.createElement("div");
            WebBrowser.CSSTool.handle_set(can_lable);
            $(can_lable).addClass("switch-wrap");
            contractBackGround.appendChild(can_lable);
            var canChargeName = document.createElement('span');
            canChargeName.style.color = "#eeeeee";
            canChargeName.textContent = "canCharge";
            can_lable.appendChild(canChargeName);
            var lable_div = document.createElement("span");
            WebBrowser.CSSTool.flowRight_set(lable_div);
            lable_div.style.marginRight = '373px';
            can_lable.appendChild(lable_div);
            var need_canCharge = document.createElement('input');
            $(need_canCharge).attr("id", "switch");
            need_canCharge.type = "checkbox";
            need_canCharge.checked = false;
            lable_div.appendChild(need_canCharge);
            var lable = document.createElement("label");
            $(lable).attr("for", "switch");
            lable_div.appendChild(lable);
            var nameTextModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(nameTextModel);
            contractBackGround.appendChild(nameTextModel);
            var nameText = document.createElement('span');
            nameText.style.color = "#eeeeee";
            nameText.textContent = "NAME";
            nameTextModel.appendChild(nameText);
            var name = document.createElement('input');
            WebBrowser.CSSTool.addr_set(name);
            name.placeholder = '请输入NAME';
            name.style.marginLeft = '0';
            name.style.width = '80%';
            WebBrowser.CSSTool.flowRight_set(name);
            nameTextModel.appendChild(name);
            var versionTextModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(versionTextModel);
            contractBackGround.appendChild(versionTextModel);
            var versionText = document.createElement('span');
            versionText.style.color = "#eeeeee";
            versionText.textContent = "VERSION";
            versionTextModel.appendChild(versionText);
            var version = document.createElement('input');
            version.value = "1.0";
            WebBrowser.CSSTool.addr_set(version);
            version.placeholder = '请输入VERSION';
            version.style.marginLeft = '0';
            version.style.width = '80%';
            WebBrowser.CSSTool.flowRight_set(version);
            versionTextModel.appendChild(version);
            var autherTextModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(autherTextModel);
            contractBackGround.appendChild(autherTextModel);
            var autherText = document.createElement('span');
            autherText.style.color = "#eeeeee";
            autherText.textContent = "AUTHOR";
            autherTextModel.appendChild(autherText);
            var auther = document.createElement('input');
            auther.value = "auther";
            WebBrowser.CSSTool.addr_set(auther);
            auther.placeholder = '请输入AUTHOR';
            auther.style.marginLeft = '0';
            auther.style.width = '80%';
            WebBrowser.CSSTool.flowRight_set(auther);
            autherTextModel.appendChild(auther);
            var emailTextModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(emailTextModel);
            contractBackGround.appendChild(emailTextModel);
            var emailText = document.createElement('span');
            emailText.style.color = "#eeeeee";
            emailText.textContent = "EMAIL";
            emailTextModel.appendChild(emailText);
            var email = document.createElement('input');
            email.value = "email";
            WebBrowser.CSSTool.addr_set(email);
            email.placeholder = '请输入EMAIL';
            email.style.marginLeft = '0';
            email.style.width = '80%';
            WebBrowser.CSSTool.flowRight_set(email);
            emailTextModel.appendChild(email);
            var descriptionTextModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(descriptionTextModel);
            contractBackGround.appendChild(descriptionTextModel);
            var descriptionText = document.createElement('span');
            descriptionText.style.color = "#eeeeee";
            descriptionText.textContent = "DESCRIPTION";
            descriptionTextModel.appendChild(descriptionText);
            var description = document.createElement('input');
            description.value = "description";
            WebBrowser.CSSTool.addr_set(description);
            description.placeholder = '请输入DESCRIPTION';
            description.style.marginLeft = '0';
            description.style.width = '80%';
            WebBrowser.CSSTool.flowRight_set(description);
            descriptionTextModel.appendChild(description);
            var uploadFiles = document.createElement("div"); //外层div
            contractBackGround.appendChild(uploadFiles);
            WebBrowser.CSSTool.uploadFiles_set(uploadFiles);
            //feile  外层
            var firstFile = document.createElement("div");
            var putIn = document.createElement("div");
            putIn.textContent = "请选择文件";
            firstFile.appendChild(putIn);
            var fileIcon = document.createElement("i");
            $(fileIcon).addClass("glyphicon glyphicon-file").css("padding-left", "5px").appendTo(putIn);
            uploadFiles.appendChild(firstFile);
            WebBrowser.CSSTool.firstFile_set(firstFile);
            //将file添加到feile  外层里
            var file = document.createElement("input");
            firstFile.appendChild(file);
            file.type = "file";
            WebBrowser.CSSTool.file_set(file);
            firstFile.appendChild(file);
            var btnSend = document.createElement('button');
            btnSend.textContent = "send";
            WebBrowser.CSSTool.btn_set(btnSend);
            btnSend.style.width = '50%';
            contractBackGround.appendChild(btnSend);
            var ContractAvm = null;
            btnSend.onclick = () => __awaiter(this, void 0, void 0, function* () {
                if (!ContractAvm) {
                    alert("it can be .avm file.");
                    return;
                }
                WebBrowser.AppChainTool.SendContract(need_storage.checked, need_canCharge.checked, description.value, email.value, auther.value, version.value, name.value, ContractAvm, select.childNodes[select.selectedIndex].value, WebBrowser.GUITool.pubkey, WebBrowser.GUITool.prikey);
            });
            var reader = new FileReader();
            reader.onload = (e) => {
                ContractAvm = reader.result;
            };
            file.onchange = (ev) => {
                if (file.files.length > 0)
                    if (file.files[0].name.includes(".avm")) {
                        reader.readAsArrayBuffer(file.files[0]);
                    }
            };
        }
        createNativeContract(contractBackGround, select) {
            var nameTextModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(nameTextModel);
            contractBackGround.appendChild(nameTextModel);
            var nameText = document.createElement('span');
            nameText.style.color = "#eeeeee";
            nameText.textContent = "NAME";
            nameTextModel.appendChild(nameText);
            var name = document.createElement('input');
            WebBrowser.CSSTool.addr_set(name);
            name.placeholder = '请输入NAME';
            name.style.marginLeft = '0';
            name.style.width = '80%';
            WebBrowser.CSSTool.flowRight_set(name);
            nameTextModel.appendChild(name);
            var symbolTextModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(symbolTextModel);
            contractBackGround.appendChild(symbolTextModel);
            var symbolText = document.createElement('span');
            symbolText.style.color = "#eeeeee";
            symbolText.textContent = "SYMBOL";
            symbolTextModel.appendChild(symbolText);
            var symbol = document.createElement('input');
            symbol.value = "SYMBOL";
            WebBrowser.CSSTool.addr_set(symbol);
            symbol.placeholder = '请输入SYMBOL';
            symbol.style.marginLeft = '0';
            symbol.style.width = '80%';
            WebBrowser.CSSTool.flowRight_set(symbol);
            symbolTextModel.appendChild(symbol);
            var totalSupplyTextModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(totalSupplyTextModel);
            contractBackGround.appendChild(totalSupplyTextModel);
            var totalSupplyText = document.createElement('span');
            totalSupplyText.style.color = "#eeeeee";
            totalSupplyText.textContent = "TOTALSUPPLY";
            totalSupplyTextModel.appendChild(totalSupplyText);
            var totalSupply = document.createElement('input');
            totalSupply.value = "200000000000000000";
            WebBrowser.CSSTool.addr_set(totalSupply);
            totalSupply.placeholder = '请输入TOTALSUPPLY';
            totalSupply.style.marginLeft = '0';
            totalSupply.style.width = '80%';
            WebBrowser.CSSTool.flowRight_set(totalSupply);
            totalSupplyTextModel.appendChild(totalSupply);
            var presionTextModel = document.createElement("div");
            WebBrowser.CSSTool.handle_set(presionTextModel);
            contractBackGround.appendChild(presionTextModel);
            var presionText = document.createElement('span');
            presionText.style.color = "#eeeeee";
            presionText.textContent = "PRESION";
            presionTextModel.appendChild(presionText);
            var presion = document.createElement('input');
            presion.value = "8";
            WebBrowser.CSSTool.addr_set(presion);
            presion.placeholder = '请输入PRESION';
            presion.style.marginLeft = '0';
            presion.style.width = '80%';
            WebBrowser.CSSTool.flowRight_set(presion);
            presionTextModel.appendChild(presion);
            var btnSend = document.createElement('button');
            btnSend.textContent = "send";
            WebBrowser.CSSTool.btn_set(btnSend);
            btnSend.style.width = '50%';
            contractBackGround.appendChild(btnSend);
            btnSend.onclick = () => __awaiter(this, void 0, void 0, function* () {
                WebBrowser.AppChainTool.SendNativeContract(Number(presion.value), totalSupply.value, symbol.value, name.value, select.childNodes[select.selectedIndex].value, WebBrowser.GUITool.pubkey, WebBrowser.GUITool.prikey);
            });
        }
    }
    WebBrowser.GUI_Contract = GUI_Contract;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./Base.ts"/>
var WebBrowser;
/// <reference path="./Base.ts"/>
(function (WebBrowser) {
    class GUI_TxMessage {
        constructor(div) {
            this.div = div;
        }
        showUI() {
            this.mainTransaction(this.div);
            WebBrowser.GUI_Route.instance.hideUI(WebBrowser.PageName.Title);
        }
        hideUI() {
        }
        mainTransaction(div) {
            if (div.firstChild)
                div.removeChild(div.firstChild);
            var transactionBackGround = document.createElement('div');
            transactionBackGround.style.width = "100%";
            transactionBackGround.style.cssFloat = "left";
            div.appendChild(transactionBackGround);
            var TransactionText = document.createElement('span');
            TransactionText.style.color = "#eeeeee";
            TransactionText.textContent = "交易记录";
            transactionBackGround.appendChild(TransactionText);
            var txidText = document.createElement('span');
            txidText.style.color = "#eeeeee";
            txidText.textContent = "TXID";
            transactionBackGround.appendChild(txidText);
            var timeText = document.createElement('span');
            timeText.style.color = "#eeeeee";
            timeText.textContent = "Date";
            transactionBackGround.appendChild(timeText);
        }
    }
    WebBrowser.GUI_TxMessage = GUI_TxMessage;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class GUI_Message {
        constructor(div) {
            this.div = div;
        }
        showUI() {
            this.mainTransaction(this.div);
            WebBrowser.GUI_Route.instance.hideUI(WebBrowser.PageName.Title);
        }
        hideUI() {
        }
        mainTransaction(div) {
            if (div.firstChild)
                div.removeChild(div.firstChild);
            var transactionBackGround = document.createElement('div');
            transactionBackGround.style.width = "100%";
            transactionBackGround.style.cssFloat = "left";
            div.appendChild(transactionBackGround);
            var TransactionText = document.createElement('span');
            TransactionText.style.color = "#eeeeee";
            TransactionText.textContent = "交易记录";
            transactionBackGround.appendChild(TransactionText);
            var txidText = document.createElement('span');
            txidText.style.color = "#eeeeee";
            txidText.textContent = "TXID";
            transactionBackGround.appendChild(txidText);
            var timeText = document.createElement('span');
            timeText.style.color = "#eeeeee";
            timeText.textContent = "Date";
            transactionBackGround.appendChild(timeText);
        }
    }
    WebBrowser.GUI_Message = GUI_Message;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./Base.ts"/>
/// <reference path="./Asset.ts"/>
/// <reference path="./Charge.ts"/>
/// <reference path="./AppChain.ts"/>
/// <reference path="./Contract.ts"/>
/// <reference path="./TxMessage.ts"/>
/// <reference path="./Message.ts"/>
/// <reference path="../tools/CSSTools.ts"/>
var WebBrowser;
/// <reference path="./Base.ts"/>
/// <reference path="./Asset.ts"/>
/// <reference path="./Charge.ts"/>
/// <reference path="./AppChain.ts"/>
/// <reference path="./Contract.ts"/>
/// <reference path="./TxMessage.ts"/>
/// <reference path="./Message.ts"/>
/// <reference path="../tools/CSSTools.ts"/>
(function (WebBrowser) {
    class GUI_Title {
        constructor(div) {
            this.div = div;
            var navTitle = document.createElement("div");
            this.div.appendChild(navTitle);
            navTitle.className = "navTitle-bg";
            this.title = document.createElement('div');
            navTitle.appendChild(this.title);
            this.title.className = "title-bg";
            this.mainValueBackGround = document.createElement('div');
            navTitle.appendChild(this.mainValueBackGround);
            this.mainValueBackGround.className = "main-value-bg";
            WebBrowser.GUI_Route.instance.pushUI(WebBrowser.PageName.Asset, new WebBrowser.GUI_Asset(this.mainValueBackGround));
            WebBrowser.GUI_Route.instance.pushUI(WebBrowser.PageName.Charge, new WebBrowser.GUI_Charge(this.mainValueBackGround));
            //GUI_Route.instance.pushUI(PageName.AppChain, new GUI_AppChain(this.mainValueBackGround));
            WebBrowser.GUI_Route.instance.pushUI(WebBrowser.PageName.Contract, new WebBrowser.GUI_Contract(this.mainValueBackGround));
            WebBrowser.GUI_Route.instance.pushUI(WebBrowser.PageName.TxMessage, new WebBrowser.GUI_TxMessage(this.mainValueBackGround));
            WebBrowser.GUI_Route.instance.pushUI(WebBrowser.PageName.Message, new WebBrowser.GUI_Message(this.mainValueBackGround));
        }
        showUI() {
            this.showTitle(this.title);
        }
        hideUI() {
            this.stopUpdate();
            if (this.title) {
                if (this.height) {
                    this.title.removeChild(this.height);
                    this.height = null;
                }
                if (this.selectAppChain) {
                    this.title.removeChild(this.selectAppChain);
                    this.selectAppChain = null;
                }
            }
        }
        showTitle(title) {
            //$("#gui-info").width($(window).width());
            //$("#removeContainer").removeClass("container");
            var asset = document.createElement("button");
            title.appendChild(asset);
            asset.className = "title-btn title-btn-off";
            asset.textContent = "资产";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/01_token.png";
            asset.appendChild(fileIcon);
            fileIcon.className = "button-icon";
            asset.onclick = () => {
                WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.Asset);
                document.querySelectorAll(".title-btn").forEach((value) => {
                    value.className = "title-btn title-btn-off";
                });
                asset.className = "title-btn title-btn-on";
            };
            asset.click();
            var charge = document.createElement("button");
            title.appendChild(charge);
            charge.className = "title-btn title-btn-off";
            charge.textContent = "转账";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/02_charge.png";
            charge.appendChild(fileIcon);
            fileIcon.className = "button-icon";
            charge.onclick = () => {
                WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.Charge);
                document.querySelectorAll(".title-btn").forEach((value) => {
                    value.className = "title-btn title-btn-off";
                });
                charge.className = "title-btn title-btn-on";
            };
            // var appChain = document.createElement("button") as HTMLButtonElement;
            // title.appendChild(appChain)
            // $(appChain).css("background","#3D3E4C");
            // appChain.className = "title-btn-on";
            // appChain.textContent = "应用链";
            // appChain.onclick = () => {
            //     GUI_Route.instance.showUI(PageName.AppChain);
            //     $(appChain).css("background","#333542").siblings("button").css("background","#3D3E4C");
            // }
            var contract = document.createElement("button");
            WebBrowser.CSSTool.titleBtn_set(contract);
            title.appendChild(contract);
            contract.textContent = "发布合约";
            contract.className = "title-btn title-btn-off";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/03_contract.png";
            contract.appendChild(fileIcon);
            fileIcon.className = "button-icon";
            contract.onclick = () => {
                WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.Contract);
                document.querySelectorAll(".title-btn").forEach((value) => {
                    value.className = "title-btn title-btn-off";
                });
                contract.className = "title-btn title-btn-on";
            };
            var transaction = document.createElement("button");
            title.appendChild(transaction);
            transaction.textContent = "交易记录";
            transaction.className = "title-btn title-btn-off";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/04_txmessage.png";
            transaction.appendChild(fileIcon);
            fileIcon.className = "button-icon";
            transaction.onclick = () => {
                WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.TxMessage);
                document.querySelectorAll(".title-btn").forEach((value) => {
                    value.className = "title-btn title-btn-off";
                });
                transaction.className = "title-btn title-btn-on";
            };
            var message = document.createElement("button");
            title.appendChild(message);
            message.textContent = "信息";
            message.className = "title-btn title-btn-off";
            var fileIcon = document.createElement("img");
            fileIcon.src = "./img/05_message.png";
            message.appendChild(fileIcon);
            fileIcon.className = "button-icon";
            message.onclick = () => {
                WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.Message);
                document.querySelectorAll(".title-btn").forEach((value) => {
                    value.className = "title-btn title-btn-off";
                });
                message.className = "title-btn title-btn-on";
            };
        }
        addSelect() {
            this.hideUI();
            this.initAppChain();
            this.update();
            this.selectAppChain = document.createElement("select");
            this.selectAppChain.style.cssFloat = "right";
            this.selectAppChain.style.width = "15%";
            WebBrowser.CSSTool.select_set(this.selectAppChain);
            this.title.appendChild(this.selectAppChain);
            this.height = document.createElement("span");
            this.height.style.color = "#eeeeee";
            this.title.appendChild(this.height);
            this.height.style.cssFloat = "right";
            this.height.style.lineHeight = "30px";
            this.height.style.width = "6%";
            this.height.textContent = "0";
        }
        update() {
            return __awaiter(this, void 0, void 0, function* () {
                if (WebBrowser.GUITool.chainHash) {
                    if (WebBrowser.GUITool.chainHash == "NEO") {
                        var height = yield WebBrowser.WWW.api_getNEOHeight();
                    }
                    else {
                        var height = yield WebBrowser.WWW.api_getZoroHeight(WebBrowser.GUITool.chainHash);
                    }
                    this.height.textContent = isNaN(height) ? "N/A" : height.toString();
                }
                else {
                    WebBrowser.GUITool.chainHash = "NEO";
                    if (WebBrowser.GUITool.chainHash == "NEO") {
                        var height = yield WebBrowser.WWW.api_getNEOHeight();
                    }
                    else {
                        var height = yield WebBrowser.WWW.api_getZoroHeight(WebBrowser.GUITool.chainHash);
                    }
                    this.height.textContent = isNaN(height) ? "N/A" : height.toString();
                }
                if (height > WebBrowser.WWW.blockHeight) {
                    WebBrowser.WWW.blockHeight = height;
                    WebBrowser.AppChainTool.updateAllAppChain();
                    if (WebBrowser.WWW.chainHashLength < WebBrowser.AppChainTool.appChainLength) {
                        WebBrowser.WWW.chainHashLength = WebBrowser.AppChainTool.appChainLength;
                        this.updateAppChain();
                    }
                }
                this.timeOut = setTimeout(() => { this.update(); }, 1000);
            });
        }
        stopUpdate() {
            clearTimeout(this.timeOut);
        }
        selectClear() {
            if (this.selectAppChain)
                while (this.selectAppChain.childNodes.length > 0) {
                    this.selectAppChain.removeChild(this.selectAppChain.options[0]);
                    this.selectAppChain.remove(0);
                    this.selectAppChain.options[0] = null;
                }
        }
        updateAppChain() {
            return __awaiter(this, void 0, void 0, function* () {
                this.selectClear();
                var name2Hash = yield WebBrowser.AppChainTool.initAllAppChain();
                for (var chainName in name2Hash) {
                    var sitem = document.createElement("option");
                    sitem.text = chainName;
                    sitem.value = name2Hash[chainName];
                    this.selectAppChain.appendChild(sitem);
                }
                this.selectAppChain.selectedIndex = this.selectIndex;
            });
        }
        initAppChain() {
            return __awaiter(this, void 0, void 0, function* () {
                this.selectClear();
                var name2Hash = yield WebBrowser.AppChainTool.initAllAppChain();
                for (var chainName in name2Hash) {
                    var sitem = document.createElement("option");
                    sitem.text = chainName;
                    sitem.value = name2Hash[chainName];
                    this.selectAppChain.appendChild(sitem);
                }
                this.selectAppChain.onchange = (ev) => {
                    this.updateHeight();
                    WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.Asset);
                };
            });
        }
        updateHeight() {
            return __awaiter(this, void 0, void 0, function* () {
                this.selectIndex = this.selectAppChain.selectedIndex;
                WebBrowser.GUITool.chainHash = this.selectAppChain.childNodes[this.selectIndex].value;
                if (WebBrowser.GUITool.chainHash == "NEO") {
                    var height = yield WebBrowser.WWW.api_getNEOHeight();
                }
                else {
                    var height = yield WebBrowser.WWW.api_getZoroHeight(WebBrowser.GUITool.chainHash);
                }
                this.height.textContent = isNaN(height) ? "N/A" : height.toString();
            });
        }
    }
    WebBrowser.GUI_Title = GUI_Title;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./Base.ts"/>
/// <reference path="./Title.ts"/>
var WebBrowser;
/// <reference path="./Base.ts"/>
/// <reference path="./Title.ts"/>
(function (WebBrowser) {
    class GUI_Main {
        constructor(div) {
            this.div = div;
        }
        showUI() {
            this.mainMenu();
        }
        hideUI() {
        }
        mainMenu() {
            if (this.div.firstChild)
                this.div.removeChild(this.div.firstChild);
            this.div.className = "main-view-bg";
            var background = document.createElement('div');
            this.div.appendChild(background);
            WebBrowser.GUI_Route.instance.pushUI(WebBrowser.PageName.Title, new WebBrowser.GUI_Title(background));
            WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.Title);
        }
    }
    WebBrowser.GUI_Main = GUI_Main;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../app.ts"/>
/// <reference path="../tools/AppChainTool.ts"/> 
/// <reference path="../tools/wwwtool.ts"/> 
/// <reference path="../gui/Base.ts"/>
/// <reference path="../gui/Login.ts"/>
/// <reference path="../gui/WalletView.ts"/>
/// <reference path="../gui/MainView.ts"/>
/// <reference path="../gui/GUIRoute.ts"/>
var WebBrowser;
/// <reference path="../app.ts"/>
/// <reference path="../tools/AppChainTool.ts"/> 
/// <reference path="../tools/wwwtool.ts"/> 
/// <reference path="../gui/Base.ts"/>
/// <reference path="../gui/Login.ts"/>
/// <reference path="../gui/WalletView.ts"/>
/// <reference path="../gui/MainView.ts"/>
/// <reference path="../gui/GUIRoute.ts"/>
(function (WebBrowser) {
    class GUI {
        constructor(app = null) {
            this.div = document.getElementById('gui-info');
            this.footer = document.getElementById('footer-box');
            this.app = app;
            Neo.Cryptography.RandomNumberGenerator.startCollectors();
            WebBrowser.AppChainTool.initAppChainSelectList();
            this.initPage();
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                this.langType = this.app.langmgr.type;
            }
        }
        initPage() {
            var backgroundPage = document.createElement('div');
            this.div.appendChild(backgroundPage);
            WebBrowser.GUI_Route.instance.pushUI(WebBrowser.PageName.Login, new WebBrowser.GUI_Login(backgroundPage));
            WebBrowser.GUI_Route.instance.pushUI(WebBrowser.PageName.MainView, new WebBrowser.GUI_Main(backgroundPage));
        }
        start() {
            this.getLangs();
            WebBrowser.GUI_Route.instance.showUI(WebBrowser.PageName.Login);
            this.div.hidden = false;
            this.footer.hidden = false;
        }
        close() {
            WebBrowser.GUI_Route.instance.hideUI(WebBrowser.PageName.Title);
            this.div.hidden = true;
            this.footer.hidden = true;
        }
    }
    WebBrowser.GUI = GUI;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../tools/wwwtool.ts"/>
var RectElement;
/// <reference path="../tools/wwwtool.ts"/>
(function (RectElement) {
    class rectCanvas {
        constructor() {
            this.Max = 60;
            this.blockWidth = 5;
            this.blockHeight = 3;
            this.rectInterval = null;
            this.chart = null;
            this.data = null;
            this.newBlockIndex = -1;
            this.rectCanvas = document.getElementById("rectCanvas");
            this.rectCanvas.width = window.outerWidth;
            this.rectCanvas.height = 150;
            this.g = this.rectCanvas.getContext("2d");
            this.getBlockInterval();
            this.createChart();
        }
        createChart() {
            this.chart = new Chart(this.g, {
                type: 'bar',
                data: this.data,
                options: {
                    responsive: true,
                    title: {
                        display: false
                    },
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false,
                                    drawBorder: false
                                }
                            }],
                        yAxes: [{
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false,
                                    drawBorder: false
                                }
                            }]
                    }
                }
            });
        }
        getBlockInterval() {
            return __awaiter(this, void 0, void 0, function* () {
                this.rectInterval = yield WebBrowser.WWW.api_getBlockIntervals("", this.Max);
                this.newBlockIndex = this.rectInterval[0].blockindex;
                var labels = [];
                var data = [];
                var colors = [];
                var hovercolors = [];
                for (var i = this.rectInterval.length - 1; i > -1; i--) {
                    labels.push(this.rectInterval[i].blockindex);
                    data.push(this.rectInterval[i].blockinterval);
                    if (i == 0) {
                        colors.push('rgba(255, 255, 255, 0.5)');
                        hovercolors.push('rgba(255, 255, 255, 1.0)');
                    }
                    else {
                        colors.push('rgba(222, 222, 222, 0.2)');
                        hovercolors.push('rgba(222, 222, 222, 0.8)');
                    }
                }
                this.data = {
                    labels: labels,
                    datasets: [{
                            label: "BlockInterval",
                            data: data,
                            backgroundColor: colors,
                            hoverBackgroundColor: hovercolors
                        }]
                };
            });
        }
        close() {
            this.data = {
                labels: [],
                datasets: []
            };
            this.chart.data = this.data;
        }
        getBlockIntervalNext() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.data && this.data.labels.length == 0) {
                    this.getBlockInterval();
                }
                if (this.data && this.data.labels.length > 0) {
                    var rectmessage = yield WebBrowser.WWW.api_getBlockInterval("");
                    if (this.data && rectmessage[0].blockindex != this.newBlockIndex) {
                        this.newBlockIndex = rectmessage[0].blockindex;
                        this.data.datasets[0].data.splice(0, 1);
                        this.data.datasets[0].data.push(rectmessage[0].blockinterval);
                        this.data.labels.splice(0, 1);
                        this.data.labels.push(rectmessage[0].blockindex);
                        this.chart.data = this.data;
                        this.chart.update();
                    }
                }
            });
        }
        update() {
            this.getBlockIntervalNext();
        }
        draw() {
            //this.chart.render();
        }
    }
    RectElement.rectCanvas = rectCanvas;
    class RectMessage {
    }
    RectElement.RectMessage = RectMessage;
})(RectElement || (RectElement = {}));
/// <reference path="../app.ts"/>
/// <reference path="../element/rectCanvas.ts"/>
var WebBrowser;
/// <reference path="../app.ts"/>
/// <reference path="../element/rectCanvas.ts"/>
(function (WebBrowser) {
    class Index {
        constructor(app) {
            this.interval = -1;
            this.div = document.getElementById('index-page');
            this.footer = document.getElementById('footer-box');
            this.viewtxlist = document.getElementById("i_viewtxlist");
            this.viewblocks = document.getElementById("i_viewblocks");
            this.alladdress = document.getElementById("i_alladdress");
            this.allblock = document.getElementById("i_allblock");
            this.alltxlist = document.getElementById("i_alltxlist");
            this.cnbtn = document.getElementById("cn-btn");
            this.enbtn = document.getElementById("en-btn");
            this.app = app;
            this.cnbtn.onclick = () => {
                this.app.langmgr.setType("cn");
                sessionStorage.setItem("language", "cn");
                //window.location.reload()
                this.refreshLangs();
            };
            this.enbtn.onclick = () => {
                // $("#en-btn").attr('href', '/' + location.hash);
                this.app.langmgr.setType("en");
                sessionStorage.setItem("language", "en");
                //window.location.reload()
                this.refreshLangs();
            };
        }
        close() {
            if (this.interval != -1)
                clearInterval(this.interval);
            if (this.canvas)
                this.canvas.close();
            this.div.hidden = true;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "i_summary",
                    "i_lastblock", "i_allblock",
                    "i_totaltrans", "i_alltxlist",
                    "i_walletcreate", "i_alladdress",
                    "i_last10", "i_appchain", "i_last10_height", "i_last10_size", "i_last10_ctm", "i_last10_txcount", "i_viewblocks",
                    "i_last10t", "i_last10t_txid", "i_last10t_type", "i_last10t_height", "i_last10t_size", "i_viewtxlist",
                    "i_assets_title", "i_nep5assets_val", "i_nep5assets_asset",
                    "i_nep5assets_ava", "i_nep5assets_pre", "i_nep5assets_id"
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        update() {
            return __awaiter(this, void 0, void 0, function* () {
                this.canvas.update();
                this.viewtxlist.href = WebBrowser.Url.href_transactions();
                this.viewblocks.href = WebBrowser.Url.href_blocks();
                this.alladdress.href = WebBrowser.Url.href_addresses();
                this.allblock.href = WebBrowser.Url.href_blocks();
                this.alltxlist.href = WebBrowser.Url.href_transactions();
                //查询区块高度(区块数量-1)
                let blockHeight = yield WebBrowser.WWW.api_getHeight();
                //查询交易数量
                let txCount = yield WebBrowser.WWW.gettxcount("");
                //查询地址总数
                let addrCount = yield WebBrowser.WWW.getaddrcount();
                //分页查询区块数据
                let blocks = yield WebBrowser.WWW.getblocksdesccache(10, 0);
                //分页查询交易记录
                let txs = yield WebBrowser.WWW.getrawtransactionsdesccache(10, 0, '');
                $("#blockHeight").text(WebBrowser.NumberTool.toThousands(blockHeight)); //显示在页面
                $("#txcount").text(WebBrowser.NumberTool.toThousands(txCount)); //显示在页面
                $("#addrCount").text(WebBrowser.NumberTool.toThousands(addrCount));
                $("#index-page").find("#blocks").children("tbody").empty();
                $("#index-page").find("#transactions").children("tbody").empty();
                let html_blocks = ``;
                let html_txs = ``;
                blocks.forEach((item, index, input) => {
                    let time = WebBrowser.DateTool.getTimeSecond(item.time);
                    var id = item.hash;
                    id.replace('0x', '');
                    id = id.substring(0, 4) + '...' + id.substring(id.length - 4);
                    html_blocks += `
                <tr><td>
                <a class="code" target="_self" href ='` + WebBrowser.Url.href_blockh(item.hash) + `' > 
                ` + id + `</a></td>
                <td>` + item.size + ` bytes</td>
                <td>` + time + `</td>
                <td><a class="code" target="_self" href ='` + WebBrowser.Url.href_block(item.index) + `' > 
                ` + item.index + `</a></td>
                <td>` + item.txcount + `</td></tr>`;
                });
                txs.forEach((tx) => {
                    let txid = tx.txid;
                    let txtype = tx.type.replace("Transaction", "");
                    txid = txid.replace('0x', '');
                    txid = txid.substring(0, 4) + '...' + txid.substring(txid.length - 4);
                    html_txs += `
                <tr>
                <td><a class='code' target='_self'
                 href ='` + WebBrowser.Url.href_transaction(tx.txid) + `' > ` + txid + ` </a>
                </td>
                <td>` + txtype + `
                </td>
                <td> ` + tx.blockindex + `
                </td>
                <td> ` + tx.size + ` bytes
                </td>
                </tr>`;
                });
                $("#index-page").find("#blocks").children("tbody").append(html_blocks);
                $("#index-page").find("#transactions").children("tbody").append(html_txs);
            });
        }
        refreshLangs() {
            var page = this.app.routet.render();
            page.getLangs();
            this.app.navbar.getLangs();
            this.app.netWork.getLangs();
        }
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.getLangs();
                this.canvas = new RectElement.rectCanvas();
                this.update();
                this.interval = setInterval(() => {
                    this.update();
                }, 1000);
                this.div.hidden = false;
                this.nep5s = yield WebBrowser.WWW.getallnep5asset();
                this.loadNep5View(this.nep5s);
                this.footer.hidden = false;
            });
        }
        loadNep5View(nep5s) {
            $("#i_nep5s").empty();
            nep5s.forEach((nep5s) => {
                let href = WebBrowser.Url.href_nep5info(nep5s.assetid);
                let assetId = nep5s.assetid.substring(2, 6) + '...' + nep5s.assetid.substring(nep5s.assetid.length - 4);
                if (nep5s.symbol.indexOf("{") >= 0) {
                    var json = JSON.parse(nep5s.symbol);
                    for (var i = 0; i < json.length; i++) {
                        if (this.app.langmgr.type == "cn" && json[i].lang == "zh-CN") {
                            nep5s.symbol = json[i].name;
                            break;
                        }
                        else if (this.app.langmgr.type == json[i].lang) {
                            nep5s.symbol = json[i].name;
                            break;
                        }
                    }
                    var json = JSON.parse(nep5s.name);
                    for (var i = 0; i < json.length; i++) {
                        if (this.app.langmgr.type == "cn" && json[i].lang == "zh-CN") {
                            nep5s.name = json[i].name;
                            break;
                        }
                        else if (this.app.langmgr.type == json[i].lang) {
                            nep5s.name = json[i].name;
                            break;
                        }
                    }
                }
                let htmlnep5 = `
					<tr>
					<td>` + nep5s.symbol + `</td>
                    <td> <a href="` + href + `" target="_self">` + assetId + `</a></td>
                    <td>` + nep5s.name + `</td>
                    <td>` + nep5s.totalsupply + `</td>                    
                    <td>` + nep5s.decimals + `</td>
                    </tr>`;
                $("#i_nep5s").append(htmlnep5);
            });
        }
    }
    WebBrowser.Index = Index;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../app.ts"/>
/// <reference path="../Entitys.ts"/>
var WebBrowser;
/// <reference path="../app.ts"/>
/// <reference path="../Entitys.ts"/>
(function (WebBrowser) {
    /**
     * @class 交易记录
     */
    class Transactions {
        constructor(app) {
            this.div = document.getElementById("txlist-page");
            this.footer = document.getElementById('footer-box');
            this.app = app;
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "trans_title",
                    "trans_txid",
                    "trans_type",
                    "trans_size",
                    "trans_height",
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        //更新交易记录
        updateTransactions(pageUtil, txType) {
            return __awaiter(this, void 0, void 0, function* () {
                //分页查询交易记录
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var txs = yield WebBrowser.WWW.getappchainrawtransactionsdesc(appchain, pageUtil.pageSize, pageUtil.currentPage - 1);
                }
                else {
                    var txs = yield WebBrowser.WWW.getrawtransactionsdesc(pageUtil.pageSize, pageUtil.currentPage - 1, txType);
                }
                this.txlist.find("#txlist-page-transactions").empty();
                if (pageUtil.totalPage - pageUtil.currentPage) {
                    $("#txlist-page-next").removeClass('disabled');
                }
                else {
                    $("#txlist-page-next").addClass('disabled');
                }
                if (pageUtil.currentPage - 1) {
                    $("#txlist-page-previous").removeClass('disabled');
                }
                else {
                    $("#txlist-page-previous").addClass('disabled');
                }
                let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize; //       
                let maxNum = pageUtil.totalCount;
                let diffNum = maxNum - minNum;
                if (diffNum > 15) {
                    maxNum = pageUtil.currentPage * pageUtil.pageSize;
                }
                let pageMsg = "Transactions " + (minNum + 1) + " to " + maxNum + " of " + pageUtil.totalCount;
                $("#txlist-page").find("#txlist-page-msg").html(pageMsg);
                txs.forEach((tx) => {
                    let txid = tx.txid;
                    let html = this.getTxLine(txid, tx.type, tx.size.toString(), tx.blockindex.toString());
                    this.txlist.find("#txlist-page-transactions").append(html);
                });
            });
        }
        /**
         * async start
         */
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.getLangs();
                let type = "";
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var txCount = yield WebBrowser.WWW.getappchaintxcount(appchain);
                }
                else {
                    var txCount = yield WebBrowser.WWW.gettxcount(type);
                }
                this.txlist = $("#txlist-page");
                $("#txlist-page-next").off("click").click(() => {
                    if (this.pageUtil.currentPage == this.pageUtil.totalPage) {
                        this.pageUtil.currentPage = this.pageUtil.totalPage;
                    }
                    else {
                        this.pageUtil.currentPage += 1;
                        this.updateTransactions(this.pageUtil, ""); // <string>$("#TxType").val()
                    }
                });
                $("#txlist-page-previous").off("click").click(() => {
                    if (this.pageUtil.currentPage <= 1) {
                        this.pageUtil.currentPage = 1;
                    }
                    else {
                        this.pageUtil.currentPage -= 1;
                        this.updateTransactions(this.pageUtil, ""); // <string>$("#TxType").val()
                    }
                });
                //初始化交易列表
                this.pageUtil = new WebBrowser.PageUtil(txCount, 15); //0
                this.updateTransactions(this.pageUtil, type);
                this.div.hidden = false;
                this.footer.hidden = false;
            });
        }
        getTxLine(txid, type, size, index) {
            var id = txid.replace('0x', '');
            id = id.substring(0, 6) + '...' + id.substring(id.length - 6);
            return `<div class="line">
						<div class="line-general">
							<div class="content-nel"><span><a href="` + WebBrowser.Url.href_transaction(txid) + `" target="_self">` + id + `</a></span></div>
							<div class="content-nel"><span>` + type.replace("Transaction", "") + `</span></div>
							<div class="content-nel"><span>` + size + ` bytes</span></div>
							<div class="content-nel"><span><a href="` + WebBrowser.Url.href_block(parseInt(index)) + `" target="_self">` + index + `</a></span></div>
						</div>
					</div>`;
            // return `
            // <div class="line">
            //     <div class="line-general">
            //         <div class="content-nel"><span><a href="`+ Url.href_transaction(txid) + `" target="_self">` + id + `</a></span></div>
            //         <div class="content-nel"><span>`+ type.replace("Transaction", "") + `</span></div>
            //         <div class="content-nel"><span>`+ size + ` bytes</span></div>
            //         <div class="content-nel"><span><a href="`+ Url.href_block(parseInt(index)) + `" target="_self">` + index + `</a></span></div>
            //     </div>
            //     <a onclick="txgeneral(this)" class="end" id="genbtn"><img src="./img/open.svg" /></a>
            //     <div class="transaction" style="width:100%;display: none;" vins='`+ JSON.stringify(vins) + `' vouts='` + JSON.stringify(vouts) + `'>
            //     </div>
            // </div>
            // `;
        }
        static getTxgeneral(vins, vouts, div) {
            return __awaiter(this, void 0, void 0, function* () {
                vins = JSON.parse(vins);
                vouts = JSON.parse(vouts);
                var ajax = new WebBrowser.Ajax();
                let allAsset = yield ajax.post('getallasset', []);
                allAsset.map((asset) => {
                    if (asset.id == WebBrowser.AssetEnum.NEO) {
                        asset.name = [{ lang: 'en', name: 'NEO' }];
                    }
                    if (asset.id == WebBrowser.AssetEnum.GAS) {
                        asset.name = [{ lang: 'en', name: "GAS" }];
                    }
                });
                let arr = new Array();
                for (let index = 0; index < vins.length; index++) {
                    const vin = vins[index];
                    try {
                        let txInfos = yield ajax.post('getrawtransaction', [vin.txid]);
                        // let vout = [];
                        // let address: string = vout.address;
                        // let value: string = vout.value;
                        // let name = allAsset.find(val => val.id == vout.asset).name.map(name => { return name.name }).join("|");
                        // arr.push({ vin: vin.txid, vout: vin.vout, addr: address, name: name, amount: value });
                    }
                    catch (error) {
                    }
                }
                let arra = WebBrowser.Transaction.groupByaddr(arr);
                let form = "";
                for (let index = 0; index < arra.length; index++) {
                    const item = arra[index];
                    let li = '';
                    for (let i = 0; i < item.data.length; i++) {
                        const element = item.data[i];
                        li += `<li>` + element.amount + ` ` + element.name + `</li>`;
                    }
                    form +=
                        `
                <div class="item"><div class="address"><a>` + item.addr + `</a></div><ul class="amount">` + li + `</ul></div>
                `;
                }
                let tostr = "";
                vouts.forEach(vout => {
                    let name = allAsset.find(val => val.id == vout.asset).name.map(name => name.name).join("|");
                    let sign = "";
                    if (arra.find(item => item.addr == vout.address)) {
                        sign = "(change)";
                    }
                    tostr +=
                        `
                <div class="item">
                    <div class="address"><a>` + vout.address + `</a></div>
                    <ul class="amount"><li>` + vout.value + ` ` + name + sign + `</li></ul>
                </div>
                `;
                });
                var res = `
            <div class="formaddr" style="width:41.3%">
                ` + form + `
            </div>
            <div class="turnto"><img src="./img/turnto.svg" /></div>
            <div class="toaddr" style="width:41.3%">
                ` + tostr + `
            </div>
            <div style="width:60px;"></div>
            `;
                div.innerHTML = res;
            });
        }
    }
    WebBrowser.Transactions = Transactions;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    /**
     * @class 交易详情
     */
    class Transaction {
        constructor(app) {
            this.div = document.getElementById("transaction-info");
            this.footer = document.getElementById('footer-box');
            this.app = app;
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
                    "tran_method_hash",
                    "tran_nep5",
                    "tran_nep5_asset",
                    "tran_nep5_from",
                    "tran_nep5_to",
                    "tran_nep5_value",
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        start() {
            this.getLangs();
            //this.div.innerHTML = pages.transaction;
            var appchain = WebBrowser.locationtool.getParam3();
            if (appchain && appchain.length == 40) {
                this.updateTxInfo(WebBrowser.locationtool.getParam());
                var href = WebBrowser.locationtool.getUrl() + "/transactions/" + appchain;
            }
            else {
                this.updateTxInfo(WebBrowser.locationtool.getParam());
                var href = WebBrowser.locationtool.getUrl() + "/transactions";
            }
            let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get("tran_goalltran") + '</a>';
            $("#goalltrans").empty();
            $("#goalltrans").append(html);
            this.div.hidden = false;
            this.footer.hidden = false;
        }
        updateTxInfo(txid) {
            return __awaiter(this, void 0, void 0, function* () {
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var txInfo = yield WebBrowser.WWW.getappchainrawtransaction(appchain, txid);
                }
                else {
                    var txInfo = yield WebBrowser.WWW.getrawtransaction(txid);
                }
                $("#type").text(txInfo.type.replace("Transaction", ""));
                $("#txid").text(txInfo.txid);
                $("#blockindex").empty();
                $("#blockindex").append("<a href='" + WebBrowser.Url.href_block(txInfo.blockindex) + "'>" + txInfo.blockindex + "</a>");
                $("#txsize").text(txInfo.size + " bytes");
                $("#sysfee").text(txInfo.gas + " BCP");
                $("#gaslimit").text(txInfo.gaslimit);
                $("#gasprice").text(txInfo.gasprice);
                let ajax = new WebBrowser.Ajax();
                let blocks = yield WebBrowser.WWW.getblock(txInfo.blockindex); //let blocks: Block[] = await ajax.post('getblock', [txInfo.blockindex]); 
                let block = blocks[0];
                let time = WebBrowser.DateTool.getTime(block.time);
                $("#transaction-time").text(time);
                $("#txidscriptmethod").empty();
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var txidMethod = yield WebBrowser.WWW.api_getScriptMethod(txInfo.txid, appchain);
                }
                else {
                    var txidMethod = yield WebBrowser.WWW.api_getScriptMethod(txInfo.txid);
                }
                //console.log(txidNep);
                if (txidMethod) {
                    $(".txidmethod-warp").show();
                    txidMethod.forEach((item) => {
                        this.loadTxidMethodView(item.calltype, item.method, item.contract, item.name);
                    });
                }
                else {
                    $(".txidmethod-warp").hide();
                }
                $("#txidnep5").empty();
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain && appchain.length == 40) {
                    var txidNep = yield WebBrowser.WWW.api_getappchainnep5transferbytxid(appchain, txInfo.txid);
                }
                else {
                    var txidNep = yield WebBrowser.WWW.api_getnep5transferbytxid(txInfo.txid);
                }
                //console.log(txidNep);
                if (txidNep) {
                    $(".txidnep-warp").show();
                    txidNep.forEach((item) => {
                        this.loadTxidNep5View(item.asset, item.from, item.to, item.value, item.symbol);
                    });
                }
                else {
                    $(".txidnep-warp").hide();
                }
            });
        }
        loadTxidMethodView(calltype, method, contract, name) {
            return __awaiter(this, void 0, void 0, function* () {
                var html = "";
                if (contract.length > 39) {
                    let href = WebBrowser.Url.href_contractstate(contract);
                    html = `
						<tr>
						<td>` + calltype + `</td>
						<td>` + method + `</td>
						<td><a href="` + href + `" target="_self">` + name + `</td>
						<td>` + contract + `</td>
						</tr>`;
                }
                else {
                    html = `
						<tr>
						<td>` + calltype + `</td>
						<td>` + method + `</td>
						<td>` + contract + `</td>
						<td>` + contract + `</td>
						</tr>`;
                }
                $("#txidscriptmethod").append(html);
            });
        }
        loadTxidNep5View(asset, from, to, value, symbol) {
            return __awaiter(this, void 0, void 0, function* () {
                let href = WebBrowser.Url.href_nep5(asset);
                //let nep5Name = await WWW.api_getnep5(asset); 
                let html = `
                    <tr>
                    <td> <a href="` + href + `" target="_self">` + symbol + `</a></td>
                    <td>` + from + `</td>
                    <td>` + to + `</td>
                    <td>` + value + `</td>
                    </tr>`;
                $("#txidnep5").append(html);
            });
        }
        static groupByaddr(arr) {
            var map = {}, dest = [];
            for (var i = 0; i < arr.length; i++) {
                var ai = arr[i];
                if (!map[ai.addr]) {
                    dest.push({
                        addr: ai.addr,
                        data: [ai]
                    });
                    map[ai.addr] = ai;
                }
                else {
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
    WebBrowser.Transaction = Transaction;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    /**
     * @class 交易详情
     */
    class ACTransaction {
        constructor(app) {
            this.div = document.getElementById("actransaction-info");
            this.footer = document.getElementById('footer-box');
            this.ac = WebBrowser.locationtool.getParam();
            this.app = app;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "actran_title",
                    "actran_title_1",
                    "actran_txid",
                    "actran_type",
                    "actran_netfee",
                    "actran_sysfee",
                    "actran_size",
                    "actran_height",
                    "actran_time",
                    "actran_input",
                    "actran_output",
                    "actran_nep5",
                    "actran_nep5_asset",
                    "actran_nep5_from",
                    "actran_nep5_to",
                    "actran_nep5_value",
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        start() {
            this.getLangs();
            //this.div.innerHTML = pages.transaction;
            this.updateTxInfo(this.ac, WebBrowser.locationtool.getParam3());
            let href = WebBrowser.locationtool.getUrl() + "/asset";
            let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get("actran_goalltran") + '</a>';
            $("#acgoalltrans").empty();
            $("#acgoalltrans").append(html);
            this.div.hidden = false;
            this.footer.hidden = false;
        }
        updateTxInfo(ac, txid) {
            return __awaiter(this, void 0, void 0, function* () {
                let t = yield WebBrowser.WWW.getappchainrawtransaction(ac, txid);
                let txInfo = yield WebBrowser.WWW.getappchainrawtransaction(ac, txid);
                $("#actype").text(txInfo.type.replace("Transaction", "")); //txInfo.type.replace("Transaction", "")
                $("#actxid").text(txInfo.txid); //txInfo.txid
                $("#acblockindex").empty();
                $("#acblockindex").append("<a href='" + WebBrowser.Url.href_acblock(txInfo.blockindex) + "'>" + txInfo.blockindex + "</a>"); //txInfo.blockindex
                $("#actxsize").text(txInfo.size + " bytes"); //txInfo.size 
                $("#acsysfee").text(txInfo["sys_fee"] + " gas"); //txInfo["sys_fee"] + " gas"
                $("#acnetfee").text(txInfo["net_fee"] + " gas"); //txInfo["net_fee"] + " gas"
                //let ajax: Ajax = new Ajax();
                let blocks = yield WebBrowser.WWW.getacblock(ac, txInfo.blockindex); //let blocks: Block[] = await ajax.post('getblock', [txInfo.blockindex]);
                let block = blocks[0];
                let time = WebBrowser.DateTool.getTime(block.time);
                $("#actransaction-time").text(time);
                //let allAsset: Asset[] = await WWW.api_getAllAssets();
                // txInfo.vin = JSON.parse(txInfo.vin.toString());
                let arr = new Array();
                // for (let index = 0; index < txInfo.vin.length; index++) {
                // 	const vin = txInfo.vin[index];
                // 	try {
                // 		let txInfo: Tx = await WWW.getappchainrawtransaction(ac,vin.txid);
                // 		let vout = txInfo.vout[vin.vout]
                // 		let address: string = vout.address;
                // 		let value: string = vout.value;
                // 		let name = CoinTool.assetID2name[vout.asset];
                // 		arr.push({ vin: vin.txid, vout: vin.vout, addr: address, name: name, amount: value });
                // 	} catch (error) {
                // 	}
                // }
                $("#acfrom").empty();
                let array = WebBrowser.Transaction.groupByaddr(arr);
                for (let index = 0; index < array.length; index++) {
                    const item = array[index];
                    let html = "";
                    html += '<div class="line" > <div class="title-nel" > <span>Address </span></div >';
                    html += '<div class="content-nel" > <span id="size" >' + item.addr + ' </span></div > </div>';
                    for (let i = 0; i < item.data.length; i++) {
                        const element = item.data[i];
                        html += '<div class="line" > <div class="title-nel" > <span>' + element.name + ' </span></div >';
                        html += '<div class="content-nel" > <span id="size" >' + element.amount + ' </span></div > </div>';
                    }
                    $("#acfrom").append(html);
                }
                $("#acto").empty();
                // txInfo.vout = JSON.parse(txInfo.vout.toString());
                // txInfo.vout.forEach(vout => {
                // 	let name = CoinTool.assetID2name[vout.asset];
                // 	let sign: string = "";
                // 	if (array.find(item => item.addr == vout.address)) {
                // 		sign = "(change)"
                // 	}
                // 	let html = "";
                // 	html += '<div class="line" > <div class="title-nel" > <span>Address </span></div >';
                // 	html += '<div class="content-nel" > <span id="size" >' + vout.address + ' </span></div > </div>';
                // 	html += '<div class="line" > <div class="title-nel" > <span>' + name + ' </span></div >';
                // 	html += '<div class="content-nel" > <span id="size" >' + vout.value + sign + ' </span></div > </div>';
                // 	$("#acto").append(html);
                // });
                $("#actxidnep5").empty();
                let txidNep = yield WebBrowser.WWW.api_getnep5transferbytxid(txid);
                //console.log(txidNep);
                if (txidNep) {
                    $(".actxidnep-warp").show();
                    txidNep.forEach((item) => {
                        this.loadTxidNep5View(item.asset, item.from, item.to, item.value);
                    });
                }
                else {
                    $(".actxidnep-warp").hide();
                }
            });
        }
        loadTxidNep5View(asset, from, to, value) {
            return __awaiter(this, void 0, void 0, function* () {
                let href = WebBrowser.Url.href_nep5(asset);
                let nep5Name = yield WebBrowser.WWW.api_getnep5(asset);
                let html = `
                    <tr>
                    <td> <a href="` + href + `" target="_self">` + nep5Name[0].name + `</a></td>
                    <td>` + from + `</td>
                    <td>` + to + `</td>
                    <td>` + value + `</td>
                    </tr>`;
                $("#actxidnep5").append(html);
            });
        }
        static groupByaddr(arr) {
            var map = {}, dest = [];
            for (var i = 0; i < arr.length; i++) {
                var ai = arr[i];
                if (!map[ai.addr]) {
                    dest.push({
                        addr: ai.addr,
                        data: [ai]
                    });
                    map[ai.addr] = ai;
                }
                else {
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
    WebBrowser.ACTransaction = ACTransaction;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../app.ts"/>
var WebBrowser;
/// <reference path="../app.ts"/>
(function (WebBrowser) {
    class Nep5page {
        constructor(app) {
            this.div = document.getElementById("asset-info");
            this.footer = document.getElementById('footer-box');
            this.actxcount = 0;
            this.acblockcount = 0;
            this.acaddcount = 0;
            this.app = app;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "asset_title",
                    // "asset_id",
                    "asset_asset",
                    "asset_type",
                    "asset_ava",
                    "asset_pre",
                    "asset_adm",
                    "asset_title2",
                    "asset_rank",
                    "asset_addr",
                    "asset_balance",
                    "asset_title3",
                    "asset_txid",
                    "asset_from",
                    "asset_to",
                    "asset_height",
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.getLangs();
                var nep5id = WebBrowser.locationtool.getParam();
                let href = WebBrowser.locationtool.getUrl() + "/assets";
                let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get('asset_goallasset') + '</a>';
                $("#goallasset").empty();
                $("#goallasset").append(html);
                this.loadNep5InfoView(nep5id);
                this.acaddcount = yield WebBrowser.WWW.api_getAppchainAddrcount(nep5id);
                this.acblockcount = yield WebBrowser.WWW.api_getAppchainBlockcount(nep5id);
                this.rankPageUtil = new WebBrowser.PageUtil(this.acblockcount[0].blockcount, 10);
                this.updateAssetBalanceView(nep5id, this.rankPageUtil);
                var assetType = WebBrowser.locationtool.getType();
                if (assetType == 'nep5') {
                    //$(".asset-nep5-warp").show();
                    this.actxcount = yield WebBrowser.WWW.getappchaintxcount(nep5id);
                    this.pageUtil = new WebBrowser.PageUtil(this.actxcount[0].txcount, 10);
                    this.updateNep5TransView(nep5id, this.pageUtil);
                    $(".asset-tran-warp").show();
                }
                else {
                    //$(".asset-nep5-warp").hide();
                    $(".asset-tran-warp").hide();
                }
                //排行翻页
                $("#assets-balance-next").off("click").click(() => {
                    if (this.rankPageUtil.currentPage == this.rankPageUtil.totalPage) {
                        this.rankPageUtil.currentPage = this.rankPageUtil.totalPage;
                    }
                    else {
                        this.rankPageUtil.currentPage += 1;
                        this.updateAssetBalanceView(nep5id, this.rankPageUtil);
                    }
                });
                $("#assets-balance-previous").off("click").click(() => {
                    if (this.rankPageUtil.currentPage <= 1) {
                        this.rankPageUtil.currentPage = 1;
                    }
                    else {
                        this.rankPageUtil.currentPage -= 1;
                        this.updateAssetBalanceView(nep5id, this.rankPageUtil);
                    }
                });
                //交易翻页
                $("#assets-tran-next").off("click").click(() => {
                    if (this.pageUtil.currentPage == this.pageUtil.totalPage) {
                        this.pageUtil.currentPage = this.pageUtil.totalPage;
                    }
                    else {
                        this.pageUtil.currentPage += 1;
                        this.updateNep5TransView(nep5id, this.pageUtil);
                    }
                });
                $("#assets-tran-previous").off("click").click(() => {
                    if (this.pageUtil.currentPage <= 1) {
                        this.pageUtil.currentPage = 1;
                    }
                    else {
                        this.pageUtil.currentPage -= 1;
                        this.updateNep5TransView(nep5id, this.pageUtil);
                    }
                });
                this.div.hidden = false;
                this.footer.hidden = false;
            });
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        //nep5的详情
        loadNep5InfoView(nep5id) {
            WebBrowser.WWW.api_getAppchain(nep5id).then((data) => {
                var nep5 = data[0];
                let time = WebBrowser.DateTool.getTime(nep5.timestamp);
                $("#name").text(nep5.name);
                $("#type").text(time);
                $("#id").text(nep5.hash);
                $("#available").text(this.acblockcount.toString());
                $("#precision").text(this.actxcount.toString());
                $("#admin").text(this.acaddcount.toString());
            });
        }
        updateAssetBalanceView(nep5id, pageUtil) {
            return __awaiter(this, void 0, void 0, function* () {
                let balanceList = yield WebBrowser.WWW.getappchainblocks(nep5id, pageUtil.pageSize, pageUtil.currentPage);
                $("#assets-balance-list").empty();
                if (balanceList) {
                    // let rank = (pageUtil.currentPage-1)*10 +1;
                    balanceList.forEach((item) => {
                        let href = WebBrowser.Url.href_address(item.hash);
                        this.loadAssetBalanceView(item.hash, item.size, item.time, item.index, item.tx.length);
                        //  rank++;
                    });
                }
                else {
                    let html = '<tr><td colspan="3" >' + this.app.langmgr.get('no_data') + '</td></tr>';
                    $("#assets-balance-list").append(html);
                    if (pageUtil.currentPage == 1) {
                        $(".asset-balance-page").hide();
                    }
                    else {
                        $("#assets-balance-next").addClass('disabled');
                        $(".asset-balance-page").show();
                    }
                }
                if (pageUtil.totalCount > 10) {
                    if (pageUtil.totalPage - pageUtil.currentPage) {
                        $("#assets-balance-next").removeClass('disabled');
                    }
                    else {
                        $("#assets-balance-next").addClass('disabled');
                    }
                    if (pageUtil.currentPage - 1) {
                        $("#assets-balance-previous").removeClass('disabled');
                    }
                    else {
                        $("#assets-balance-previous").addClass('disabled');
                    }
                    let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
                    let maxNum = pageUtil.totalCount;
                    let diffNum = maxNum - minNum;
                    if (diffNum > 10) {
                        maxNum = pageUtil.currentPage * pageUtil.pageSize;
                    }
                    let pageMsg = "Balance Rank " + (minNum + 1) + " to " + maxNum + " of " + pageUtil.totalCount;
                    $("#assets-balance-msg").html(pageMsg);
                    $(".asset-balance-page").show();
                }
                else {
                    $(".asset-balance-page").hide();
                }
            });
        }
        updateNep5TransView(nep5id, pageUtil) {
            return __awaiter(this, void 0, void 0, function* () {
                let tranList = yield WebBrowser.WWW.getappchainrawtransactions(nep5id, pageUtil.pageSize, pageUtil.currentPage);
                $("#assets-tran-list").empty();
                if (tranList) {
                    tranList.forEach((item) => {
                        // if (!item.vin) {
                        //     item.type = '-'
                        // }
                        if (!item.size) {
                            item.type = '-';
                        }
                        this.loadAssetTranView(item.txid, item.type, item.size, item.blockindex);
                    });
                }
                else {
                    let html = '<tr><td colspan="4" >' + this.app.langmgr.get('no_data') + '</td></tr>';
                    $("#assets-tran-list").append(html);
                    if (pageUtil.currentPage == 1) {
                        $(".asset-tran-page").hide();
                    }
                    else {
                        $(".asset-tran-page").show();
                    }
                }
                if (pageUtil.totalCount > 10) {
                    if (pageUtil.totalPage - pageUtil.currentPage) {
                        $("#assets-tran-next").removeClass('disabled');
                    }
                    else {
                        $("#assets-tran-next").addClass('disabled');
                    }
                    if (pageUtil.currentPage - 1) {
                        $("#assets-tran-previous").removeClass('disabled');
                    }
                    else {
                        $("#assets-tran-previous").addClass('disabled');
                    }
                    let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
                    let maxNum = pageUtil.totalCount;
                    let diffNum = maxNum - minNum;
                    if (diffNum > 10) {
                        maxNum = pageUtil.currentPage * pageUtil.pageSize;
                    }
                    let pageMsg = "Transactions " + (minNum + 1) + " to " + maxNum + " of " + pageUtil.totalCount;
                    $("#assets-tran-msg").html(pageMsg);
                    $(".asset-tran-page").show();
                }
                else {
                    $(".asset-tran-page").hide();
                }
            });
        }
        loadAssetTranView(txid, from, to, blockindex) {
            let html = `
                    <tr>
                    <td><a class="code omit" href="` + WebBrowser.Url.href_transaction(txid) + `" target="_self">` + txid.replace('0x', '') + `
                    </a></td>
                    <td>` + from + `
                    </td>
                    <td>` + to + `
                    </td>
                    <td>` + blockindex + `</td>
                    </tr>`;
            $("#assets-tran-list").append(html);
        }
        loadAssetBalanceView(href, size, time, height, txcount) {
            //let tm = DateTool.getTime(balancelist.timestamp);
            let html = `
                    <tr>
                    <td><a target="_self" href="` + href + `">` + href + `
                    </a></td>
                     <td>` + size + `</td> 
                    <td>` + time + `
                    </td>
                    <td>` + height + `</td>
                    <td>` + txcount + `</td>
                    </tr>`;
            $("#assets-balance-list").append(html);
        }
    }
    WebBrowser.Nep5page = Nep5page;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class Nep5Info {
        constructor(app) {
            this.div = document.getElementById("nep5asset-info");
            this.footer = document.getElementById('footer-box');
            this.app = app;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                let page_lang = [
                    "nep5asset_title",
                    "nep5assetid",
                    "nep5name",
                    "nep5assettotalsupply",
                    "nep5symbol",
                    "nep5decimals"
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.getLangs();
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain) {
                    var nep5assetid = WebBrowser.locationtool.getParam();
                    var href = WebBrowser.locationtool.getUrl() + "/asset/" + appchain;
                }
                else {
                    var href = WebBrowser.locationtool.getUrl();
                    var nep5assetid = WebBrowser.locationtool.getParam();
                }
                if (!nep5assetid.startsWith('0x')) {
                    nep5assetid = '0x' + nep5assetid;
                }
                let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get("back_chainmessage") + '</a>';
                $("#nep5asset").empty();
                $("#nep5asset").append(html);
                this.loadAssetInfoView(nep5assetid);
                this.div.hidden = false;
                this.footer.hidden = false;
            });
        }
        //跳转页面
        doGoPage(nep5assetid, gopage) {
            let page = parseInt($("#nep5assets-input").val());
            if (page && page > this.rankPageUtil.totalPage) {
                page = this.rankPageUtil.totalPage;
                $("#nep5assets-input").val(this.rankPageUtil.totalPage);
            }
            else if (page < 0) {
                page = 1;
                $("#nep5assets-input").val(1);
            }
            if (gopage) {
                this.rankPageUtil.currentPage = page;
                this.updateAssetBalanceView(nep5assetid, this.rankPageUtil);
                $("#nep5assets-input").val('');
            }
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        loadAssetInfoView(nep5assetid) {
            return __awaiter(this, void 0, void 0, function* () {
                if (WebBrowser.locationtool.getParam3()) {
                    var appchain = WebBrowser.locationtool.getParam3();
                    var asset = yield WebBrowser.WWW.api_getappchainnep5(appchain, nep5assetid);
                }
                else {
                    var asset = yield WebBrowser.WWW.api_getnep5(nep5assetid);
                }
                asset = asset[0];
                if (asset.symbol.indexOf("{") >= 0) {
                    var json = JSON.parse(asset.symbol);
                    for (var i = 0; i < json.length; i++) {
                        if (this.app.langmgr.type == "cn" && json[i].lang == "zh-CN") {
                            asset.symbol = json[i].name;
                            break;
                        }
                        else if (this.app.langmgr.type == json[i].lang) {
                            asset.symbol = json[i].name;
                            break;
                        }
                    }
                    var json = JSON.parse(asset.name);
                    for (var i = 0; i < json.length; i++) {
                        if (this.app.langmgr.type == "cn" && json[i].lang == "zh-CN") {
                            asset.name = json[i].name;
                            break;
                        }
                        else if (this.app.langmgr.type == json[i].lang) {
                            asset.name = json[i].name;
                            break;
                        }
                    }
                }
                $("#nep5_assetid").text(asset.assetid);
                $("#nep5_name").text(asset.name);
                $("#nep5_assettotalsupply").text(asset.totalsupply);
                $("#nep5_symbol").text(asset.symbol);
                $("#nep5_decimals").text(asset.decimals);
            });
        }
        updateAssetBalanceView(nep5assetid, pageUtil) {
            return __awaiter(this, void 0, void 0, function* () {
                let balanceList = yield WebBrowser.WWW.getrankbyasset(nep5assetid, pageUtil.pageSize, pageUtil.currentPage);
                $("#nep5assets-balance-list").empty();
                if (balanceList) {
                    let rank = (pageUtil.currentPage - 1) * 10 + 1;
                    balanceList.forEach((item) => {
                        let href = WebBrowser.Url.href_address(item.addr);
                        this.loadAssetBalanceView(rank, href, item.addr, item.balance);
                        rank++;
                    });
                }
                else {
                    let html = `<tr><td colspan="3" >There is no data</td></tr>`;
                    if (location.pathname == '/zh/') {
                        html = `<tr><td colspan="3" >没有数据</td></tr>`;
                    }
                    $("#nep5assets-balance-list").append(html);
                    if (pageUtil.currentPage == 1) {
                        $(".nep5asset-balance-page").hide();
                    }
                    else {
                        $("#nep5assets-balance-next").addClass('disabled');
                        $(".nep5asset-balance-page").show();
                    }
                }
                if (pageUtil.totalCount > 10) {
                    if (pageUtil.totalPage - pageUtil.currentPage) {
                        $("#nep5assets-balance-next").removeClass('disabled');
                    }
                    else {
                        $("#nep5assets-balance-next").addClass('disabled');
                    }
                    if (pageUtil.currentPage - 1) {
                        $("#nep5assets-balance-previous").removeClass('disabled');
                    }
                    else {
                        $("#nep5assets-balance-previous").addClass('disabled');
                    }
                    //let minNum = pageUtil.currentPage * pageUtil.pageSize - pageUtil.pageSize;
                    //let maxNum = pageUtil.totalCount;
                    //let diffNum = maxNum - minNum;
                    //if (diffNum > 10) {
                    //    maxNum = pageUtil.currentPage * pageUtil.pageSize;
                    //}
                    //let pageMsg = "Banlance Rank " + (minNum + 1) + " to " + maxNum + " of " + pageUtil.totalCount;
                    let pageMsg = "Page " + pageUtil.currentPage + " , " + pageUtil.totalPage + " pages in total";
                    if (location.pathname == '/zh/') {
                        pageMsg = "第 " + pageUtil.currentPage + " 页，共 " + pageUtil.totalPage + " 页";
                    }
                    $("#nep5assets-balance-msg").html(pageMsg);
                    $(".nep5asset-balance-page").show();
                }
                else {
                    $(".nep5asset-balance-page").hide();
                }
            });
        }
        loadAssetBalanceView(rank, href, address, balance) {
            let html = `
                    <tr>
                    <td>` + rank + `
                    </td>
                    <td><a target="_self" href="` + href + `">` + address + `
                    </a></td>
                    <td>` + balance + `</td>
                    </tr>`;
            $("#nep5assets-balance-list").append(html);
        }
    }
    WebBrowser.Nep5Info = Nep5Info;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class ContractStateInfo {
        constructor(app) {
            this.div = document.getElementById("contract-info");
            this.footer = document.getElementById('footer-box');
            this.app = app;
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
                ];
                page_lang.forEach(lang => {
                    document.getElementById(lang).textContent = this.app.langmgr.get(lang);
                });
                this.langType = this.app.langmgr.type;
            }
        }
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                this.getLangs();
                var appchain = WebBrowser.locationtool.getParam3();
                if (appchain) {
                    var contract = WebBrowser.locationtool.getParam();
                    var href = WebBrowser.locationtool.getUrl() + "/asset/" + appchain;
                }
                else {
                    var href = WebBrowser.locationtool.getUrl();
                    var contract = WebBrowser.locationtool.getParam();
                }
                let html = '<a href="' + href + '" target="_self">&lt&lt&lt' + this.app.langmgr.get("back_chainmessage") + '</a>';
                $("#contract").empty();
                $("#contract").append(html);
                this.loadAssetInfoView(contract);
                this.div.hidden = false;
                this.footer.hidden = false;
            });
        }
        close() {
            this.div.hidden = true;
            this.footer.hidden = true;
        }
        loadAssetInfoView(contract) {
            return __awaiter(this, void 0, void 0, function* () {
                if (WebBrowser.locationtool.getParam3()) {
                    var appchain = WebBrowser.locationtool.getParam3();
                    var contractstate = yield WebBrowser.WWW.api_getContractState(appchain, contract);
                }
                else {
                    var contractstate = yield WebBrowser.WWW.api_getContractState("", contract);
                }
                $("#contract_hash").text(contractstate[0].contract);
                $("#contract_name").text(contractstate[0].name);
                $("#contract_author").text(contractstate[0].author);
                $("#contract_email").text(contractstate[0].email);
                $("#contract_decimals").text(contractstate[0].description);
            });
        }
    }
    WebBrowser.ContractStateInfo = ContractStateInfo;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../app.ts"/>
var WebBrowser;
/// <reference path="../app.ts"/>
(function (WebBrowser) {
    class Notfound {
        constructor(app) {
            this.app = app;
        }
        getLangs() {
            if (this.langType != this.app.langmgr.type) {
                this.langType = this.app.langmgr.type;
            }
        }
        start() {
            this.getLangs();
            this.btn = document.getElementById("notfound");
            this.btn.onclick = () => {
                window.location.href = WebBrowser.locationtool.getUrl();
            };
            $(".notfound").show();
        }
        close() {
            $('.notfound').hide();
        }
    }
    WebBrowser.Notfound = Notfound;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class locationtool {
        static getNetWork() {
            var hash = window.location.hash;
            let arr = hash.split("/");
            return arr[0].replace("#", "");
        }
        static getUrl() {
            var href = window.location.href;
            let arr = href.split("#");
            var hash = window.location.hash;
            let hasharr = hash.split("/");
            let net = (hasharr[0] != "#mainnet" && hasharr[0] != "#testnet") ? "#mainnet" : hasharr[0];
            return arr[0] + net;
        }
        static getPage() {
            var page = location.hash;
            var arr = page.split('/');
            if (arr.length == 1 && (arr[0] == "#mainnet" || arr[0] == "#testnet"))
                page = 'explorer';
            else
                page = arr[1];
            return page;
        }
        static getacPage() {
            var page = location.hash;
            var arr = page.split('/');
            if (arr.length == 1 && (arr[0] == "#mainnet" || arr[0] == "#testnet"))
                page = 'appchainblock';
            else
                page = arr[1];
            return page;
        }
        static getactxPage() {
            var page = location.hash;
            var arr = page.split('/');
            if (arr.length == 1 && (arr[0] == "#mainnet" || arr[0] == "#testnet"))
                page = 'appchaintransaction';
            else
                page = arr[1];
            return page;
        }
        static getnep5Page() {
            var page = location.hash;
            var arr = page.split('/');
            if (arr.length == 1 && (arr[0] == "#mainnet" || arr[0] == "#testnet"))
                page = 'nep5info';
            else
                page = arr[1];
            return page;
        }
        static getParam() {
            var page = location.hash;
            var arr = page.split('/');
            return arr[2];
        }
        static getParam2() {
            var page = location.hash;
            var arr = page.split('/');
            return arr[2];
        }
        static getParam3() {
            var page = location.hash;
            var arr = page.split('/');
            return arr[3];
        }
        static getType() {
            var page = location.hash;
            var arr = page.split('/');
            return arr[1];
        }
    }
    WebBrowser.locationtool = locationtool;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class NumberTool {
        static toThousands(num) {
            var num = (num || 0).toString(), result = '';
            while (num.length > 3) {
                result = ',' + num.slice(-3) + result;
                num = num.slice(0, num.length - 3);
            }
            if (num) {
                result = num + result;
            }
            return result;
        }
    }
    WebBrowser.NumberTool = NumberTool;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../app.ts"/>
/// <reference path="../Entitys.ts"/>
var WebBrowser;
/// <reference path="../app.ts"/>
/// <reference path="../Entitys.ts"/>
(function (WebBrowser) {
    class Route {
        constructor(app) {
            this.pagelist = new Array();
            this.app = app;
        }
        start() {
            this.pagelist.push(this.app.indexpage);
            this.pagelist.push(this.app.blocks);
            this.pagelist.push(this.app.block);
            this.pagelist.push(this.app.transactions);
            this.pagelist.push(this.app.transaction);
            this.pagelist.push(this.app.addresses);
            this.pagelist.push(this.app.address);
            this.pagelist.push(this.app.assets);
            this.pagelist.push(this.app.assetinfo);
            this.pagelist.push(this.app.nep5info);
            this.pagelist.push(this.app.appchainblock);
            this.pagelist.push(this.app.appchaintransaction);
            this.pagelist.push(this.app.guiinfo);
            this.pagelist.push(this.app.contractstate);
            this.closePages();
            var hash = location.hash;
            if (hash == "") {
                this.app.netmgr.change(() => {
                    window.location.hash = "#mainnet";
                });
                return;
            }
            var netType = 1;
            let arr = hash.split('/');
            if (arr[0] == "#testnet") {
                netType = 2;
            }
            if (netType == 1) {
                this.app.netWork.changeNetWork('mainnet');
            }
            else {
                this.app.netWork.changeNetWork('testnet');
            }
            this.app.netmgr.change(() => {
                WebBrowser.CoinTool.initAllAsset();
                var page = this.render();
                page.start();
            }, netType);
        }
        render() {
            var page = WebBrowser.locationtool.getPage();
            switch (page) {
                case "explorer":
                    this.app.navbar.indexBtn.classList.add("active");
                    return this.app.indexpage;
                case "blocks":
                    this.app.navbar.blockBtn.classList.add("active");
                    return this.app.blocks;
                case "block":
                    this.app.navbar.blockBtn.classList.add("active");
                    return this.app.block;
                case "transactions":
                    this.app.navbar.txlistBtn.classList.add("active");
                    return this.app.transactions;
                case "transaction":
                    this.app.navbar.txlistBtn.classList.add("active");
                    return this.app.transaction;
                case "addresses":
                    this.app.navbar.addrsBtn.classList.add("active");
                    return this.app.addresses;
                case "address":
                    this.app.navbar.addrsBtn.classList.add("active");
                    return this.app.address;
                case "assets":
                    this.app.navbar.assetBtn.classList.add("active");
                    return this.app.assets;
                case "nep5info":
                    this.app.navbar.assetBtn.classList.add("active");
                    return this.app.nep5info;
                case "appchainblock":
                    this.app.navbar.assetBtn.classList.add("active");
                    return this.app.appchainblock;
                case "appchaintransaction":
                    this.app.navbar.assetBtn.classList.add("active");
                    return this.app.appchaintransaction;
                case "gui":
                    this.app.navbar.guiBtn.classList.add("active");
                    return this.app.guiinfo;
                // case "nnsevent":
                //     this.app.navbar.nnsBtn.classList.add("active");
                //     return this.app.nnses;
                // case "nnsauction":
                //     this.app.navbar.nnsBtn.classList.add("active");
                //     return this.app.nnsbeing;
                // case "nnsrank":
                //     this.app.navbar.nnsBtn.classList.add("active");
                //     return this.app.nnsrank;
                // case "nns":
                //     this.app.navbar.nnsBtn.classList.add("active");
                //     return this.app.nnsinfo;
                case "asset":
                    this.app.navbar.assetBtn.classList.add("active");
                    return this.app.assetinfo;
                case "nep5":
                    return this.app.nep5;
                case "contract":
                    return this.app.contractstate;
                default:
                    return this.app.notfound;
            }
        }
        closePages() {
            let i = 0;
            while (i < this.pagelist.length) {
                this.pagelist[i].close();
                i++;
                this.app.navbar.indexBtn.classList.remove("active");
                this.app.navbar.blockBtn.classList.remove("active");
                this.app.navbar.txlistBtn.classList.remove("active");
                this.app.navbar.addrsBtn.classList.remove("active");
                this.app.navbar.assetBtn.classList.remove("active");
                this.app.navbar.guiBtn.classList.remove("active");
                // this.app.navbar.nnsBtn.classList.remove("active");
            }
        }
    }
    WebBrowser.Route = Route;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class LangBase {
        get(key) {
            if (this.lang.hasOwnProperty(key)) {
                return this.lang[key];
            }
            return "";
        }
    }
    WebBrowser.LangBase = LangBase;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./LangBase.ts" />
var WebBrowser;
/// <reference path="./LangBase.ts" />
(function (WebBrowser) {
    class LangCN extends WebBrowser.LangBase {
        constructor() {
            super(...arguments);
            this.lang = {
                connect_nodes_error: "服务器通讯异常，请刷新重新链接！",
                // navbar
                nav_indexa: "浏览器",
                nav_browsea: "浏览",
                nav_blocka: "区块",
                nav_txlista: "交易",
                nav_addrsa: "地址",
                nav_guia: "钱包",
                nav_asseta: "应用链",
                nav_errContent: "请输入正确的地址",
                // network
                net_testa: "测试网",
                net_maina: "主网",
                net_cn: "中文",
                net_en: "English",
                // index
                i_summary: "统计",
                i_lastblock: "上一个区块",
                i_allblock: "查看所有区块",
                i_totaltrans: "交易总数",
                i_alltxlist: "查看所有交易",
                i_walletcreate: "已创建的钱包地址数",
                i_alladdress: "查看所有地址",
                i_last10: "最新的10个区块",
                i_appchain: "哈希",
                i_last10_height: "高度",
                i_last10_size: "大小",
                i_last10_ctm: "创建时间",
                i_last10_txcount: "交易数量",
                i_viewblocks: "查看所有 >>>>",
                i_last10t: "最新的10笔交易",
                i_last10t_txid: "交易ID",
                i_last10t_type: "类型",
                i_last10t_height: "高度",
                i_last10t_size: "大小",
                i_viewtxlist: "查看所有 >>>>",
                i_assets_title: "资产",
                i_nep5assets_asset: "资产ID",
                i_nep5assets_ava: "资产全称",
                i_nep5assets_pre: "总量",
                i_nep5assets_val: "资产",
                i_nep5assets_id: "小数点后位数",
                // blocks
                blocks_title: "区块列表",
                blocks_hash: "块哈希",
                blocks_height: "区块高度",
                blocks_size: "大小",
                blocks_time: "时间",
                blocks_txcount: "交易数量",
                // block
                block_info_title: "区块信息",
                blocks_appchain: "应用链",
                block_info_block: "区块",
                block_info_hash: "哈希",
                block_info_time: "时间",
                block_info_size: "大小",
                block_info_pre: "上一个区块",
                block_info_next: "下一个区块",
                block_info_tran: "交易",
                block_info_txid: "交易ID",
                block_info_type: "类型",
                block_info_txsize: "大小",
                block_info_ver: "版本",
                block_goallblock: "返回",
                // app chain block
                acblock_info_title: "应用链区块列表",
                acblock_info_appchain: "应用链哈希",
                acblock_info_block: "区块",
                acblock_info_hash: "哈希",
                //block_info_chainhash: "App Chain Hash",
                acblock_info_time: "时间",
                acblock_info_size: "大小",
                acblock_info_pre: "上一个块",
                acblock_info_next: "下一个快",
                acblock_info_tran: "交易",
                acblock_info_txid: "交易ID",
                acblock_info_type: "类型",
                acblock_info_txsize: "大小",
                acblock_info_ver: "版本",
                acblock_goallblock: "返回",
                // transactions
                trans_title: "交易列表",
                trans_txid: "交易ID",
                trans_type: "类型",
                trans_size: "大小",
                trans_height: "区块高度",
                // transaction
                tran_title: "交易信息",
                tran_title_1: "交易",
                tran_txid: "交易ID",
                tran_type: "类型",
                tran_netfee: "网络费用",
                tran_sysfee: "系统费用",
                tran_gas_limit: "Gas Limit",
                tran_gas_price: "Gas Price",
                tran_size: "大小",
                tran_height: "区块高度",
                tran_time: "时间",
                tran_input: "输入",
                tran_output: "输出",
                tran_method: "Contract Method",
                tran_method_calltype: "调用方式",
                tran_method_method: "调用方法",
                tran_method_contract: "调用地址",
                tran_method_hash: "哈希",
                tran_nep5: "Nep5",
                tran_nep5_asset: "资产",
                tran_nep5_from: "转出",
                tran_nep5_to: "转入",
                tran_nep5_value: "交易金额",
                tran_goalltran: "返回",
                // appchain transaction
                actran_title: "应用链交易列表",
                actran_title_1: "交易",
                actran_txid: "交易ID",
                actran_type: "类型",
                actran_netfee: "网络费用",
                actran_sysfee: "系统费用",
                actran_size: "大小",
                actran_height: "区块高度",
                actran_time: "时间",
                actran_input: "输入",
                actran_output: "输出",
                actran_nep5: "Nep5",
                actran_nep5_asset: "资产",
                actran_nep5_from: "从",
                actran_nep5_to: "到",
                actran_nep5_value: "价值",
                actran_goalltran: "返回",
                // addresses
                addrs_title: "地址列表",
                addrs_addr: "地址",
                addrs_first: "首次交易时间",
                addrs_last: "上次交易时间",
                addrs_txcount: "交易笔数",
                // address
                addr_title: "地址详情",
                addr_addr: "地址",
                addr_ctm: "创建时间",
                addr_tran: "交易总数",
                addr_title2: "资产",
                addr_title3: "交易",
                addr_txid: "交易ID",
                addr_type: "交易高度",
                addr_time: "时间",
                addr_utxo_asset: "资产",
                addr_utxo_number: "交易数量",
                addr_utxo_txid: "交易ID",
                addr_goalladress: "返回",
                // appchains
                assets_title: "应用链",
                assets_asset: "应用链名",
                assets_id: "应用链哈希",
                assets_type: "创建者",
                assets_ava: "生成时间",
                assets_pre: "应用链版本",
                //nep5assets
                nep5assets_asset: "资产ID",
                nep5assets_ava: "资产全称",
                nep5assets_pre: "总量",
                nep5assets_val: "资产",
                nep5assets_id: "小数点后位数",
                contract_title: "合约信息",
                contracthash: "哈希",
                contractname: "名称",
                contractauthor: "作者",
                contractemail: "邮箱",
                contractdescription: "描述",
                //nep5assetinfo
                nep5asset_title: "资产详情",
                nep5assetid: "资产ID",
                nep5name: "所属",
                nep5assettotalsupply: "总量",
                nep5symbol: "资产",
                nep5decimals: "小数点后位数",
                back_chainmessage: "返回",
                // appchain
                asset_title: "应用链信息",
                asset_id: "应用链",
                asset_asset: "应用链名",
                asset_type: "生成时间",
                asset_ava: "种子节点",
                asset_pre: "共识节点",
                asset_adm: "创建者",
                asset_title2: "应用链区块",
                asset_rank: "哈希",
                asset_addr: "大小",
                asset_balance: "时间",
                asset_blockheight: "高度",
                asset_tx: "交易数",
                asset_title3: "应用链交易",
                asset_txid: "交易ID",
                asset_from: "类型",
                asset_to: "大小",
                asset_height: "区块高度",
                asset_goallasset: "返回",
                no_data: "没有数据",
                ac_last10: "最新的10个区块",
                ac_appchain: "哈希",
                ac_last10_height: "高度",
                ac_last10_size: "大小",
                ac_last10_ctm: "创建时间",
                ac_last10_txcount: "交易数量",
                ac_viewblocks: "查看所有 >>>>",
                ac_last10t: "最新的10笔交易",
                ac_last10t_txid: "交易ID",
                ac_last10t_type: "类型",
                ac_last10t_height: "高度",
                ac_last10t_size: "大小",
                ac_viewtxlist: "查看所有 >>>>",
                ac_chaindata: "应用链数据",
                ac_assets_title: "资产",
                ac_nep5assets_asset: "资产ID",
                ac_nep5assets_ava: "资产全称",
                ac_nep5assets_pre: "总量",
                ac_nep5assets_val: "资产",
                ac_nep5assets_id: "小数点后位数",
                ac_summary: "统计",
                ac_lastblock: "上一个区块",
                ac_allblock: "查看所有区块",
                ac_totaltrans: "交易总数",
                ac_alltxlist: "查看所有交易",
                ac_walletcreate: "已创建的钱包地址数",
                ac_alladdress: "查看所有地址",
            };
        }
    }
    WebBrowser.LangCN = LangCN;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./LangBase.ts" />
var WebBrowser;
/// <reference path="./LangBase.ts" />
(function (WebBrowser) {
    class LangEN extends WebBrowser.LangBase {
        constructor() {
            super(...arguments);
            this.lang = {
                connect_nodes_error: "Abnormal connection with the server, please refresh and reconnect.",
                // navbar
                nav_indexa: "Explorer",
                nav_browsea: "Browse",
                nav_blocka: "Blocks",
                nav_txlista: "Transactions",
                nav_addrsa: "Addresses",
                nav_guia: "WEB-GUI",
                nav_asseta: "App Chains",
                nav_errContent: "Please enter the correct address",
                // network
                net_testa: "TestNet",
                net_maina: "MainNet",
                net_cn: "中文",
                net_en: "English",
                // index
                i_summary: "Dashboard",
                i_lastblock: "Last block",
                i_allblock: "View all blocks",
                i_totaltrans: "Total transactions",
                i_alltxlist: "View all transactions",
                i_walletcreate: "Wallet address created",
                i_alladdress: "View all addresses",
                i_last10: "Last 10 Blocks",
                i_appchain: "Hash",
                i_last10_height: "Height",
                i_last10_size: "Size",
                i_last10_ctm: "Time Created",
                i_last10_txcount: "Tx count",
                i_viewblocks: "View all >>>>",
                i_last10t: "Last 10 Transactions",
                i_last10t_txid: "TXID",
                i_last10t_type: "Type",
                i_last10t_height: "Height",
                i_last10t_size: "Size",
                i_viewtxlist: "View all >>>>",
                i_assets_title: "Asset",
                i_nep5assets_asset: "Asset ID",
                i_nep5assets_ava: "Name",
                i_nep5assets_pre: "Total Supply",
                i_nep5assets_val: "Symbol",
                i_nep5assets_id: "Decimals",
                // blocks
                blocks_title: "Blocks",
                blocks_hash: "Hash",
                blocks_appchain: "Hash",
                blocks_height: "Height",
                blocks_size: "Size",
                blocks_time: "Time",
                blocks_txcount: "Tx count",
                // block
                block_info_title: "Block Information",
                block_info_block: "Block",
                block_info_hash: "Hash",
                //block_info_chainhash: "App Chain Hash",
                block_info_time: "Time",
                block_info_size: "Size",
                block_info_pre: "Previous Block",
                block_info_next: "Next Block",
                block_info_tran: "Transactions",
                block_info_txid: "TXID",
                block_info_type: "Type",
                block_info_txsize: "Size",
                block_info_ver: "Version",
                block_goallblock: "Back to all blocks",
                // app chain block
                acblock_info_title: "App Chain Block Information",
                acblock_info_appchain: "AppChain Hash",
                acblock_info_block: "Block",
                acblock_info_hash: "Hash",
                //block_info_chainhash: "App Chain Hash",
                acblock_info_time: "Time",
                acblock_info_size: "Size",
                acblock_info_pre: "Previous Block",
                acblock_info_next: "Next Block",
                acblock_info_tran: "Transactions",
                acblock_info_txid: "TXID",
                acblock_info_type: "Type",
                acblock_info_txsize: "Size",
                acblock_info_ver: "Version",
                acblock_goallblock: "Back to all blocks",
                // transactions
                trans_title: "Transactions",
                trans_txid: "TXID",
                trans_type: "Type",
                trans_size: "Size",
                trans_height: "Height",
                // transaction
                tran_title: "Transaction Information",
                tran_title_1: "Transaction",
                tran_txid: "TXID",
                tran_type: "Type",
                tran_netfee: "Network Fee",
                tran_sysfee: "System Fee",
                tran_gas_limit: "Gas Limit",
                tran_gas_price: "Gas Price",
                tran_size: "Size",
                tran_height: "Height",
                tran_time: "Time",
                tran_input: "Input",
                tran_output: "Output",
                tran_method: "Contract Method",
                tran_method_calltype: "CallType",
                tran_method_method: "Method",
                tran_method_contract: "Contract",
                tran_method_hash: "Hash",
                tran_nep5: "Nep5",
                tran_nep5_asset: "Asset",
                tran_nep5_from: "From",
                tran_nep5_to: "To",
                tran_nep5_value: "Value",
                tran_goalltran: "Back to all transactions",
                // appchain transaction
                actran_title: "App Chain Transaction Information",
                actran_title_1: "Transaction",
                actran_txid: "TXID",
                actran_type: "Type",
                actran_netfee: "Network Fee",
                actran_sysfee: "System Fee",
                actran_size: "Size",
                actran_height: "Height",
                actran_time: "Time",
                actran_input: "Input",
                actran_output: "Output",
                actran_nep5: "Nep5",
                actran_nep5_asset: "Asset",
                actran_nep5_from: "From",
                actran_nep5_to: "To",
                actran_nep5_value: "Value",
                actran_goalltran: "Back to all app chain transactions",
                // addresses
                addrs_title: "Address list",
                addrs_addr: "Address",
                addrs_first: "First transaction time",
                addrs_last: "Last transaction time",
                addrs_txcount: "Txcount",
                // address
                addr_title: "Address Information",
                addr_addr: "Address",
                addr_ctm: "Created",
                addr_tran: "Transactions",
                addr_title2: "Balance",
                addr_title3: "Transactions",
                addr_txid: "TXID",
                addr_type: "Height",
                addr_time: "Time",
                addr_utxo_asset: "Asset",
                addr_utxo_number: "Number",
                addr_utxo_txid: "TXID",
                addr_goalladress: "Back to all addresses",
                // assets
                assets_title: "App Chains",
                assets_asset: "App Chain Name",
                assets_id: "App Chain Hash",
                assets_type: "Owner",
                assets_ava: "Time Created",
                assets_pre: "Version",
                //nep5assets
                nep5assets_asset: "Asset ID",
                nep5assets_ava: "Name",
                nep5assets_pre: "Total Supply",
                nep5assets_val: "Symbol",
                nep5assets_id: "Decimals",
                contract_title: "Contract Information",
                contracthash: "Hash",
                contractname: "Name",
                contractauthor: "Author",
                contractemail: "E-Mail",
                contractdescription: "Description",
                //nep5assetinfo
                nep5asset_title: "Asset Information",
                nep5assetid: "Asset ID",
                nep5name: "Name",
                nep5assettotalsupply: "Total Supply",
                nep5symbol: "Symbol",
                nep5decimals: "Decimals",
                back_chainmessage: "Back to chain message",
                // asset
                asset_title: "App Chain Information",
                asset_id: "App Chain Hash",
                asset_asset: "App Chain Name",
                asset_type: "Time Created",
                asset_ava: "Seed",
                asset_pre: "Validator",
                asset_adm: "Owner",
                asset_title2: "App Chain Blocks",
                asset_rank: "Hash",
                asset_addr: "Size",
                asset_balance: "Time",
                asset_blockheight: "Height",
                asset_tx: "Tx Count",
                asset_title3: "App Chain Transactions",
                asset_txid: "TXID",
                asset_from: "Type",
                asset_to: "Size",
                asset_height: "Height",
                asset_goallasset: "Back to all app chains",
                no_data: "There is no data",
                ac_last10: "Last 10 Blocks",
                ac_appchain: "Hash",
                ac_last10_height: "Height",
                ac_last10_size: "Size",
                ac_last10_ctm: "Time Created",
                ac_last10_txcount: "Tx count",
                ac_viewblocks: "View all >>>>",
                ac_last10t: "Last 10 Transactions",
                ac_last10t_txid: "TXID",
                ac_last10t_type: "Type",
                ac_last10t_height: "Height",
                ac_last10t_size: "Size",
                ac_viewtxlist: "View all >>>>",
                ac_chaindata: "AppChain Data",
                ac_assets_title: "Asset",
                ac_nep5assets_asset: "AssetID",
                ac_nep5assets_ava: "Name",
                ac_nep5assets_pre: "Total Supply",
                ac_nep5assets_val: "Symbol",
                ac_nep5assets_id: "Decimals",
                ac_summary: "Dashboard",
                ac_lastblock: "Last block",
                ac_allblock: "View all blocks",
                ac_totaltrans: "Total transactions",
                ac_alltxlist: "View all transactions",
                ac_walletcreate: "Wallet address created",
                ac_alladdress: "View all addresses",
            };
        }
    }
    WebBrowser.LangEN = LangEN;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="./LangCN.ts" />
/// <reference path="./LangEN.ts" />
var WebBrowser;
/// <reference path="./LangCN.ts" />
/// <reference path="./LangEN.ts" />
(function (WebBrowser) {
    class LangMgr {
        constructor(type = "") {
            // this.setType(type)
        }
        setType(type) {
            console.log("[WebBrowser]", '[LangMgr]', 'setType, type => ', type, ', this.type => ', this.type);
            if (this.type == type) {
                // 语言包一致，不需要重置
                return false;
            }
            switch (type) {
                case "en":
                    this.lang = new WebBrowser.LangEN();
                    this.type = type;
                    break;
                default:
                    this.lang = new WebBrowser.LangCN();
                    this.type = "cn";
                    break;
            }
            return true;
        }
        get(key, ext = null) {
            var src = this.lang.get(key);
            if (ext) {
                for (let k in ext) {
                    let rk = '%' + k + '%';
                    src = src.replace(rk, ext[k]);
                }
            }
            return src;
        }
    }
    WebBrowser.LangMgr = LangMgr;
})(WebBrowser || (WebBrowser = {}));
var WebBrowser;
(function (WebBrowser) {
    class Connector {
        constructor(hosts, check_params, check_type = "") {
            this.hosts = hosts;
            this.check_params = check_params;
            this.check_type = check_type;
            this.fetch_error = [];
        }
        getOne(callback) {
            try {
                this.hosts.forEach(host => {
                    // let url_head = host.substr(0, 2) === "//" ? Main.urlHead : ""
                    let url_head = "";
                    let url = url_head + host + this.check_params;
                    fetch(url).then((response) => __awaiter(this, void 0, void 0, function* () {
                        if (response.ok) {
                            switch (this.check_type) {
                                case "node":
                                case "cli":
                                    try {
                                        let json = yield response.json();
                                        if (json["result"][0]["blockcount"]) {
                                            if (!this.first_host) {
                                                this.first_host = url_head + host;
                                                callback(this.first_host, json);
                                                return;
                                            }
                                        }
                                    }
                                    catch (e) { }
                                    this.fetch_error.push(host);
                                    return;
                                case "api":
                                default:
                                    let res = yield response.text();
                                    if (!this.first_host) {
                                        this.first_host = url_head + host;
                                        callback(this.first_host, res);
                                    }
                                    return;
                            }
                        }
                        else {
                            this.fetch_error.push(host);
                        }
                    }), error => {
                        this.fetch_error.push(host);
                        console.log("[BlaCat]", '[Connector]', 'getOne, fetch err => ', error);
                    });
                });
            }
            catch (e) {
                console.log("[BlaCat]", '[Connector]', 'getOne, error => ', e.toString());
            }
            // setTimeout(() => {
            //     if (!this.first_host) {
            //         callback(false)
            //     }
            // }, 5000)
            this.check_results(callback);
        }
        check_results(callback) {
            console.log("[BlaCat]", '[Connector]', 'do check_results ...');
            setTimeout(() => {
                if (!this.first_host) {
                    if (this.fetch_error.length == this.hosts.length) {
                        console.log("[BlaCat]", '[Connector]', 'check_results, all fetch_error => ', this.fetch_error);
                        callback(false, null);
                    }
                    else {
                        this.check_results(callback);
                    }
                }
            }, 500);
        }
    }
    WebBrowser.Connector = Connector;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../app.ts" />
/// <reference path="./Connector.ts" />
var WebBrowser;
/// <reference path="../app.ts" />
/// <reference path="./Connector.ts" />
(function (WebBrowser) {
    class NetMgr {
        constructor(app) {
            this.app = app;
            this.types = [1, 2];
            this.nodes = {};
            this.nodes[1] = [
                // 主网nelnode
                ["CN", "https://mainnet_znode_hk_01.blacat.org/api/mainnet", "_1", "https://mainnet_znode_hk_01.blacat.org/api/mainnet"],
            ];
            this.nodes[2] = [
                // 测试网nelnode
                ["CN", "https://testnet_znode_hk_01.blacat.org/api/testnet", "_1", "https://testnet_znode_hk_01.blacat.org/api/testnet"],
            ];
            this.nodes_server = {};
            this.default_type = 1;
        }
        // 选择nelnode节点
        selectNode(callback, type, force = 0) {
            if (force == 0 && this.nodes_server && this.nodes_server.hasOwnProperty(type) && this.nodes_server[type]) {
                WebBrowser.WWW.api = this.nodes_server[type];
                WebBrowser.WWW.apiaggr = this.getScanHost(WebBrowser.WWW.api, type);
                console.log("[WebBrowser]", '[NetMgr]', 'selectNode, node_api => ', WebBrowser.WWW.api);
                console.log("[WebBrowser]", '[NetMgr]', 'selectNode, node_scan => ', WebBrowser.WWW.apiaggr);
                callback();
                return;
            }
            this._selectNode(callback, type, force);
        }
        _selectNode(callback, type, force) {
            var conn = new WebBrowser.Connector(this.getHosts(this.nodes[type]), "?jsonrpc=2.0&id=1&method=getblockcount&params=[]", 'node');
            conn.getOne((res, response) => {
                if (res === false) {
                    // 失败提示
                    alert(this.app.langmgr.get("connect_nodes_error"));
                    return;
                }
                this.nodes_server[type] = res;
                WebBrowser.WWW.api = this.nodes_server[type];
                WebBrowser.WWW.apiaggr = this.getScanHost(WebBrowser.WWW.api, type);
                console.log("[WebBrowser]", '[NetMgr]', '_selectNode, node_api => ', WebBrowser.WWW.api);
                console.log("[WebBrowser]", '[NetMgr]', '_selectNode, node_scan => ', WebBrowser.WWW.apiaggr);
                callback();
            });
        }
        // 选择/切换网络
        change(callback, type = null) {
            if (!type) {
                type = this.default_type;
            }
            console.log("[WebBrowser]", '[NetMgr]', 'change, type => ', type);
            switch (type) {
                case 1: // 主网
                    this.change2Main(callback);
                    break;
                case 2: // 测试网
                    this.change2test(callback);
                    break;
            }
        }
        setDefault(type) {
            console.log("[WebBrowser]", '[NetMgr]', 'setDefault, type => ', type);
            this.default_type = type;
        }
        change2test(callback) {
            return __awaiter(this, void 0, void 0, function* () {
                // 节点地址
                this.selectNode(() => {
                    // 测试网
                    this.type = 2;
                    // 回调
                    callback();
                }, 2);
            });
        }
        change2Main(callback) {
            return __awaiter(this, void 0, void 0, function* () {
                // 节点地址
                this.selectNode(() => {
                    // 主网
                    this.type = 1;
                    // 回调
                    callback();
                }, 1);
            });
        }
        getOtherTypes() {
            var res = new Array();
            for (let k = 0; k < this.types.length; k++) {
                if (this.types[k] !== this.type) {
                    res.push(this.types[k]);
                }
            }
            return res;
        }
        getHosts(hosts) {
            var res = [];
            hosts.forEach(host => {
                res.push(host[1]);
            });
            return res;
        }
        // 获取当前节点信息，type: clis，nodes
        getCurrNodeInfo(type) {
            var info = null;
            if (this[type][this.type].length > 0) {
                for (let i = 0; i < this[type][this.type].length; i++) {
                    if (this[type][this.type][i][1] == this[type + "_server"][this.type]) {
                        return this[type][this.type][i];
                    }
                }
            }
            return info;
        }
        getNodeLists(type) {
            var lists = [];
            if (this[type] && this[type][this.type]) {
                return this[type][this.type];
            }
            return lists;
        }
        setNode(type, url) {
            this[type + "_server"][this.type] = url;
            WebBrowser.WWW.api = url;
            WebBrowser.WWW.apiaggr = this.getScanHost(WebBrowser.WWW.api, type);
            console.log("[WebBrowser]", '[NetMgr]', 'setNode, node_api => ', WebBrowser.WWW.api);
            console.log("[WebBrowser]", '[NetMgr]', 'setNode, node_scan => ', WebBrowser.WWW.apiaggr);
        }
        getScanHost(apiHost, type) {
            var scan = "";
            for (let i = 0; i < this.nodes[type].length; i++) {
                if (this.nodes[type][i][1] == apiHost) {
                    return this.nodes[type][i][3];
                }
            }
            return scan;
        }
    }
    WebBrowser.NetMgr = NetMgr;
})(WebBrowser || (WebBrowser = {}));
/// <reference path="../lib/neo-ts.d.ts"/>
/// <reference types="jquery" />
/// <reference types="bootstrap" />
/// <reference types="chart.js" />
/// <reference path="./pages/block.ts" />
/// <reference path="./pages/appchainblock.ts" />
/// <reference path="./pages/blocks.ts" />
/// <reference path="./pages/address.ts" />
/// <reference path="./pages/addresses.ts" />
/// <reference path="./pages/asset.ts" />
/// <reference path="./pages/assets.ts" />
/// <reference path="./pages/gui.ts" />
/// <reference path="./pages/index.ts"/>
/// <reference path="./pages/transactions.ts"/>
/// <reference path="./pages/transaction.ts"/>
/// <reference path="./pages/appchaintransaction.ts"/>
/// <reference path="./pages/nep5.ts"/>
/// <reference path="./pages/nep5info.ts"/>
/// <reference path="./pages/contractstate.ts" />
/// <reference path="./pages/404.ts"/>
/// <reference path="./tools/locationtool.ts" />
/// <reference path="./tools/numbertool.ts" />
/// <reference path="./tools/routetool.ts" />
/// <reference path="./tools/cointool.ts" />
/// <reference path="./Util.ts" />
/// <reference path="./Navbar.ts" />
/// <reference path="./Network.ts" />
/// <reference path="./lang/LangMgr.ts" />
/// <reference path="./net/NetMgr.ts" />
var WebBrowser;
/// <reference path="../lib/neo-ts.d.ts"/>
/// <reference types="jquery" />
/// <reference types="bootstrap" />
/// <reference types="chart.js" />
/// <reference path="./pages/block.ts" />
/// <reference path="./pages/appchainblock.ts" />
/// <reference path="./pages/blocks.ts" />
/// <reference path="./pages/address.ts" />
/// <reference path="./pages/addresses.ts" />
/// <reference path="./pages/asset.ts" />
/// <reference path="./pages/assets.ts" />
/// <reference path="./pages/gui.ts" />
/// <reference path="./pages/index.ts"/>
/// <reference path="./pages/transactions.ts"/>
/// <reference path="./pages/transaction.ts"/>
/// <reference path="./pages/appchaintransaction.ts"/>
/// <reference path="./pages/nep5.ts"/>
/// <reference path="./pages/nep5info.ts"/>
/// <reference path="./pages/contractstate.ts" />
/// <reference path="./pages/404.ts"/>
/// <reference path="./tools/locationtool.ts" />
/// <reference path="./tools/numbertool.ts" />
/// <reference path="./tools/routetool.ts" />
/// <reference path="./tools/cointool.ts" />
/// <reference path="./Util.ts" />
/// <reference path="./Navbar.ts" />
/// <reference path="./Network.ts" />
/// <reference path="./lang/LangMgr.ts" />
/// <reference path="./net/NetMgr.ts" />
(function (WebBrowser) {
    class App {
        strat() {
            this.langmgr = new WebBrowser.LangMgr();
            let language = sessionStorage.getItem("language");
            if (!language) {
                let lang = navigator.language; //常规浏览器语言和IE浏览器
                lang = lang.substr(0, 2); //截取lang前2位字符
                if (lang == 'zh') {
                    this.langmgr.setType("cn");
                    sessionStorage.setItem("language", "cn");
                }
                else {
                    this.langmgr.setType("en");
                    sessionStorage.setItem("language", "en");
                }
            }
            else {
                this.langmgr.setType(language);
            }
            this.netmgr = new WebBrowser.NetMgr(this);
            this.ajax = new WebBrowser.Ajax();
            this.navbar = new WebBrowser.Navbar(this);
            this.netWork = new WebBrowser.NetWork(this);
            this.block = new WebBrowser.Block(this);
            this.blocks = new WebBrowser.Blocks(this);
            this.address = new WebBrowser.Address(this);
            this.addresses = new WebBrowser.Addresses(this);
            this.transaction = new WebBrowser.Transaction(this);
            this.guiinfo = new WebBrowser.GUI(this);
            this.transactions = new WebBrowser.Transactions(this);
            this.assets = new WebBrowser.Appchains(this);
            this.indexpage = new WebBrowser.Index(this);
            this.assetinfo = new WebBrowser.AssetInfo(this);
            this.nep5info = new WebBrowser.Nep5Info(this);
            this.appchainblock = new WebBrowser.ACBlock(this);
            this.appchaintransaction = new WebBrowser.ACTransaction(this);
            this.contractstate = new WebBrowser.ContractStateInfo(this);
            this.notfound = new WebBrowser.Notfound(this);
            this.nep5 = new WebBrowser.Nep5page(this);
            this.routet = new WebBrowser.Route(this);
            // CoinTool.initAllAsset();
            this.netWork.start();
            this.navbar.start();
            this.routet.start();
            document.getElementsByTagName("body")[0].onhashchange = () => {
                this.routet.start();
            };
            $("#searchText").focus(() => {
                $("#nel-search").addClass("nel-input");
            });
            $("#searchText").focusout(() => {
                $("#nel-search").removeClass("nel-input");
            });
        }
        //区块列表
        blocksPage() {
            return __awaiter(this, void 0, void 0, function* () {
                //查询区块数量
                let blockCount = yield WebBrowser.WWW.api_getHeight();
                //let blockCount = await this.ajax.post('getblockcount', [2]);
                //分页查询区块数据
                let pageUtil = new WebBrowser.PageUtil(blockCount[0]['indexx'], 15);
                let block = new WebBrowser.Blocks(this);
                block.updateBlocks(pageUtil);
                //监听下一页
                $("#blocks-page-next").off("click").click(() => {
                    if (pageUtil.currentPage == pageUtil.totalPage) {
                        pageUtil.currentPage = pageUtil.totalPage;
                    }
                    pageUtil.currentPage += 1;
                    block.updateBlocks(pageUtil);
                });
                $("#blocks-page-previous").off("click").click(() => {
                    if (pageUtil.currentPage <= 1) {
                        pageUtil.currentPage = 1;
                    }
                    pageUtil.currentPage -= 1;
                    block.updateBlocks(pageUtil);
                });
            });
        }
    }
    WebBrowser.App = App;
    window.onload = () => {
        //WWW.rpc_getURL();
        var app = new App();
        app.strat();
    };
})(WebBrowser || (WebBrowser = {}));
function txgeneral(obj) {
    var div = obj.parentNode;
    var tran = div.getElementsByClassName("transaction")[0];
    if (tran.style.display == "") {
        tran.style.display = "none";
        obj.classList.remove("active");
    }
    else {
        tran.style.display = "";
        obj.classList.add("active");
        var vins = tran.getAttribute('vins');
        var vouts = tran.getAttribute('vouts');
        WebBrowser.Transactions.getTxgeneral(vins, vouts, tran);
    }
}
function txgMsg(obj) {
    var div = obj.parentNode;
    var tran = div.getElementsByClassName("transaction")[0];
    if (tran.style.display == "") {
        tran.style.display = "none";
        obj.classList.remove("active");
    }
    else {
        tran.style.display = "";
        obj.classList.add("active");
        var vins = tran.getAttribute('vins');
        var vouts = tran.getAttribute('vouts');
        //WebBrowser.Address.getTxMsg(vins, vouts, tran);
    }
}
//# sourceMappingURL=app.js.map