import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Tag, Theme, Video} from "../interface";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  videoIds!: string[]
  tagsIds!: string[]
  videos!: Video[]
  videosById: Video[] = []
  tagsById: Tag[] = [];
  theme!: Theme[]
  BaseUrl: string="https://dev-project-upskill2-grupo2.pantheonsite.io"

  ids!: any
  constructor(public service: UploadService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }


  ngOnInit(): void {

    let path = this.route.snapshot.url
    console.log(path);
    this.service.getId('article', path[1].path).subscribe((article) => {
      this.ids = article.nid[0].value;

      this.service.getVideos().subscribe((videos) => {
        this.videos = videos

      })

      this.service.getThemeById(this.ids).subscribe((theme) => {
        this.videoIds = Object.values(theme)[0].video_id.split(", ")
        this.tagsIds = Object.values(theme)[0].tag_id.split(", ")
        this.theme = Object.values(theme)
        console.log(this.tagsIds)
        console.log(this.videoIds)


        for (let video in this.videoIds) {
          this.service.getVideosById(parseInt(this.videoIds[video])).subscribe((videosById)=>{
            this.videosById.push(videosById[0])

          })
        }

        for (let tag in this.tagsIds) {
          this.service.getTagsById(parseInt(this.tagsIds[tag])).subscribe((tagsById) => {
            this.tagsById.push(tagsById[0])
            console.log(this.tagsById)
          })
        }
      })

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
