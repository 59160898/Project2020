import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-addcollectortrash',
  templateUrl: './addcollectortrash.component.html',
  styleUrls: ['./addcollectortrash.component.scss']
})
export class AddcollectortrashComponent implements OnInit {

  constructor(private http: HttpClient, private shareService: ShareService) { }

  prefix: String
  firstname: String
  lastname: String
  national_id: String
  phone: String
  house_number: String
  moo: String
  road: String
  sub_district: String
  district: String
  province: String
  postcode: String
  user_id: Object

  collectors: []

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.http.get(this.shareService.serverPath + '/CollectorAll').subscribe((res: any) => {
      this.collectors = res
    })
  }

  save() {
    var params = {
      prefix: this.prefix,
      firstname: this.firstname,
      lastname: this.lastname,
      national_id: this.national_id,
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
    var path = this.shareService.serverPath + '/addCollector'
    this.http.post(path, params).subscribe((res: any) => {
      alert("บันทึกเรียบร้อย");
      this.loadData()
    })
  }

  CollectorsDelete(item){
    if (confirm("ยืนยันการลบ ?")){
      var param = {
        _id: item._id
      }
      var path = this.shareService.serverPath + '/CollectorsDelete'
      this.http.post(path, param).subscribe((res: any) => {
        alert("ลบรายการแล้ว")
        this.loadData()
      })
    }
  }
}
