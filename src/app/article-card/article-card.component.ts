import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Tag, Theme} from "../interface";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  tags: Tag[] = []
  BASE_URL = "https://dev-project-upskill2-grupo2.pantheonsite.io/";
  constructor(public service: UploadService) { }

  ngOnInit(): void {
    this.service.getTagsById(this.tag_id).subscribe((tag)=> {
      this.tags = tag
    })
  }

  @Input() id!: number
  @Input() title!: string
  @Input() teaser!: string
  @Input() body!: string
  @Input() tag_id!: string
  @Input() video_id!: number[]
  @Input() thumbnail!: string
  @Input() channel_name!: string


}
