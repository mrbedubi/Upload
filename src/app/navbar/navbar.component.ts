import {Component, ViewContainerRef} from '@angular/core';
import {Tag, Video} from "../interface";
import {UploadService} from "../upload.service";
import {ActivatedRoute, Router} from "@angular/router";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faStream} from "@fortawesome/free-solid-svg-icons";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {TagsListComponent} from "../tags-list/tags-list.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  tags!: Tag[];
  tagModal: Boolean = false;
  faHome = faHome
  faStream = faStream
  faFilm = faFilm
  faPlay = faPlay
  lang: any;
  constructor(public service: UploadService, public router: Router, public activatedRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en'
    console.log(this.lang)

    this.lang == 'pt' ? this.service.BASE_URL = "https://dev-project-upskill2-grupo2.pantheonsite.io/pt-pt/api/" : this.service.BASE_URL = "https://dev-project-upskill2-grupo2.pantheonsite.io/api/"
    console.log(this.service.BASE_URL)
    this.service.getTags().subscribe((tags) => {
      this.tags = tags
    })

  }

  changeLang(lang: any) {
    console.log(lang)
    localStorage.setItem('lang', lang)
    window.location.reload()
  }

  tagModalClick() {
    if (this.tagModal) {
      this.tagModal = false
    } else this.tagModal = true;
  }
}
