import { Component } from '@angular/core';
import {UploadService} from "../upload.service";
import {Video, Channel ,Tag} from "../interface";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {
  videos!: Video[];
  paginaAtual = 1
  vid_id!: any;

  constructor(public service: UploadService, private translate: TranslateService) {

  }

  ngOnInit(): void {
    this.service.getVideos(this.paginaAtual).subscribe((videos) => {
      this.videos = videos
    })




  }

  nextPage(): void {

    this.paginaAtual++;

    this.service.getVideos(this.paginaAtual).subscribe((videos) => {
      this.videos.push(...videos);
      console.log(this.videos)
    })

  }
}
