import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Initialize the echarts instance based on the prepared dom
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    // Specify the configuration items and data for the chart
    option = {
      title: {
        text: "Charts using echarts",
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          rotate: 30
        },
        data: ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021",],
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        axisLabel: {
          fontSize: 16,
        },
      },
      series: [
        {
          data: [120, 232, 300, 434, 590, 630, 1120, 820, 732, 901, 934, 890, 730, 633, 820, 932, 901, 944, 1290, 1330, 1320, 1499],
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series',
            label: {
              show: true,
              position: 'top',
              padding: 10,
              backgroundColor: '#eee',
              borderWidth: 1,
              borderRadius: 4,
              shadowBlur: 3,
              shadowColor: '#888',
              shadowOffsetX: 0,
              shadowOffsetY: 1,
              textBorderColor: '#000',
            }
          },
          endLabel: {
            show: true,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' }
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(64, 85, 255)',
              },
              {
                offset: 1,
                color: 'rgb(236, 236, 236)',
              }
            ])
          },


        }
      ]
    };

    myChart.setOption(option);
  }



}
