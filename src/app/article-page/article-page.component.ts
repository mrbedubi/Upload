import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Theme, Video} from "../interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  videoIds!: string[]
  videos!: Video[]
  videosById: Video[] = []
  theme!: Theme[]
  BaseUrl: string="https://dev-project-upskill2-grupo2.pantheonsite.io"

  ids!: any
  constructor(public service: UploadService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.ids = this.route.snapshot.paramMap.get('id')

    this.service.getVideos().subscribe((videos) => {
      this.videos = videos

    })

    this.service.getThemeById(this.ids).subscribe((theme) => {
      this.videoIds = Object.values(theme)[0].video_id.split(", ")
      this.theme = Object.values(theme)

      for (let video in this.videoIds) {
        this.service.getVideosById(parseInt(this.videoIds[video])).subscribe((videosById)=>{
          this.videosById.push(videosById[0])
        })
      }
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
