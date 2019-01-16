/// <reference path="./Base.ts"/>
namespace WebBrowser
{
    export class GUI_Contract implements GUI_Base
    {
        div:HTMLDivElement;
        constructor(div:HTMLDivElement){
            this.div = div;   
        }

        showUI(){
            this.mainContract(this.div);
            GUI_Route.instance.hideUI(PageName.Title);
        }        

        hideUI(){

        }

        mainContract(div:HTMLDivElement):void{
            if (div.firstChild)
            div.removeChild(div.firstChild);
            div.style.overflow = 'hidden';
            div.style.background = '#333542';

            var contractBackGround = document.createElement('div') as HTMLDivElement;
            contractBackGround.style.width = "100%";
            contractBackGround.style.cssFloat = "left";
            div.appendChild(contractBackGround);

            var upBackGround = document.createElement('div') as HTMLDivElement;
            CSSTool.transfer_set(upBackGround);
            contractBackGround.appendChild(upBackGround);

            var downBackGround = document.createElement('div') as HTMLDivElement;
            CSSTool.normalbackground_set(downBackGround);
            downBackGround.style.overflow = 'hidden';
            contractBackGround.appendChild(downBackGround);

            var putContract = document.createElement("button") as HTMLButtonElement;
            upBackGround.appendChild(putContract)
            putContract.textContent = "发布合约";
            upBackGround.appendChild(putContract);
            CSSTool.transfer_btn(putContract);
            CSSTool.flowLeft_set(putContract);
            putContract.style.borderTop = '1px solid #C8AB73';
            putContract.onclick = () => {
                this.putContract(downBackGround);
                $(putContract).css({"borderTop":"1px solid #C8AB73","background" : '#3C3E4B'}).siblings().css({"borderTop":"1px solid #333542","background":"#333542"});
            }
            putContract.click();

            var useContract = document.createElement("button") as HTMLButtonElement;
            upBackGround.appendChild(useContract)
            upBackGround.appendChild(useContract);
            CSSTool.transfer_btn(useContract);
            CSSTool.flowLeft_set(useContract);
            useContract.textContent = "调用合约";
            useContract.onclick = () => {
                this.useContract(downBackGround, true);
                $(useContract).css({"borderTop":"1px solid #C8AB73","background" : '#3C3E4B'}).siblings().css({"borderTop":"1px solid #333542","background":"#333542"});
            }
            
            var invokeContract = document.createElement("button") as HTMLButtonElement;
            upBackGround.appendChild(invokeContract)
            upBackGround.appendChild(invokeContract);
            CSSTool.transfer_btn(invokeContract);
            CSSTool.flowLeft_set(invokeContract);
            invokeContract.textContent = "预调用合约";
            invokeContract.onclick = () => {
                this.useContract(downBackGround, false);
                $(invokeContract).css({"borderTop":"1px solid #C8AB73","background" : '#3C3E4B'}).siblings().css({"borderTop":"1px solid #333542","background":"#333542"});
            }          
        }

