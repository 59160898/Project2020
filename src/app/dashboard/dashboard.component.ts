import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  canvas: any;
  ctx: any;

  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["มหาวิทยาลัยบูรพา", "ชายหาดบางแสน", "แหลมแท่น บางแสน", "หาดวอนนภา"],
        datasets: [{
          label: "ขวดแก้ว",
          backgroundColor: "#5B9BD5",
          data: [25, 25, 25, 25]
        },
        {
          label: "ขวดพลาสติก",
          backgroundColor: '#ED7D31',
          data: [50, 50, 50, 50]
        },
        {
          label: "กระป๋องโลหะ",
          backgroundColor: '#A5A5A5',
          data: [80, 80, 80, 80]
        }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 100,
              fontSize: 18,
              fontColor: 'black',
              callback: function (value) {
                return value + "%"
              }
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: 16,
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

