import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Playlist, Video} from "../interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ChangeDetectorRef} from "@angular/core";


@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {
  playlist!: Playlist
  video!: Video
  videosById!: Video[];
  videos_playlist!: Video[];
  videosByTag!: Video[];
  videoIds!: string;
  BaseUrl: string = "https://dev-project-upskill2-grupo2.pantheonsite.io"
  id_playlist: any;
  id_video: any;


  @Input() id?: number
  @Input() title?: string
  @Input() tag_id?: [number]
  @Input() playlist_id?: [number]
  @Input() channel_name?: string
  @Input() channel_cover?: string
  @Input() channel_picture?: string
  @Input() category_name?: string


  constructor(public service: UploadService, public route: ActivatedRoute, public router : Router ) {
  }


  ngOnInit(): void {


    // get params from url  // playlist id  and Video Id
    this.route.params.subscribe(value => {
      this.service.getId('playlist' , value['id_playlist']+'/').subscribe((playlist)=>{
        this.id_playlist =playlist.nid[0].value;
          this.service.getId('video', value['id_video']+'/').subscribe((video)=>{
            this.id_video=video.mid[0].value;

            this.currentVideo( this.id_video);




            this.service.getPlaylistById(this.id_playlist).subscribe((playlist)=>{
              // get the id of the videos with in the playlist
              this.playlist=playlist[0];
              this.videoIds=playlist[0].videos;
              console.log(this.videoIds);
              this.service.getVideosById(this.videoIds).subscribe((videos) => {
                this.videos_playlist= videos;
                this.getSmilarVideos(videos);
              });
            });
          })

      });

      // get the current video

      // get comments


    });




      // get the videos by the id



      // get the videos by the tag












/*
    this.service.getPlaylistById(this.id_playlist).subscribe((playlist) => {
      // se aind nao existir id de video no url colocar o id do primeiro video
      this.videoIds = Object.values(playlist)[0].videos.split(",");
      this.playlist = Object.values(playlist)[0]
      console.log(Object.values(playlist)[0])


      this.service.getVideosById(parseInt(this.videoIds[0])).subscribe((video) => {
        this.video = video[0]

        this.service.getVideosByTag(video[0].tags).subscribe((video) => {
          this.videosByTag = video
        })
      })

      for (let video in this.videoIds) {
        this.service.getVideosById(parseInt(this.videoIds[video])).subscribe((playlist) => {
          this.videosById.push(playlist[0])
        })
      }
    })

    */

  }

  // go to other video in the playlist

  selectVideo(playlist_id:any ,id:any){

    this.router.navigate([playlist_id+id]);
  }

  // this function gets the current selected video
  currentVideo(id:any) {
    this.service.getVideosById(id).subscribe((video)=>{
      this.video= video[0];
    });

  }


  getSmilarVideos(videos:Video[]){
   let tags="";
   let ids :number[]=[];
    videos.forEach(video =>{
      tags+=video.tags+',';
      ids.push(video.id);

    })

   tags=tags.slice(0,tags.length-1);

    this.service.getVideosByTag(tags).subscribe((videos) => {
      this.videosByTag = videos.filter(video=>!ids.includes(video.id));
      console.log(this.videosByTag)

    })
  }










  public VideoId(url: string) {
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://www.youtube.com/embed/" + videoId
  }




}


