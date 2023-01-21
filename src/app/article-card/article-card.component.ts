import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Theme} from "../interface";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  BASE_URL = "https://dev-project-upskill2-grupo2.pantheonsite.io/";
  themes: Theme[] = []
  constructor(public service: UploadService) { }

  ngOnInit(): void {

    this.service.getThemes().subscribe((theme)=>{
      this.themes = theme
      console.log(this.themes)
    })

  }

  @Input() id!: number
  @Input() title!: string
  @Input() teaser!: string
  @Input() body!: string
  @Input() tag_id!: number[]
  @Input() video_id!: number[]
  @Input() thumbnail!: string
  @Input() channel_name!: string


}
