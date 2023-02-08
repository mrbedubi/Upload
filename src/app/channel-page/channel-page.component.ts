import {Component, Input} from '@angular/core';
import {Channel, Video} from "../interface";
import {UploadService} from "../upload.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.scss']
})
export class ChannelPageComponent {
  channel!:Channel
  video:Video[]=[];
  BaseUrl: string="https://dev-project-upskill2-grupo2.pantheonsite.io"
  channel_id!: string


  @Input() id?: number;
  @Input() name?: string;
  @Input() cover_image?: string;
  @Input() description?: string;
  @Input() profile_picture?: string;


  constructor( public service:UploadService,  private route: ActivatedRoute , private router:Router){

  }
  ngOnInit():void {
    let url =this.router.url;
    this.service.getId(url).subscribe((channel) => {

     this.channel_id = channel.nid[0].value;

    this.service.getChannelsById(this.channel_id).subscribe((channel) => {
      this.channel = channel[0];

    })
    this.service.getVideosByChannel(this.channel_id).subscribe((video) => {
      this.video = video;
    })

})

  }

}

