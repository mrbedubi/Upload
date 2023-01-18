import {Component, OnInit} from '@angular/core';
import {Channel, NrVideosChannel} from "../interface";
import {UploadService} from "../upload.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {
  channels!: Channel[];
  nrvideos: {
    [key: number]: NrVideosChannel
  } = {};

  constructor(public list: UploadService) {
  }

  ngOnInit(): void {
    this.list.getChannels().subscribe((channel) => {
      this.channels = channel;
      console.log(channel);
    })
    this.list.getNrVideosChannel().subscribe((channel) => {
      channel.forEach(c=>{
        this.nrvideos[c.id] = c;
      })
    })
  }
}

/*channel.forEach(channel=>{
  let id = Object.values(channel)[0]
  console.log(id)
  this.list.getVideosByChannel(id).subscribe((videos)=>{
      console.log(videos.length)
      this.nrvideos.push(videos.length)
    }
  );
}*/
