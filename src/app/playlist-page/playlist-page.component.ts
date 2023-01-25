import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Playlist, Video} from "../interface";
import {isPlatformWorkerUi} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {
  playlist!: Playlist
  video!: Video
  videosById: Video[] = []
  videosByTag: Video[] = []
  videoIds!: string[]
  BaseUrl:string = "https://dev-project-upskill2-grupo2.pantheonsite.io"
  ids: any

  constructor(public service: UploadService, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ids = this.route.snapshot.paramMap.get('id')

    this.service.getPlaylistById(this.ids).subscribe((playlist)=> {
      this.videoIds = Object.values(playlist)[0].videos.split(",")
      this.playlist = Object.values(playlist)[0]
      console.log(Object.values(playlist)[0])

      this.service.getVideosById(parseInt(this.videoIds[0])).subscribe((video) => {
        this.video = video[0]

        this.service.getVideosByTag(video[0].tags).subscribe((video)=>{
          this.videosByTag = video
        })
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
