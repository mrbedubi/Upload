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

/* for(let tag in this.videos) {
            this.service.getTagsById(this.videos[tag].tags).subscribe((tags) => {
              this.tags = tags
              for (let tag in tags) {
                console.log(this.savedIds.includes(tags[tag].id))
                if (!this.savedIds.includes(tags[tag].id) && !this.tagsByChannel.includes(tags[tag]) ) {
                  console.log(this.savedIds)
                  this.savedIds.push(tags[tag].id)
                  this.tagsByChannel.push(tags[tag])
                  console.log(this.tagsByChannel)
                }
              }
            })
          }*/
