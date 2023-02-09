import {Component, Input, ViewContainerRef} from '@angular/core';
import {Tag, Video} from "../interface";
import {UploadService} from "../upload.service";
import {ActivatedRoute, Router} from "@angular/router";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faStream} from "@fortawesome/free-solid-svg-icons";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {TagsListComponent} from "../tags-list/tags-list.component";
import {TranslateService} from "@ngx-translate/core";

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
  faBars = faBars
  lang = localStorage.getItem('lang') || 'en';

  constructor(public service: UploadService, public router: Router, public activatedRouter: ActivatedRoute, private translate: TranslateService) {
    translate.setDefaultLang(this.service.lang)
    if (this.service.lang == 'pt') {
      this.flag_pt = 'true'
      this.flag_en = 'false'
    } else if (this.service.lang == 'en') {
      this.flag_pt = 'false'
      this.flag_en = 'true'
    }
  }

  ngOnInit(): void {
    this.service.getTags().subscribe((tags) => {
      this.tags = tags
    })

  }

  switchLang(lang: string) {
    localStorage.setItem('lang', lang)
    if (lang == 'pt') {
      this.flag_pt = 'true'
      this.flag_en = 'false'
    } else if (lang == 'en') {
      this.flag_pt = 'false'
      this.flag_en = 'true'
    }
    this.translate.use(lang)
    window.location.reload()
  }


  switchMobile() {
    this.menu == 'close' ? this.menu = 'open' : this.menu = 'close'
  }

  @Input() menu: 'open' | 'close' = 'close'
  @Input() flag_pt!: 'true' | 'false'
  @Input() flag_en!: 'true' | 'false'
}
