import {Component, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Playlist, Video} from "../interface";

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {
  playlist!: Playlist
  video!: Video
  BaseUrl:string="https://dev-project-upskill2-grupo2.pantheonsite.io";

  constructor(public list: UploadService, public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.list.getVideosById(2).subscribe((videos) => {
      this.video = videos[0]
    })

    /*this.list.getPlaylistById(2).subscribe((playlist)=> {
    this.playlist = playlist[0]
    })*/
  }

  public VideoId(url: string) {
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://www.youtube.com/embed/" + videoId
  }
}
