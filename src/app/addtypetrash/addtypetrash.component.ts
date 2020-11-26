import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShareService } from '../ShareService';


@Component({
  selector: 'app-addtypetrash',
  templateUrl: './addtypetrash.component.html',
  styleUrls: ['./addtypetrash.component.scss']
})
export class AddtypetrashComponent implements OnInit {
 
  name: string
  _id: Object

  waste_types: []

  constructor(private http: HttpClient, private shareService: ShareService) { }

  ngOnInit(){
    this.loadData()
  }

  loadData() {
    this.http.get(this.shareService.serverPath + '/WasteTypesAll').subscribe((res: any) => {
      this.waste_types = res
    })
  }

  save() {
    var params = {
      name: this.name,
      _id: null
    }
    var path = this.shareService.serverPath + '/addWasteTypes';
    if (this._id != null){
      path = this.shareService.serverPath + '/WasteTypesUpdate';
      params._id = this._id
    }
    this.http.post(path, params).subscribe((res: any) => {
      alert("บันทึกเรียบร้อย");
      this.loadData()
    });
  }
   

  WastetypesDelete(item){
    if (confirm("ยืนยันการลบ ?")){
      var param = {
        _id: item._id
      }
      var path = this.shareService.serverPath + '/WasteTypesDelete'
      this.http.post(path, param).subscribe((res: any) => {
        alert("ลบรายการแล้ว")
        this.loadData()
      })
    }
  }

  WastetypesInfo(item){
    this.name = item.name
    this._id = item._id
  }

}
