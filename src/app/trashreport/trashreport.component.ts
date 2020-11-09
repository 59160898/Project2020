import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-trashreport',
  templateUrl: './trashreport.component.html',
  styleUrls: ['./trashreport.component.scss']
})
export class TrashreportComponent implements OnInit {

  canvas: any;
  ctx: any;

  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["ก.ค.-63", "ส.ค.-63", "ก.ย.-63", "ต.ค.-63"],
        datasets: [{
          label: "เขาสามมุข",
          backgroundColor: "#5B9BD5",
          data: [10, 20, 30, 30]
        },
        {
          label: "ถนนลงหาดบางแสน",
          backgroundColor: '#ED7D31',
          data: [70, 40, 10, 100]
        },
        {
          label: "หาดวอนนภา",
          backgroundColor: '#A5A5A5',
          data: [80, 50, 90, 27]
        },
        {
          label: "ถนนเลี่ยงเมือง",
          backgroundColor: '#87431d',
          data: [90, 60, 65, 99]
        }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              fontSize: 18,
              fontColor: 'black'
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: 18,
              fontColor: 'black'
            }
          }]
        },
        legend: {
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'black',
              fontSize: 18
          }
      },
        responsive: false
      }
    });
  }

}
