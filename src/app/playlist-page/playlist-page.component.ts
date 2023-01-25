import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Playlist, Video} from "../interface";
import {isPlatformWorkerUi} from "@angular/common";

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {
  playlist!: Playlist
  video!: Video
  videosById: Video[] = []
  videoIds!: string[]
  BaseUrl:string="https://dev-project-upskill2-grupo2.pantheonsite.io";


  constructor(public service: UploadService, public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {

    this.service.getPlaylistById(10).subscribe((playlist)=> {
      this.videoIds = Object.values(playlist)[0].videos.split(",")
      this.playlist = Object.values(playlist)[0]
      console.log(Object.values(playlist)[0])

      this.service.getVideosById(parseInt(this.videoIds[0])).subscribe((video) => {
        this.video = video[0]
      })

for (let video in this.videoIds){
      this.service.getVideosById(parseInt(this.videoIds[video])).subscribe((playlist) => {

        this.videosById.push(playlist[0])
      })

    }
    })
  }

  public VideoId(url: string) {
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://www.youtube.com/embed/" + videoId
  }

  @Input() id?: number
  @Input() title?: string
  @Input() tag_id?: [number]
  @Input() video_id?: [number]
  @Input() channel_name?: string
  @Input() channel_cover?: string
  @Input() channel_picture?: string
  @Input() category_name?: string
}
