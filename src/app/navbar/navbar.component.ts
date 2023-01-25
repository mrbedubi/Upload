import {Component, ViewContainerRef} from '@angular/core';
import {Tag, Video} from "../interface";
import {UploadService} from "../upload.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TagsListComponent} from "../tags-list/tags-list.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  tags!:Tag[];
  tagModal:Boolean=false;


  constructor( public service:UploadService, public router: Router, public activatedRouter: ActivatedRoute){

  }
  ngOnInit():void {
    this.service.getTags().subscribe((tags) => {
      this.tags=tags
    })

  }
tagModalClick(){
    if(this.tagModal){
      this.tagModal=false
    }else this.tagModal=true;
}
}
