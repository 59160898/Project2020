import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-trashmanage',
  templateUrl: './trashmanage.component.html',
  styleUrls: ['./trashmanage.component.scss']
})
export class TrashmanageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addtrash(){
    this.router.navigate(['addtrash']);
  }
}
