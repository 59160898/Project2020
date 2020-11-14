import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-addtypetrash',
  templateUrl: './addtypetrash.component.html',
  styleUrls: ['./addtypetrash.component.scss']
})
export class AddtypetrashComponent implements OnInit {

  name: string

  constructor(private http: HttpClient) { }

  ngOnInit(){
  }
  save() {
    var params = {
      name: this.name
    }
    this.http.post('http://localhost:3000/addTypestrash', params).subscribe((res: any) => {
      console.log(res.data)
    })
  }

}
