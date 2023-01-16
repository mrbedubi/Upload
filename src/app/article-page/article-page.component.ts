import { Component, OnInit } from '@angular/core';
import {UploadService} from "../upload.service";
import {Video} from "../interface";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  videos!: Video[]
  BaseUrl: string="https://dev-project-upskill2-grupo2.pantheonsite.io"
  constructor(public service: UploadService) { }

  ngOnInit(): void {
    this.service.getVideos().subscribe((videos) => {
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
