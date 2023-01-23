import { Component } from '@angular/core';
import {UploadService} from "../upload.service";
import {Theme} from "../interface";

@Component({
  selector: 'app-theme-suggestions',
  templateUrl: './theme-suggestions.component.html',
  styleUrls: ['./theme-suggestions.component.scss']
})


export class ThemeSuggestionsComponent {
theme!:Theme;
BASEURL:string="https://dev-project-upskill2-grupo2.pantheonsite.io/"


  constructor(public  service:UploadService) {
    service.getThemes().subscribe((theme)=>{
      this.theme=theme[0];
    })
  }


}
