import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss']
})

export class ChannelCardComponent implements OnInit {

  BASE_URL = "https://dev-project-upskill2-grupo2.pantheonsite.io";

  @Input() id?: number;
  @Input() name?: string;
  @Input() cover_image?: string;
  @Input() description?: string;
  @Input() profile_picture?: string;
  @Input() nr_videos?: number;


  constructor(public service:UploadService) { }

  ngOnInit(): void {

  }

}
