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
  lang = localStorage.getItem('lang') || 'en';

  constructor(public service: UploadService, private translate: TranslateService) {
    translate.use(this.lang)
  }

  ngOnInit(): void {
    this.service.getVideos().subscribe((videos) => {
      this.videos = videos
    })

    this.vid_id = this.service.getVideoId("/videos/plant-propagation-beginners-5-indoor-plants");


  }



}
