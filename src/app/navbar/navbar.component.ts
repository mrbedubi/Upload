import { Component } from '@angular/core';
import {Tag, Video} from "../interface";
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  tags!:Tag[]

  constructor( public list:UploadService){

  }
  ngOnInit():void {
    this.list.getTags().subscribe((tags) => {
      this.tags=tags
    })
  }
}
