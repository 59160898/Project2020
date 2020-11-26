import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  username: String
  firstname: String
  lastname: String
  email: String
  status: String
  password: String

  Users: []

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    this.http.get('http://localhost:3000/manageUsersInfo').subscribe((res: any) => {
      this.firstname = res;
      this.lastname = res;
      this.status = res;
    });
  }

  save() {
    if (confirm("ยืนยันการบันทึก"))  {
      var params = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        status: this.status,
        password: this.password
      }
      this.http.post('http://localhost:3000/manageUsers', params).subscribe((res: any) => {
        alert("Save Success")
        this.loadInfo()
      });
    }
  }

}
