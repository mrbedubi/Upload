import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {
  faPlay = faPlay
  first_video_id!:string
  first_video_url!:string;
  link_playlist_page!:string

  BASE_URL = "https://dev-project-upskill2-grupo2.pantheonsite.io";
  @Input() title?: string;
  @Input() category?: string;
  @Input() image?: string;
  @Input() date?: string;
  @Input() videosId!: string;
  @Input() playlist_id!: string;



  constructor(public service:UploadService) { }

  ngOnInit(): void {
    console.log(this.category);
    this.firstVideo(this.videosId);
  }

//get the first video of the playlist to pass as url paramenter
  firstVideo(srt:string){
    this.first_video_id= srt.split(',')[0];
    this.service.getVideosById(this.first_video_id).subscribe((video)=>{
      this.first_video_url=video[0].path
      this.link_playlist_page=this.playlist_id+(this.first_video_url.replace("pt-pt",""));
    })

  }

}
