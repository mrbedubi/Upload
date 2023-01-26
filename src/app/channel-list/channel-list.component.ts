import {Component, OnInit} from '@angular/core';
import {Channel, NrVideosChannel, Tag, Video} from "../interface";
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
  videos: Video[] = []
  tags: Tag[] = []
  tagsByChannel: Tag[] = []
  constructor(public service: UploadService) {
  }



  ngOnInit(): void {
    this.service.getChannels().subscribe((channel) => {
      this.channels = channel;

      for(let chnl in this.channels) {
        this.service.getVideosByChannel(this.channels[chnl].channel_id).subscribe((videos) => {
          this.videos = videos
          console.log(videos)

          for(let tag in this.videos) {
            this.service.getTagsById(this.videos[tag].tags).subscribe((tags) => {
              this.tags = tags
              console.log(tags)
              for (let tag in tags) {
                if(!this.tagsByChannel.includes(tags[tag])) {
                  this.tagsByChannel.push(tags[tag])
                  console.log(this.tagsByChannel)
                }
              }
            })
          }
        })
      }
    })
    this.service.getNrVideosChannel().subscribe((channel) => {
      channel.forEach(c=>{
        this.nrvideos[c.id] = c;
      })
    })

  }
}

