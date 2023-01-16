import {Component, Input} from '@angular/core';
import {Channel, Video} from "../interface";
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.scss']
})
export class ChannelPageComponent {
  channel!:Channel[]
  video!:Video[]


  @Input() id?: number;
  @Input() name?: string;
  @Input() cover_image?: string;
  @Input() description?: string;
  @Input() profile_picture?: string;


  constructor( public list:UploadService){

  }
  ngOnInit():void {
    this.list.getChannels().subscribe((channel) => {
      this.channel = channel
    })
    this.list.getVideos().subscribe((video) => {
      this.video = video
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

