import {Component} from '@angular/core';
import {Channel} from "../interface";
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-channel-suggestions',
  templateUrl: './channel-suggestions.component.html',
  styleUrls: ['./channel-suggestions.component.scss']
})
export class ChannelSuggestionsComponent {
  BaseUrl:string="https://dev-project-upskill2-grupo2.pantheonsite.io"
  channels!:Channel[];
  constructor( public service:UploadService) {
  }  pathChannelPage!:string

  ngOnInit():void{
    if(this.service.lang=="en")  this.pathChannelPage = "/channels"; else this.pathChannelPage = "/pt-pt/canais";
this.service.getChannels().subscribe((channels)=>{
  this.channels=channels;
})
  }

}
