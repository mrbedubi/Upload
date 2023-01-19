import { Component } from '@angular/core';
import {Tag, Video} from "../interface";
import {UploadService} from "../upload.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  tags!:Tag[]

  constructor( public list:UploadService ,public router: Router){

  }
  ngOnInit():void {
    this.list.getTags().subscribe((tags) => {
      this.tags=tags
      console.log(tags[1].id);
    })
  }
}
