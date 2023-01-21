import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Playlist, Video} from "../interface";

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {
  playlist!: Playlist[]
  video!: Video
  videosById: Video[] = []
  videoIds!: string[]
  BaseUrl:string="https://dev-project-upskill2-grupo2.pantheonsite.io";


  constructor(public service: UploadService, public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {

    this.service.getPlaylistById(10).subscribe((playlist)=> {
      this.videoIds = Object.values(playlist)[0].videos.split(",")
      this.playlist = Object.values(playlist)
      console.log(playlist)
      console.log(parseInt(this.videoIds[0]))

      this.service.getVideosById(parseInt(this.videoIds[0])).subscribe((video) => {
        console.log(video[0])
        this.video = video[0]
        console.log(video)
      })

for (let video in this.videoIds){
  console.log(this.videoIds[video])
      this.service.getVideosById(parseInt(this.videoIds[video])).subscribe((playlist) => {
        console.log(playlist)
        this.videosById.push(playlist[0])
      })

    }
    })
    console.log(this.video)
  }

  public VideoId(url: string) {
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://www.youtube.com/embed/" + videoId
  }

  @Input() id?: number
  @Input() title?: string
  @Input() teaser?: string
  @Input() body?: string
  @Input() tag_id?: [number]
  @Input() video_id?: [number]
  @Input() channel_name?: string
  @Input() channel_cover?: string
  @Input() channel_picture?: string

}
