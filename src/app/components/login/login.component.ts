import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  lUsername:string = "";
  lPassword:string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(){
    if(this.lUsername == "admin" && this.lPassword == "1234"){
      this.router.navigate(['dashboard']);
    }else{
      window.alert("Login failed");
    }

  }

}
