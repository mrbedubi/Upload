import { Component } from '@angular/core';
import {UploadService} from "../upload.service";
import {Theme} from "../interface";

@Component({
  selector: 'app-theme-suggestions',
  templateUrl: './theme-suggestions.component.html',
  styleUrls: ['./theme-suggestions.component.scss']
})
export class ThemeSuggestionsComponent {

  themes: Theme[] = []

  constructor(public service: UploadService) {
  }

  ngOnInit() {
    this.service.getThemes().subscribe((theme) => {
      this.themes = theme
    })
  }
}
