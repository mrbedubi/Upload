import {Component, Input, OnInit} from '@angular/core';

//import {UploadService} from "../../upload.service";

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  page: any;

  @Input() id?: number;
  @Input() title?: string;
  @Input() published_date?: string;
  @Input() video_url?: string;
  @Input() duration?: string;
  @Input() cover_image?: string;
  @Input() thumbnail?: string
  @Input() channel_name?: string
  @Input() channel_avatar?: string
  @Input() card!: "homepage" | "channelpage" | "videopage"


  constructor() {
  }

//public uploadService: UploadService
  ngOnInit(): void {

  }

}