        putContract(div:HTMLDivElement){
            if (div.firstChild)
            div.removeChild(div.firstChild);
            div.style.marginBottom = '30px';

            var contractBackGround = document.createElement('div') as HTMLDivElement;
            contractBackGround.style.width = "100%";
            div.appendChild(contractBackGround);

            var assetModel = document.createElement("div");
            CSSTool.handle_set(assetModel);
            contractBackGround.appendChild(assetModel);

            var asset = document.createElement('span') as HTMLSpanElement;
            assetModel.appendChild(asset);
            asset.style.color = "#eeeeee";
            asset.textContent = "链名";
            CSSTool.flowLeft_set(asset);

            var select = document.createElement("select") as HTMLSelectElement;
            select.style.marginLeft = '20px';
            CSSTool.select_set(select);
            CSSTool.flowLeft_set(select);
            assetModel.appendChild(select);
            AppChainTool.getChain(select);

<<<<<<< HEAD
            var changeModel = document.createElement("div");
            contractBackGround.appendChild(changeModel);

            var ContractText = document.createElement('span') as HTMLSpanElement;
            ContractText.style.color = "#eeeeee";
            ContractText.textContent = "合约";
           // contractBackGround.appendChild(ContractText);

           var storage_lable = document.createElement("div");
           CSSTool.handle_set(storage_lable);
           $(storage_lable).addClass("switch-wrap");
            contractBackGround.appendChild(storage_lable);

            var storageName = document.createElement('span') as HTMLSpanElement;
            storageName.style.color = "#eeeeee";
            storageName.textContent = "storage";
            storage_lable.appendChild(storageName);

            var lable_store = document.createElement("span");
            CSSTool.flowRight_set(lable_store);
            lable_store.style.marginRight = '373px';
            storage_lable.appendChild(lable_store);

            var need_storage = document.createElement('input') as HTMLInputElement;
            $(need_storage).attr("id","switch_s");
            need_storage.type = "checkbox";
            need_storage.checked = false;
            lable_store.appendChild(need_storage);

            var lable_s = document.createElement("label");
            $(lable_s).attr("for","switch_s");
            lable_store.appendChild(lable_s);

            var can_lable = document.createElement("div");
            CSSTool.handle_set(can_lable);
            $(can_lable).addClass("switch-wrap");
            contractBackGround.appendChild(can_lable);

            var canChargeName = document.createElement('span') as HTMLSpanElement;
            canChargeName.style.color = "#eeeeee";
            canChargeName.textContent = "canCharge";
            can_lable.appendChild(canChargeName);

            var lable_div = document.createElement("span");
            CSSTool.flowRight_set(lable_div);
            lable_div.style.marginRight = '373px';
            can_lable.appendChild(lable_div);

            var need_canCharge = document.createElement('input') as HTMLInputElement;
            $(need_canCharge).attr("id","switch");
            need_canCharge.type = "checkbox";
            need_canCharge.checked = false;
            lable_div.appendChild(need_canCharge);

            var lable = document.createElement("label");
            $(lable).attr("for","switch");
            lable_div.appendChild(lable);

            var nameTextModel = document.createElement("div");
            CSSTool.handle_set(nameTextModel);
            contractBackGround.appendChild(nameTextModel);

            var nameText = document.createElement('span') as HTMLSpanElement;
            nameText.style.color = "#eeeeee";
            nameText.textContent = "NAME";
            nameTextModel.appendChild(nameText);

            var name = document.createElement('input') as HTMLInputElement;
            CSSTool.addr_set(name);
            name.placeholder = '请输入NAME';
            name.style.marginLeft = '0';
            name.style.width = '80%';
            CSSTool.flowRight_set(name);            
            nameTextModel.appendChild(name);

            var versionTextModel = document.createElement("div");
            CSSTool.handle_set(versionTextModel);
            contractBackGround.appendChild(versionTextModel);

            var versionText = document.createElement('span') as HTMLSpanElement;
            versionText.style.color = "#eeeeee";
            versionText.textContent = "VERSION";
            versionTextModel.appendChild(versionText);

            var version = document.createElement('input') as HTMLInputElement;
            version.value = "1.0";
            CSSTool.addr_set(version);
            version.placeholder = '请输入VERSION';
            version.style.marginLeft = '0';
            version.style.width = '80%';
            CSSTool.flowRight_set(version);   
            versionTextModel.appendChild(version);

            var autherTextModel = document.createElement("div");
            CSSTool.handle_set(autherTextModel);
            contractBackGround.appendChild(autherTextModel);

            var autherText = document.createElement('span') as HTMLSpanElement;
            autherText.style.color = "#eeeeee";
            autherText.textContent = "AUTHOR";
            autherTextModel.appendChild(autherText);

            var auther = document.createElement('input') as HTMLInputElement;
            auther.value = "auther";
            CSSTool.addr_set(auther);
            auther.placeholder = '请输入AUTHOR';
            auther.style.marginLeft = '0';
            auther.style.width = '80%';
            CSSTool.flowRight_set(auther);   
            autherTextModel.appendChild(auther);

            var emailTextModel = document.createElement("div");
            CSSTool.handle_set(emailTextModel);
            contractBackGround.appendChild(emailTextModel);

            var emailText = document.createElement('span') as HTMLSpanElement;
            emailText.style.color = "#eeeeee";
            emailText.textContent = "EMAIL";
            emailTextModel.appendChild(emailText);

            var email = document.createElement('input') as HTMLInputElement;
            email.value = "email";
            CSSTool.addr_set(email);
            email.placeholder = '请输入EMAIL';
            email.style.marginLeft = '0';
            email.style.width = '80%';
            CSSTool.flowRight_set(email); 
            emailTextModel.appendChild(email);

            var descriptionTextModel = document.createElement("div");
            CSSTool.handle_set(descriptionTextModel);
            contractBackGround.appendChild(descriptionTextModel);

            var descriptionText = document.createElement('span') as HTMLSpanElement;
            descriptionText.style.color = "#eeeeee";
            descriptionText.textContent = "DESCRIPTION";
            descriptionTextModel.appendChild(descriptionText);

            var description = document.createElement('input') as HTMLInputElement;
            description.value = "description";
            CSSTool.addr_set(description);
            description.placeholder = '请输入DESCRIPTION';
            description.style.marginLeft = '0';
            description.style.width = '80%';
            CSSTool.flowRight_set(description); 
            descriptionTextModel.appendChild(description);

            var uploadFiles = document.createElement("div");//外层div
            contractBackGround.appendChild(uploadFiles);
            CSSTool.uploadFiles_set(uploadFiles);
            
            //feile  外层
            var firstFile = document.createElement("div");
            var putIn = document.createElement("div");
            putIn.textContent = "请选择文件";
            firstFile.appendChild(putIn);
            var fileIcon = document.createElement("i");
            $(fileIcon).addClass("glyphicon glyphicon-file").css("padding-left","5px").appendTo(putIn);
            uploadFiles.appendChild(firstFile);
            CSSTool.firstFile_set(firstFile);
            
            //将file添加到feile  外层里
            var file = document.createElement("input");
            firstFile.appendChild(file);
            file.type = "file";
            CSSTool.file_set(file);
            firstFile.appendChild(file);

            var btnSend = document.createElement('button') as HTMLButtonElement;
            btnSend.textContent = "send";
            CSSTool.btn_set(btnSend);
            btnSend.style.width = '50%';
            contractBackGround.appendChild(btnSend);
=======
            var chooseNative = document.createElement("div") as HTMLDivElement;
            contractBackGround.appendChild(chooseNative);

            var nativeBackGround = document.createElement('div') as HTMLDivElement;
            chooseNative.appendChild(nativeBackGround);

            var BoolNativeNep5 = null;
            select.onchange = () => {
                if ((select.childNodes[select.selectedIndex] as HTMLOptionElement).value != "NEO"){
                    if (chooseNative.firstChild)
                    chooseNative.removeChild(chooseNative.firstChild);

                    var nativeBackGround = document.createElement('div') as HTMLDivElement;
                    chooseNative.appendChild(nativeBackGround);

                    var nativeName = document.createElement('span') as HTMLSpanElement;
                    nativeBackGround.appendChild(nativeName);
                    nativeName.style.color = "#eeeeee";
                    nativeName.textContent = "选择是否NativeNep5类型";

                    BoolNativeNep5 = document.createElement('input') as HTMLInputElement;
                    BoolNativeNep5.type = "checkbox";
                    BoolNativeNep5.checked = false;
                    nativeBackGround.appendChild(BoolNativeNep5);  
                    
                    var nativeBackGround2 = document.createElement('div') as HTMLDivElement;
                    nativeBackGround.appendChild(nativeBackGround2);

                    BoolNativeNep5.onchange = () => {
                        if (BoolNativeNep5.checked) {
                            if (nativeBackGround2)
                            nativeBackGround.removeChild(nativeBackGround2);

                            nativeBackGround2 = document.createElement('div') as HTMLDivElement;
                            nativeBackGround.appendChild(nativeBackGround2);

                            this.createNativeContract(nativeBackGround2, select);
                        }else{
                            if (nativeBackGround2)
                            nativeBackGround.removeChild(nativeBackGround2);

                            nativeBackGround2 = document.createElement('div') as HTMLDivElement;
                            nativeBackGround.appendChild(nativeBackGround2);

                            this.createContract(nativeBackGround2, select);
                        }
                    }
                    this.createContract(nativeBackGround2, select);
                }else{
                    if (chooseNative.firstChild)
                    chooseNative.removeChild(chooseNative.firstChild);

                    var nativeBackGround = document.createElement('div') as HTMLDivElement;
                    chooseNative.appendChild(nativeBackGround);
>>>>>>> f50d0b50ded475789a92394f806ffb67f9d1dfa8

                    this.createContract(nativeBackGround, select);
                }
            }
<<<<<<< HEAD

            var reader = new FileReader();
            reader.onload = (e: Event) =>
            {                
                ContractAvm = reader.result as ArrayBuffer;                                                           
            }   
            file.onchange = (ev: Event) =>
            {
                if (file.files.length > 0)
                if (file.files[0].name.includes(".avm"))
                {
                    $(putIn).text(file.files[0].name);
                    reader.readAsArrayBuffer(file.files[0]);
                }
            }      
=======
            this.createContract(nativeBackGround, select);
>>>>>>> f50d0b50ded475789a92394f806ffb67f9d1dfa8
        }

