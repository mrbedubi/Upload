import { Component } from '@angular/core';
import {UploadService} from "../upload.service";
import {Video, Channel ,Tag} from "../interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  videos!: Video[];
  BaseUrl: string="https://dev-project-upskill2-grupo2.pantheonsite.io"
vid_id!:any ;


  constructor(public list: UploadService) {
  }

  ngOnInit(): void {
    this.list.getVideos().subscribe((videos) => {
      this.videos = videos
    })

    this.vid_id=  this.list.getVideoId("/videos/plant-propagation-beginners-5-indoor-plants");
    console.log(this.vid_id['mid'])
  }


}
