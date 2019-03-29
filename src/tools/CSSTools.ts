/// <reference path="../tools/wwwtool.ts"/>
/// <reference path="../../lib/neo-ts.d.ts"/>
namespace WebBrowser
{
    export class CSSTool
    {   //外层
        public static loginbackground_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement){
            element.style.width = "100%";
            element.style.backgroundImage = "url(./img/mainbg.jpg)";
            element.style.textAlign = "center";
            element.style.backgroundRepeat = "round"
            element.style.marginTop = "20px";
        }

        public static messagebg_set(element:HTMLDivElement){
            element.style.display = "block";
            element.style.width = "440px";    
            element.style.cssFloat = "left";
            element.style.marginLeft = "50px";
            element.style.marginTop = "80px";        
        }

        public static loginhr_set(element:HTMLHRElement){
            element.style.display = "block";
            element.style.width = "240px";
            element.style.marginLeft = "0px";
        }

        public static titleFont_set(element:HTMLSpanElement){
            element.style.display = "block";
            element.style.width = "100%";
            element.style.fontSize = "30px";
            element.style.textAlign = "left";
            element.style.fontWeight = "bold";
            element.style.color = "#fff";
        }

        public static valueFont_set(element:HTMLSpanElement){
            element.style.display = "block";
            element.style.width = "100%";
            element.style.fontSize = "18px";
            element.style.textAlign = "left";
            element.style.color = "#fff";
        }

        public static loginbg_set(element:HTMLDivElement){
            element.style.display = "inline-block";
            element.style.width = "340px";
            element.style.backgroundColor = "rgb(51,53,66)";
            element.style.borderRadius = "25px";
            element.style.margin = "50px";
        }

        //标题
        public static name_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement){
            element.style.color = "#ffffff";
            element.style.fontSize = "15px";
            element.style.borderBottom = "1px solid black";
            element.style.lineHeight = "60px";
        }

        //处理浮动的
        public static handle_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement){
           element.style.textAlign = 'left';
           element.style.width = '100%';
           element.style.overflow = 'hidden';
           element.style.margin = '15px 0';
        }

        //功能部分
        public static uploadFiles_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement){
            element.style.width = "300px";
            element.style.margin = "0 auto";
            element.style.padding = "40px 0 60px 0";
        }

        //上传文件修饰
        public static firstFile_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement){
            element.style.width = "100%";
            element.style.backgroundColor = "black";
            element.style.color = "#ffffff";
            element.style.padding = "10px 0";
            element.style.cursor = "pointer";
            element.style.position = "relative";
        }
        //上传file标签修改
        public static file_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.width = "100%";
            element.style.position = "absolute";
            element.style.opacity = "0";
            element.style.cursor = "pointer";
            element.style.top = "8px";
        }

        //上传文字提示  密码提示
        public static fileTip_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.color = "red";
            element.style.textAlign = "left";
            element.style.height = "30px";
            element.style.lineHeight = "30px";
            element.style.marginBottom = "0px";
        }
      
        //密码输入
        public static password_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.width = "100%";
            element.style.border = "none";
            element.style.outline = "none";
            element.style.backgroundColor = "#CDCEE0";
            element.style.height = "45px";
            element.style.textAlign = "center";
        }

        //登录按钮
        public static btn_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
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
        public static createWallet_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
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
        public static title_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.margin = '0 auto';
            element.style.overflow = 'hidden';
            element.style.background = "#3D3E4C";
        }

         //资产转账等等标题按钮
         public static titleBtn_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.cssFloat = 'left';
            element.style.color = "white";
            element.style.padding = '5px 30px';
            element.style.border = "none";
            element.style.outline = "none";
        }

       //资产左边的标题
        public static assets_setname(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
           element.style.color  = '#F2F2F2';
           element.style.fontSize = '18px';
           element.style.padding = '10px 0';
           element.style.borderBottom = '1px solid #BFBFBF';
        }

         //资产左边
        public static zoroChain_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
           element.style.cssFloat = "left";
           element.style.width = '400px';
           element.style.textAlign = 'center';
           element.style.border = '1px solid #BFBFBF';
           element.style.borderRadius = '3px';
           element.style.background = '#3D3E4C';
           element.style.marginTop = '50px';
        }
        
         //列表
         public static BCP_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.color = "#F2F2F2";
            element.style.overflow = 'hidden';
            element.style.padding = '10px 15px';
            element.style.borderBottom = '1px solid #BFBFBF'
         }

         //左浮动
         public static flowLeft_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.cssFloat = "left";
         }

          //右浮动
          public static flowRight_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.cssFloat = "right";
         }

         //转账模块
         public static transfer_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.width = "600px";
            element.style.height = "50px";
            element.style.background = '#3C3E4B';
            element.style.margin = '50px auto';
            element.style.marginBottom = '0px';
            element.style.border = '1px solid #3C3E4B';
         }

         //转账三个按钮
         public static transfer_btn(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.width = "33.33333333333333%";
            element.style.textAlign = "center";
            element.style.lineHeight = '45px';
            element.style.background = '#333542';
            element.style.border = 'none';
            element.style.outline = 'none';
            element.style.color = "white";  
         }

        //转账子模块
        public static normalbackground_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.width = "600px";
            element.style.background = "#3C3E4B";
            element.style.margin = '0 auto';
            element.style.padding = '25px 45px';
         }


         //下拉选择框
        public static select_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.border = '1px solid #CDCEE0';
            element.style.background = '#3C3E4B';
            element.style.color = 'white';
            element.style.width = '150px';
            element.style.padding = '5px 15px';
         }

          // 转账输入框
        public static addr_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
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
        public static break_set(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.border = 'none';
            element.style.outline = 'none';
            element.style.color = 'white';
            element.style.background = '#3C3E4B';
         }

         //addMethod  =按钮  左边的
         public static addMethod_btn(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.border = 'none';
            element.style.outline = 'none';
            element.style.background = '#C8AB73';
            element.style.padding = '10px 15px';
            element.style.borderRadius = '5px';
            element.style.marginLeft = '125px';
         }

         //addMethod  =按钮  右边的
         public static subParams_btn(element:HTMLDivElement|HTMLButtonElement|HTMLSpanElement|HTMLInputElement){
            element.style.border = 'none';
            element.style.outline = 'none';
            element.style.background = '#C8AB73';
            element.style.padding = '10px 15px';
            element.style.borderRadius = '5px';
            element.style.marginRight = '125px';
         }
    }
}