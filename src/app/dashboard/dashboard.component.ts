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
          data: [10, 20, 30, 80]
        },
        {
          label: "ขวดพลาสติก",
          backgroundColor: '#ED7D31',
          data: [70, 40, 10, 100]
        },
        {
          label: "กระป๋องโลหะ",
          backgroundColor: '#A5A5A5',
          data: [80, 50, 90, 27]
        }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 100,
              callback: function (value) {
                return value + "%"
              }
            }
          }]
        },
        responsive: false
      }
    });
  }

}

