import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Channel, Tag, Video} from "../interface";

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss']
})

export class ChannelCardComponent implements OnInit {

  BASE_URL = "https://dev-project-upskill2-grupo2.pantheonsite.io";
  channels: Channel[] = []
  videos: Video[] = []
  tags: Tag[] = []
  tagsByChannel: Tag[] = []

  @Input() id!: number;
  @Input() name?: string;
  @Input() cover_image?: string;
  @Input() description?: string;
  @Input() profile_picture?: string;
  @Input() nr_videos?: number;
  @Input() tag?: string

  constructor(public service:UploadService) { }

  ngOnInit(): void {
    this.service.getChannelsById(this.id).subscribe((channel) => {
      this.channels = channel;
      for(let chnl in this.channels) {
        this.service.getVideosByChannel(this.channels[chnl].channel_id).subscribe((videos) => {

          this.videos = videos

          this.service.getTagsById(videos[Math.round((videos.length-1)*Math.random())].tags).subscribe((tags) => {
            this.tagsByChannel = tags
            console.log(tags)
          })

        })
      }

    })
  }

}
