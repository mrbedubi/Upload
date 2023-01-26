import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Tag} from "../interface";
import {Router} from "@angular/router";
import {faBookmark as saved} from "@fortawesome/free-solid-svg-icons";
import {faBookmark as notSaved} from "@fortawesome/free-regular-svg-icons";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import * as events from "events";


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
tags!:Tag[];
savedIcon = saved
  notSavedIcon = notSaved
  faShareAlt = faShareAlt


  @Input() id?: number;
  @Input() channelId?: number;
  @Input() title?: string;
  @Input() published_date?: string;
  @Input() video_url?: string;
  @Input() duration?: string;
  @Input() cover_image?: string;
  @Input() thumbnail?: string
  @Input() channel_name?: string
  @Input() channel_avatar?: string
  @Input() tag!: string|number
  @Input() card!: "homepage" | "channelpage" | "videopage" | "playlistpage"

showPopup: boolean=false

  constructor(public list: UploadService,public router: Router) {

  }


//public uploadService: UploadService
  ngOnInit(): void {

    if(this.tag!=undefined){
      this.list.getTagsById(this.tag).subscribe( (tags)=>{
        this.tags=tags;
      });

  }}


sharePopup( e:any){
  e.stopPropagation();

  if (this.showPopup) this.showPopup=false;
  else this.showPopup=true;
}

}





