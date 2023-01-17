import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Theme, Video} from "../interface";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  videos!: Video[]
  theme!: Theme[]
  BaseUrl: string="https://dev-project-upskill2-grupo2.pantheonsite.io"
  constructor(public service: UploadService) { }

  ngOnInit(): void {
    this.service.getVideos().subscribe((videos) => {
      this.videos = videos
    })

    this.service.getThemeById(8).subscribe((theme) => {
      this.theme = theme
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

  @Input() id?: number
  @Input() title?: string
  @Input() teaser?: string
  @Input() body?: string
  @Input() tag_id?: [number]
  @Input() video_id?: [number]
  @Input() channel_name?: string
  @Input() channel_cover?: string
  @Input() channel_picture?: string

}
