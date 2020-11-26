import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dashboard(){
    this.router.navigate(['dashboard']);
  }

  trashmanage(){
    this.router.navigate(['trashmanage']);
  }

  device(){
    this.router.navigate(['device']);
  }

  trashreport(){
    this.router.navigate(['trashreport']);
  }

  deviceReport(){
    this.router.navigate(['deviceReport']);
  }

  setting(){
    this.router.navigate(['setting']);
  }

  addtypetrash(){
    this.router.navigate(['addtypetrash']);
  }

  addroutecollectiontrash(){
    this.router.navigate(['addroutecollectiontrash']);
  }

  adddriver(){
    this.router.navigate(['adddriver']);
  }

  addcollectortrash(){
    this.router.navigate(['addcollectortrash']);
  }

  addtruck(){
    this.router.navigate(['addtruck']);
  }


  manageUsers(){
    this.router.navigate(['manageUsers']);
  }

}
