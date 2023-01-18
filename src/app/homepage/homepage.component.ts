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



  constructor(public list: UploadService) {
  }

  ngOnInit(): void {

    this.list.getVideos().subscribe((videos) => {
      this.videos = videos
    })

  }

  public VideoId(s: string, url: string) {

    if (s != "") {
      return this.BaseUrl+ s
    }
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://img.youtube.com/vi/" + videoId + "/sddefault.jpg"
  }


}
