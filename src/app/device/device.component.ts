import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  
  getIndex(element) {
    return [...element.parentNode.children].findIndex(c => c == element) + 1;
  }
  
  constructor() {

  }

  ngOnInit(): void {

  }

}
