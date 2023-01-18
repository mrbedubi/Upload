import {Component, Input} from '@angular/core';
import {Channel, Video} from "../interface";
import {UploadService} from "../upload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.scss']
})
export class ChannelPageComponent {
  channel!:Channel
  video:Video[]=[];
  BaseUrl: string="https://dev-project-upskill2-grupo2.pantheonsite.io"
  ids!: any


  @Input() id?: number;
  @Input() name?: string;
  @Input() cover_image?: string;
  @Input() description?: string;
  @Input() profile_picture?: string;


  constructor( public list:UploadService, private activatedRoute: ActivatedRoute){

  }
  ngOnInit():void {
    this.ids = this.activatedRoute.snapshot.paramMap.get('id')


    this.list.getChannelsById(this.ids).subscribe((channel) => {
      this.channel = channel[0];
      console.log(this.channel);
    })
    this.list.getVideosByChannel(this.ids).subscribe((video) => {
      this.video = video
      console.log(video[0].thumbnail);
    })
  }

  public VideoId(s: string, url: string) {

    if (s != "") {
      return "https://dev-project-upskill2-grupo2.pantheonsite.io" + s
    }
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://img.youtube.com/vi/" + videoId + "/sddefault.jpg"
  }
}