        useContract(div:HTMLDivElement, use:boolean){
            if (div.firstChild)
            div.removeChild(div.firstChild);

            var contractBackGround = document.createElement('div') as HTMLDivElement;
            contractBackGround.style.width = "100%";
            div.appendChild(contractBackGround);

            var assetModel = document.createElement("div");
            CSSTool.handle_set(assetModel);
            contractBackGround.appendChild(assetModel);

            var asset = document.createElement('span') as HTMLSpanElement;
            assetModel.appendChild(asset);
            asset.style.color = "#eeeeee";
            asset.textContent = "链名";

            var select = document.createElement("select") as HTMLSelectElement;
            assetModel.appendChild(select);
            CSSTool.select_set(select);
            select.style.marginLeft = '20px';
            AppChainTool.getChain(select);

            var fillinTextModel = document.createElement("span");
            CSSTool.flowRight_set(fillinTextModel);
            assetModel.appendChild(fillinTextModel);

            var fillinText = document.createElement("span") as HTMLSpanElement;
            fillinText.style.color = "#eeeeee";
            fillinText.textContent = "手动输入合约hash";
            fillinTextModel.appendChild(fillinText);

            var hash_lable = document.createElement("span");
            hash_lable.style.marginLeft = '25px';
            $(hash_lable).addClass("switch-wrap");
            fillinTextModel.appendChild(hash_lable);

            var HashFilein = document.createElement("input") as HTMLInputElement;
            $(HashFilein).attr("id","hash_switch");
            HashFilein.type = "checkbox";
            HashFilein.checked = true;
            hash_lable.appendChild(HashFilein);

            var label_con = document.createElement("label");
            $(label_con).attr("for","hash_switch");
            hash_lable.appendChild(label_con);

            var hashBackGround = document.createElement("div") as HTMLDivElement;
            CSSTool.handle_set(hashBackGround);
            contractBackGround.appendChild(hashBackGround);
           
            var ContractAvm = null;
            var contractHash = null;
            var fileText = document.createElement("span") as HTMLSpanElement;
            fileText.style.color = "#eeeeee";
            fileText.textContent = "合约hash";
            hashBackGround.appendChild(fileText);

            ContractAvm = document.createElement("input") as HTMLInputElement;
            CSSTool.addr_set(ContractAvm);
            CSSTool.flowRight_set(ContractAvm);
            ContractAvm.style.width = '80%';
            ContractAvm.placeholder = '请输入合约hash';
            hashBackGround.appendChild(ContractAvm);
            HashFilein.onchange = () => {
                while(hashBackGround.children.length > 0){
                    hashBackGround.removeChild(hashBackGround.firstChild);
                }
                if (HashFilein.checked){
                    var fileText = document.createElement("span") as HTMLSpanElement;
                    fileText.style.color = "#eeeeee";
                    fileText.textContent = "合约hash";
                    hashBackGround.appendChild(fileText);

                    ContractAvm = document.createElement("input") as HTMLInputElement;
                    CSSTool.addr_set(ContractAvm);
                    CSSTool.flowRight_set(ContractAvm);
                    ContractAvm.style.width = '80%';
                    ContractAvm.placeholder = '请输入合约hash';
                    hashBackGround.appendChild(ContractAvm);
                }else{
                    ContractAvm = null;

                    var firstFile = document.createElement("div");
                    var putIn = document.createElement("div");
                    putIn.textContent = "请选择avm文件";
                    firstFile.appendChild(putIn);
                    var fileIcon = document.createElement("i");
                    $(fileIcon).addClass("glyphicon glyphicon-file").css("padding-left","5px").appendTo(putIn);
                    hashBackGround.appendChild(firstFile);
                    CSSTool.firstFile_set(firstFile);
                    firstFile.style.width = '50%';
                    firstFile.style.margin = '0 auto';
                    firstFile.style.textAlign = 'center';
                    
                    //将file添加到feile  外层里
                    var file = document.createElement("input");
                    firstFile.appendChild(file);
                    file.type = "file";
                    CSSTool.file_set(file);
                    
                    //提示添加file上传的文字
                    // var fileTip = document.createElement("p");
                    // fileTip.textContent='*请上传钱包文件';
                    // $(fileTip).attr("id","fileTip");
                    // hashBackGround.appendChild(fileTip);
                    // CSSTool.fileTip_set(fileTip);

                    var reader = new FileReader();
                    reader.onload = (e: Event) =>
                    {                
                        contractHash = reader.result as ArrayBuffer;      
                        contractHash = (new Neo.Uint160(Neo.Cryptography.RIPEMD160.computeHash(Neo.Cryptography.Sha256.computeHash(contractHash)))).toString();                                                
                    }   
                    file.onchange = (ev: Event) =>
                    {
                        if (file.files.length > 0)
                        if (file.files[0].name.includes(".avm"))
                        {
                            putIn.textContent = file.files[0].name;
                            reader.readAsArrayBuffer(file.files[0]);
                        }
                    }      
                }
            }
            var methodBackGround = document.createElement("div") as HTMLDivElement;
            contractBackGround.appendChild(methodBackGround);

            var btnAddMethod = document.createElement("button") as HTMLButtonElement;
            btnAddMethod.textContent = "AddMethod";
            CSSTool.addMethod_btn(btnAddMethod);
            btnAddMethod.style.marginLeft = '73px';
            contractBackGround.appendChild(btnAddMethod);
            var JsonMethod = [];          
            btnAddMethod.onclick = () => {
                var json = {};
                JsonMethod.push(json);
                var params = [];
                var singleMethodBackGround = document.createElement("div") as HTMLDivElement;
                CSSTool.handle_set(singleMethodBackGround);
                methodBackGround.appendChild(singleMethodBackGround); 

                var methodText = document.createElement("span") as HTMLSpanElement;
                methodText.style.color = "#eeeeee";
                methodText.textContent = "方法名";
                singleMethodBackGround.appendChild(methodText);

                var methodInput = document.createElement("input") as HTMLInputElement; 
                singleMethodBackGround.appendChild(methodInput);
                CSSTool.addr_set(methodInput);
                CSSTool.flowRight_set(methodInput);
                methodInput.style.width = '80%';
                methodInput.style.marginBottom = '15px';
                methodInput.placeholder = '请输入方法名';
                json["methodName"] = methodInput;
                json["params"] = params;                

                var paramsBackGround = document.createElement("div") as HTMLDivElement;
                CSSTool.handle_set(singleMethodBackGround);
                singleMethodBackGround.appendChild(paramsBackGround);    
                
                var btnAddParams = document.createElement("button") as HTMLButtonElement;
                btnAddParams.textContent = "AddParams";
                CSSTool.addMethod_btn(btnAddParams);
                singleMethodBackGround.appendChild(btnAddParams);
                
                btnAddParams.onclick = () => {
                    var singleParamsBackGround = document.createElement("div") as HTMLDivElement;
                    CSSTool.handle_set(singleParamsBackGround);
                    paramsBackGround.appendChild(singleParamsBackGround); 

                    var paramsText = document.createElement("span") as HTMLSpanElement;
                    paramsText.style.color = "#eeeeee";
                    paramsText.textContent = "参数";
                    singleParamsBackGround.appendChild(paramsText);
    
                    var paramsInput = document.createElement("input") as HTMLInputElement;
                    CSSTool.addr_set(paramsInput);
                    CSSTool.flowRight_set(paramsInput);
                    paramsInput.style.width = '80%';
                    paramsInput.placeholder = '请输入参数';
                    singleParamsBackGround.appendChild(paramsInput);
                    params.push(paramsInput);
                }
                
                var btnSubParams = document.createElement("button") as HTMLButtonElement;
                CSSTool.subParams_btn(btnSubParams);
                CSSTool.flowRight_set(btnSubParams);
                btnSubParams.textContent = "SubParams";
                singleMethodBackGround.appendChild(btnSubParams);
                btnSubParams.onclick = () => {
                    paramsBackGround.removeChild(paramsBackGround.lastChild);
                    params.pop();
                }
            }
            var btnSubMethod = document.createElement("button") as HTMLButtonElement;
            CSSTool.subParams_btn(btnSubMethod)
            CSSTool.flowRight_set(btnSubMethod);
            btnSubMethod.textContent = "SubMethod";
            contractBackGround.appendChild(btnSubMethod);
            btnSubMethod.onclick = () => {
                methodBackGround.removeChild(methodBackGround.lastChild);
                JsonMethod.pop();
            }

            var btnSend = document.createElement('div');
            CSSTool.btn_set(btnSend);
            btnSend.style.width = '50%';
            btnSend.textContent = "send";
            btnSend.style.margin = '15px auto';
            btnSend.style.cursor = 'pointer';
            contractBackGround.appendChild(btnSend);

            var txText = document.createElement("span") as HTMLSpanElement;
            txText.style.color = "#eeeeee";            
            contractBackGround.appendChild(txText); 

            var txMessage = null;
            btnSend.onclick = async () => {    
                if (ContractAvm){
                    contractHash = ContractAvm.value;
                } 
                else if (!contractHash){        
                    alert("hash not available!");
                    return;
                }
                var json = [];
                for (var i = 0; i < JsonMethod.length; i++) {
                    var singleJson = {};
                    var array = [];
                    for (var j = 0; j < JsonMethod[i]["params"].length; j++){
                      var s = JsonMethod[i]["params"][j].value;
                      array.push(s);
                    }
                    singleJson["params"] = array;
                    singleJson["methodName"] = JsonMethod[i]["methodName"].value;
                    json.push(singleJson);
                }
                if (use){
                    txMessage = await AppChainTool.SendContractMethod((select.childNodes[select.selectedIndex] as HTMLOptionElement).value, GUITool.pubkey, GUITool.prikey, json, contractHash);
                }else{
                    txMessage = await AppChainTool.SendInvokeContractMethod((select.childNodes[select.selectedIndex] as HTMLOptionElement).value, GUITool.pubkey, GUITool.prikey, json, contractHash);
                    txMessage = JSON.stringify(txMessage);
                }
                txText.textContent = (use?"txid = ":"invokeMessage = ") + (txMessage as string);
            }       
            
            
        }

