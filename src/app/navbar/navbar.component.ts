import {Component, ViewContainerRef} from '@angular/core';
import {Tag, Video} from "../interface";
import {UploadService} from "../upload.service";
import {ActivatedRoute, Router} from "@angular/router";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faStream} from "@fortawesome/free-solid-svg-icons";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {TagsListComponent} from "../tags-list/tags-list.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  tags!:Tag[];
  tagModal:Boolean=false;
  faHome = faHome
  faStream = faStream
  faFilm = faFilm
  faPlay = faPlay



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
