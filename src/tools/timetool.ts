namespace WebBrowser
{


    export class DateTool {
        /**************************************时间格式化处理************************************/
        static dateFtt(fmt, date): string { //author: meizz   
            var o = {
                "M+": date.getMonth() + 1,                 //月份   
                "d+": date.getDate(),                    //日   
                "h+": date.getHours(),                   //小时   
                "m+": date.getMinutes(),                 //分   
                "s+": date.getSeconds(),                 //秒   
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
                "S": date.getMilliseconds()             //毫秒   
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }

        static getTime(date: number) {
            date = date.toString().length == 10 ? date * 1000 : date;
            let time = new Date(date);
            // if (sessionStorage.getItem("language") != "cn") {
            //     return new Date(time).toUTCString();
            // } else {
                return this.dateFtt("yyyy/MM/dd hh:mm:ss", new Date(time));
            // }
        }

        static getTimeSecond(data:number){
            var now = parseInt(Date.now() / 1000 + "");
            var time = now - data;
            var m = parseInt(time / 60 + "");
            if (m > 0) {
                return m + "min";
            }else{
                return time + "sec";
            }
        }
    }
}