import { Component } from '@angular/core';
import {UploadService} from "../upload.service";
import {Video, Channel ,Tag} from "../interface";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {
  videos!: Video[];
  vid_id!: any;

  constructor(public service: UploadService) {

  }

  ngOnInit(): void {
    this.service.getVideos().subscribe((videos) => {
      this.videos = videos
    })




  }



}
