
/// <reference path="./shape/rectElement.ts"/>
/// <reference path="./event/EventManager.ts"/>
/// <reference path="./event/Event.ts"/>
/// <reference path="../tools/wwwtool.ts"/>
namespace RectElement
{
    export class rectCanvas{

        rectCanvas:HTMLCanvasElement;
        g:CanvasRenderingContext2D;

        Max:number = 60;
        blockWidth:number = 5;
        blockHeight:number = 3;

        rectInterval:RectMessage[] = null;
        chart:Chart = null;
        data:any = {};

        constructor(){
            this.rectCanvas = document.getElementById("rectCanvas") as HTMLCanvasElement;
            this.rectCanvas.width = window.outerWidth;
            this.rectCanvas.style.width = "100%";
            this.rectCanvas.height = 150;
            this.rectCanvas.style.height = "150px";
            this.g = this.rectCanvas.getContext("2d");      
               
            this.getBlockInterval();                       
        }           

        createChart(){
            this.chart = new Chart(this.g, {
                type: 'bar',
                data: this.data,
                options: {                    
                    title:{
                        display:false
                    }, 
                    legend:{
                        display:false
                    },              
                    scales: {
                        xAxes:[{                                                      
                            scaleLabel:{
                                display:false
                            },
                            ticks: {
                                display:false,
                                beginAtZero:true                                
                            },
                            gridLines:{
                                display:false,
                                drawBorder:false
                            }
                        }],
                        yAxes: [{
                            scaleLabel:{
                                display:false
                            },
                            ticks: {
                                display:false,
                                beginAtZero:true
                            },
                            gridLines:{
                                display:false,
                                drawBorder:false
                            }
                        }]
                    }
                }
            });
        }

        async getBlockInterval(){
            this.rectInterval = await WebBrowser.WWW.api_getBlockIntervals("", this.Max);
            this.newBlockIndex = this.rectInterval[0].blockindex;
            var labels = [];
            var data = [];
            var colors = [];
            var hovercolors = [];
            for (var i = this.rectInterval.length - 1; i > -1; i--){
                labels.push(this.rectInterval[i].blockindex);
                data.push(this.rectInterval[i].blockinterval);
                if (i == 0) {
                    colors.push('rgba(255, 255, 255, 0.5)');
                    hovercolors.push('rgba(255, 255, 255, 1.0)');
                }else{
                    colors.push('rgba(222, 222, 222, 0.2)');
                    hovercolors.push('rgba(222, 222, 222, 0.8)');
                }                
            }                

            this.data = {
                labels: labels,
                datasets: [{
                    label:"BlockInterval",
                    data: data,
                    backgroundColor: colors,
                    hoverBackgroundColor:hovercolors
                }]
            }; 
            this.createChart();    
        }

        newBlockIndex:number = -1;
        async getBlockIntervalNext(){
            var rectmessage:RectMessage = await WebBrowser.WWW.api_getBlockInterval("");
            if (rectmessage[0].blockindex != this.newBlockIndex){
                this.newBlockIndex = rectmessage[0].blockindex;
                this.data.datasets[0].data.splice(0, 1);
                this.data.datasets[0].data.push(rectmessage[0].blockinterval);
                this.data.labels.splice(0,1);
                this.data.labels.push(rectmessage[0].blockindex);

                this.chart.data = this.data;
                this.chart.update();
                this.chart.render();
            }
        }

        update(){
            this.getBlockIntervalNext();
        }

        draw(){
            //this.chart.render();
        }
    } 

    export class RectMessage{
        blockindex:number;
        blockinterval:number;
    }
}