import { Component } from '@angular/core';
import {Video} from "../interface";
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent {

  channel: any;
  video!:Video

  constructor( public list:UploadService){

  }
  ngOnInit():void {
    this.list.getVideosById(2).subscribe((videos) => {
      this.video=videos[0]
    })
  }
}

