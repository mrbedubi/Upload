import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Tag, Theme, Video} from "../interface";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {join} from "@angular/compiler-cli";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  videoIds!: string[]
  tagsIds!: string[]
  videosByTags!: Video[]
  videosById: Video[] = []
  tagsById: Tag[] = [];
  theme!: Theme[]
  tags: Tag[] = []
  BaseUrl: string="https://dev-project-upskill2-grupo2.pantheonsite.io"
  paginaAtual:number = 0

  ids!: any
  constructor(public service: UploadService, private route: ActivatedRoute, private sanitizer: DomSanitizer , private router:Router) { }


  ngOnInit(): void {
    let url =this.router.url;
    this.service.getId(url).subscribe((article) => {
      this.ids = article.nid[0].value;



      this.service.getThemeById(this.ids).subscribe((theme) => {
        this.videoIds = Object.values(theme)[0].video_id.split(", ")
        this.tagsIds = Object.values(theme)[0].tag_id.split(", ")
        this.theme = Object.values(theme)
        console.log(this.theme)


        for (let video in this.videoIds) {
          this.service.getVideosById(parseInt(this.videoIds[video])).subscribe((videosById)=>{
            this.videosById.push(videosById[0])

          })
        }

        let tagRandom: string[] = [];
        let tagId: string
        for (let tag in this.tagsIds) {
          this.service.getTagsById(parseInt(this.tagsIds[tag])).subscribe((tagsById) => {
            this.tagsById.push(tagsById[0])
            tagRandom.push(tagsById[0].id.toString())
            tagId = tagRandom[Math.round(Math.random()*(tagRandom.length))]

            this.service.getVideosByTag(tagId).subscribe((videos) => {
              console.log(videos)
              this.videosByTags = videos
            })
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
  @Input() external_links?: string
}
