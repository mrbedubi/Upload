import {Component, ViewContainerRef} from '@angular/core';
import {Tag, Video} from "../interface";
import {UploadService} from "../upload.service";
import {Router} from "@angular/router";
import {TagsListComponent} from "../tags-list/tags-list.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  tags!:Tag[];
  tagModal:Boolean=false;


  constructor( public list:UploadService ,public router: Router ){

  }
  ngOnInit():void {
    this.list.getTags().subscribe((tags) => {
      this.tags=tags
      console.log(tags[1].id);
    })

  }
tagModalClick(){
    if(this.tagModal){
      this.tagModal=false
    }else this.tagModal=true;
}
}
