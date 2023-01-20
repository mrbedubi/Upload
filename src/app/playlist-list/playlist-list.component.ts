import {Component, OnInit} from '@angular/core';
import {Playlist, Video} from "../interface";
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {
  playlists!: Playlist[];

  constructor(public service: UploadService) {
  }

  ngOnInit(): void {

    this.service.getPlaylist().subscribe((playlist) => {
      this.playlists = playlist
      console.log(playlist[0].title)
    })

  }
}

