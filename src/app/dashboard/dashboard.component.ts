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

  constructor() {
  }

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
              fontSize: 18,
              fontColor: 'black'
            }
          }]
        },
        legend: {
          labels: {
            fontColor: 'black',
            fontSize: 18

          }
        },
        responsive: true
      }
    });

    this.canvas = document.getElementById('pieChart');
    this.ctx = this.canvas.getContext('2d');
    const pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ["มหาวิทยาลัยบูรพา", "ชายหาดบางแสน", "แหลมแท่น บางแสน", "หาดวอนนภา"],
        datasets: [{
          backgroundColor: [
            '#5B9BD5',
            '#ED7D31',
            '#A5A5A5',
            '#3CB371'
          ],
          data: [10, 20, 30, 80]
        }
        ]
      },
      options: {
        legend: {
          labels: {
            fontColor: 'black',
            fontSize: 18
          }
        }
      }
    });

    this.canvas = document.getElementById('donutChart');
    this.ctx = this.canvas.getContext('2d');
    const donutChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ["ขยะทั่วไป", "ขยะอินทรีย์", "ขยะรีไซเคิล", "ขยะอันตราย"],
        datasets: [{
          backgroundColor: [
            '#5B9BD5',
            '#3CB371',
            '#F5C340',
            '#CC0000'
          ],
          data: [10, 20, 30, 80]
        }
        ]
      },
      options: {
        legend: {
          labels: {
            fontColor: 'black',
            fontSize: 18
          }
        }
      }

    });
  }

}

