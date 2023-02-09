import {Component, Input, OnInit} from '@angular/core';
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";

import {UploadService} from "../upload.service";
import {Video} from "../interface";
import {VideoCardComponent} from "../video-card/video-card.component";
import {LocationStrategy} from "@angular/common";


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  faFacebook = faFacebook
  faTwitter = faTwitter
  faWhatsapp = faWhatsapp
  faLink = faLink
  faShareAlt = faShareAlt
  videosById: Video[] = [];
  url!:string;
  show: boolean = false
  @Input() video_url!: string;


  constructor(public list: UploadService, private location:LocationStrategy) {
    this.url=window!.location!.protocol +'//'+window!.location!.host;

  }

  ngOnInit(): void {
    this.url+=this.video_url;

  }

  async copyLink(){

    try {
      await navigator.clipboard.writeText(this.url);
    } catch (err) {
       console.log(err)
    }

  }

  openPopUp() {
    this.show = true
  }

  closePopUp() {
    this.show = false
  }

}
