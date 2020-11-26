import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShareService } from '../ShareService';



@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.scss']
})
export class AdddriverComponent implements OnInit {

  constructor(private http: HttpClient, private shareService: ShareService) { }

  prefix: String
  firstname: String
  lastname: String
  national_id: String
  driver_license: String
  phone: String
  house_number: String
  moo: String
  road: String
  sub_district: String
  district: String
  province: String
  postcode: String
  user_id: Object

  drivers: []

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.http.get(this.shareService.serverPath + '/DriverAll').subscribe((res: any) => {
      this.drivers = res
    })
  }

  save() {
    var params = {
      prefix: this.prefix,
      firstname: this.firstname,
      lastname: this.lastname,
      national_id: this.national_id,
      driver_license: this.driver_license,
      phone: this.phone,
      house_number: this.house_number,
      moo: this.moo,
      road: this.road,
      sub_district: this.sub_district,
      district: this.district,
      province: this.province,
      postcode: this.postcode,
      user_id: this.user_id
    }
    var path = this.shareService.serverPath + '/addDriver'
    this.http.post(path, params).subscribe((res: any) => {
      alert("บันทึกเรียบร้อย");
      this.loadData()
    })
  }

  DriversDelete(item){
    if (confirm("ยืนยันการลบ ?")){
      var param = {
        _id: item._id
      }
      var path = this.shareService.serverPath + '/DriversDelete'
      this.http.post(path, param).subscribe((res: any) => {
        alert("ลบรายการแล้ว")
        this.loadData()
      })
    }
  }

}