        createContract(nativeBackGround:HTMLDivElement, select:HTMLSelectElement){
            var ContractText = document.createElement('span') as HTMLSpanElement;
            ContractText.style.color = "#eeeeee";
            ContractText.textContent = "合约";
            nativeBackGround.appendChild(ContractText);

            var storageName = document.createElement('span') as HTMLSpanElement;
            storageName.style.color = "#eeeeee";
            storageName.textContent = "storage";
            nativeBackGround.appendChild(storageName);

            var need_storage = document.createElement('input') as HTMLInputElement;
            need_storage.type = "checkbox";
            need_storage.checked = false;
            nativeBackGround.appendChild(need_storage);

            var canChargeName = document.createElement('span') as HTMLSpanElement;
            canChargeName.style.color = "#eeeeee";
            canChargeName.textContent = "canCharge";
            nativeBackGround.appendChild(canChargeName);

            var need_canCharge = document.createElement('input') as HTMLInputElement;
            need_canCharge.type = "checkbox";
            need_canCharge.checked = false;
            nativeBackGround.appendChild(need_canCharge);

            var nameText = document.createElement('span') as HTMLSpanElement;
            nameText.style.color = "#eeeeee";
            nameText.textContent = "NAME";
            nativeBackGround.appendChild(nameText);

            var name = document.createElement('input') as HTMLInputElement;
            name.value = "name";
            nativeBackGround.appendChild(name);

            var versionText = document.createElement('span') as HTMLSpanElement;
            versionText.style.color = "#eeeeee";
            versionText.textContent = "VERSION";
            nativeBackGround.appendChild(versionText);

            var version = document.createElement('input') as HTMLInputElement;
            version.value = "1.0";
            nativeBackGround.appendChild(version);

            var autherText = document.createElement('span') as HTMLSpanElement;
            autherText.style.color = "#eeeeee";
            autherText.textContent = "AUTHOR";
            nativeBackGround.appendChild(autherText);

            var auther = document.createElement('input') as HTMLInputElement;
            auther.value = "auther";
            nativeBackGround.appendChild(auther);

            var emailText = document.createElement('span') as HTMLSpanElement;
            emailText.style.color = "#eeeeee";
            emailText.textContent = "EMAIL";
            nativeBackGround.appendChild(emailText);

            var email = document.createElement('input') as HTMLInputElement;
            email.value = "email";
            nativeBackGround.appendChild(email);

            var descriptionText = document.createElement('span') as HTMLSpanElement;
            descriptionText.style.color = "#eeeeee";
            descriptionText.textContent = "DESCRIPTION";
            nativeBackGround.appendChild(descriptionText);

            var description = document.createElement('input') as HTMLInputElement;
            description.value = "description";
            nativeBackGround.appendChild(description);

            var fileText = document.createElement('span') as HTMLSpanElement;
            fileText.style.color = "#eeeeee";
            fileText.textContent = "FILE";
            nativeBackGround.appendChild(fileText);

            var file = document.createElement('input') as HTMLInputElement;
            file.type = "file";
            nativeBackGround.appendChild(file);

            var btnSend = document.createElement('button') as HTMLButtonElement;
            btnSend.textContent = "send";
            nativeBackGround.appendChild(btnSend);

            var ContractAvm = null;
            btnSend.onclick = async () => {
                if (!ContractAvm){
                    alert("it can be .avm file.");
                    return;
                }
                AppChainTool.SendContract(need_storage.checked,need_canCharge.checked,description.value,email.value,auther.value,version.value,
                    name.value, ContractAvm, (select.childNodes[select.selectedIndex] as HTMLOptionElement).value, GUITool.pubkey, GUITool.prikey);                             
            }

            var reader = new FileReader();
            reader.onload = (e: Event) =>
            {                
                ContractAvm = reader.result as ArrayBuffer;                                                           
            }   
            file.onchange = (ev: Event) =>
            {
                if (file.files.length > 0)
                if (file.files[0].name.includes(".avm"))
                {
                    reader.readAsArrayBuffer(file.files[0]);
                }
            }      
        }

