import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-card-channel-list',
  templateUrl: './card-channel-list.component.html',
  styleUrls: ['./card-channel-list.component.scss']
})

export class CardChannelListComponent implements OnInit {

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
