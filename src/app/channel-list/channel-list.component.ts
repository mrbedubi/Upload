import {Component, OnInit} from '@angular/core';
import {Channel, NrVideosChannel, Tag, Video} from "../interface";
import {UploadService} from "../upload.service";
import {ActivatedRoute, Router} from "@angular/router";
import {parse} from "@fortawesome/fontawesome-svg-core";

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
  videos: Video[] = []
  tags: Tag[] = []
  public tagsByChannel: Tag[] = []

  constructor(public service: UploadService) {
  }

  ngOnInit(): void {
    this.service.getChannels().subscribe((channel) => {
      this.channels = channel;
    })
    this.service.getNrVideosChannel().subscribe((channel) => {
      channel.forEach(c=>{
        this.nrvideos[c.id] = c;
      })
    })

  }
}

