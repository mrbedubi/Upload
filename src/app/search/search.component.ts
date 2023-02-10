import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Tag, Video} from "../interface";
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
videos!:Video[];
tags!:Tag[];
  tagId!:any
  BaseUrl: string="https://dev-project-upskill2-grupo2.pantheonsite.io";

  constructor( private route: ActivatedRoute , private router: Router ,public  service:UploadService) { }

  ngOnInit(): void {
    this.tagId = this.route.snapshot.paramMap.get('tag');
    this.service.getVideosByTag(this.tagId).subscribe((video)=>{
      this.videos=video.filter((obj, index, self) => {
        return self.findIndex(t => t.id === obj.id ) === index;
      });

    });

    this.service.getTagsById(this.tagId).subscribe((tag)=>{
    this.tags=tag;
    });

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

   }



}
