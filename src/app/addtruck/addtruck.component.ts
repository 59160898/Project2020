import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-addtruck',
  templateUrl: './addtruck.component.html',
  styleUrls: ['./addtruck.component.scss']
})
export class AddtruckComponent implements OnInit {

  constructor(private http: HttpClient, private shareService: ShareService) { }
  vehicle_license: String
  vehicle_type: String
  engine_type: String
  vehicle_capacity: Number
  vehicle_color: String
  holiday: String
  start_time: String
  stop_time: String

  vehicles: []

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.http.get(this.shareService.serverPath + '/VehicleAll').subscribe((res: any) => {
      this.vehicles = res
    })
  }

  save() {
    var params = {
      vehicle_license: this.vehicle_license,
      vehicle_type: this.vehicle_type,
      engine_type: this.engine_type,
      vehicle_capacity: this.vehicle_capacity,
      vehicle_color: this.vehicle_color,
      holiday: this.holiday,
      start_time: this.start_time,
      stop_time: this.stop_time
      
    }
    var path = this.shareService.serverPath + '/addVehicle'
    this.http.post(path, params).subscribe((res: any) => {
      alert("บันทึกเรียบร้อย");
      this.loadData()
    })
  }

  VehiclesDelete(item){
    if (confirm("ยืนยันการลบ ?")){
      var param = {
        _id: item._id
      }
      var path = this.shareService.serverPath + '/VehiclesDelete'
      this.http.post(path, param).subscribe((res: any) => {
        alert("ลบรายการแล้ว")
        this.loadData()
      })
    }
  }
}
