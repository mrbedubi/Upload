import { Component, OnInit } from '@angular/core';
import {UploadService} from "../upload.service";
import {Theme} from "../interface";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  themes: Theme[] = []
  constructor(public service: UploadService) { }

  ngOnInit(): void {
    this.service.getThemes().subscribe((theme)=>{
      this.themes = theme
    })
  }

}
