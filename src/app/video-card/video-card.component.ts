import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Tag} from "../interface";
import {Router} from "@angular/router";
import {faBookmark as saved} from "@fortawesome/free-solid-svg-icons";
import {faBookmark as notSaved} from "@fortawesome/free-regular-svg-icons";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import * as events from "events";


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  tags!: Tag[];
  savedIcon = saved
  notSavedIcon = notSaved
  faShareAlt = faShareAlt
  faPlay = faPlay
  channelPath!:string;
  video_id!:string |number;
  @Input() id!:string ;
  @Input() channelId!: number |string;
  @Input() title?: string;
  @Input() published_date?: string;
  @Input() video_url?: string;
  @Input() duration?: string;
  @Input() cover_image?: string;
  @Input() thumbnail?: string
  @Input() channel_name?: string
  @Input() channel_avatar?: string
  @Input() tag!: string | number
  @Input() card!: "homepage" | "channelpage" | "videopage" | "playlistpage"
  @Input() playlist?: string | number ;
  @Input() selected:boolean=false;


  constructor(public service: UploadService, public router: Router) {

  }



//public uploadService: UploadService
  ngOnInit(): void {

    this.service.getId('',this.id).subscribe((video)=>{
      this.video_id=video.mid[0].value;
    })

    this.service.getChannelsById(this.channelId).subscribe((channel)=>{
      this.channelId=channel[0].path
    })



    if (this.tag != undefined) {
      this.service.getTagsById(this.tag).subscribe((tags) => {
        this.tags = tags;
      });
    }
  }



}