        createNativeContract(nativeBackGround:HTMLDivElement, select:HTMLSelectElement){
            var nameText = document.createElement('span') as HTMLSpanElement;
            nameText.style.color = "#eeeeee";
            nameText.textContent = "NAME";
            nativeBackGround.appendChild(nameText);

            var name = document.createElement('input') as HTMLInputElement;
            name.value = "InvokeContractTest_NativeNEP5";
            nativeBackGround.appendChild(name);

            var symbolText = document.createElement('span') as HTMLSpanElement;
            symbolText.style.color = "#eeeeee";
            symbolText.textContent = "SYMBOL";
            nativeBackGround.appendChild(symbolText);

            var symbol = document.createElement('input') as HTMLInputElement;
            symbol.value = "InvokeContractTest";
            nativeBackGround.appendChild(symbol);

            var totalSupplyText = document.createElement('span') as HTMLSpanElement;
            totalSupplyText.style.color = "#eeeeee";
            totalSupplyText.textContent = "TotalSupply";
            nativeBackGround.appendChild(totalSupplyText);

            var totalSupply = document.createElement('input') as HTMLInputElement;
            totalSupply.value = "2000000000";
            nativeBackGround.appendChild(totalSupply);

            var presionText = document.createElement('span') as HTMLSpanElement;
            presionText.style.color = "#eeeeee";
            presionText.textContent = "Presion";
            nativeBackGround.appendChild(presionText);

            var presion = document.createElement('input') as HTMLInputElement;
            presion.value = "8";
            nativeBackGround.appendChild(presion);       

            var btnSend = document.createElement('button') as HTMLButtonElement;
            btnSend.textContent = "send";
            nativeBackGround.appendChild(btnSend);

            btnSend.onclick = async () => {           
                AppChainTool.SendNativeContract(parseInt(presion.value), parseInt(totalSupply.value), symbol.value, name.value, 
                (select.childNodes[select.selectedIndex] as HTMLOptionElement).value, GUITool.pubkey, GUITool.prikey);                           
            }    
        }
    }
}