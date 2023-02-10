import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Playlist, Rating, Video} from "../interface";
import {ActivatedRoute, Router} from "@angular/router";
import {faThumbsUp as notLiked, faThumbsDown as notDisliked} from "@fortawesome/free-regular-svg-icons";
import {faThumbsUp as liked, faThumbsDown as disliked} from "@fortawesome/free-solid-svg-icons";



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
  likes!: Rating
  dislikes!: Rating
  liked = liked
  notLiked = notLiked
  disliked = disliked
  notDisliked = notDisliked

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
     let lang="";
     if(this.service.lang == 'pt') lang='/pt-pt';
      this.service.getId(lang+'/playlist/'+ value['id_playlist']+'/').subscribe((playlist)=>{
        this.id_playlist =playlist.nid[0].value;
          this.service.getId(lang+'/video/'+ value['id_video']+'/').subscribe((video)=>{
            this.id_video=video.mid[0].value;
            this.currentVideo( this.id_video);

            this.service.getLikesByVideoId(this.id_video).subscribe((likes) => {
              Object.values(likes)[0] != undefined ? this.likes = Object.values(likes)[0] : this.likes = {count: 0}
            })

            this.service.getDislikesByVideoId(this.id_video).subscribe((dislikes) => {
              Object.values(dislikes)[0] != undefined ? this.dislikes = Object.values(dislikes)[0] : this.dislikes = {count: 0}
            })

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

    });

  }

  // go to other video in the playlist

  selectVideo(playlist_id:any ,video_id:any){
video_id=video_id.replace('/pt-pt/','/');
    this.router.navigate([playlist_id+video_id]);
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

  public toggleLike() {
    if (this.likeType == 'liked') {
      this.likeType = 'notLiked'
    } else if (this.likeType == 'notLiked') {
      this.likeType = 'liked'
    }
  }
  public toggleDislike() {
    if (this.dislikeType == 'disliked') {
      this.dislikeType = 'notDisliked'
    } else if (this.dislikeType == 'notDisliked') {
      this.dislikeType = 'disliked'
    }
  }

  public postLike(id: number) {
    let body = {
      "entity_id": [id],
      "entity_type": ["media"],
      "flag_id": "likes",
      "uid":["0"]
    }
    this.service.giveRating(body)
    this.likes.count++
    this.toggleLike()
  }

  public postDislike(id: number) {
    let body = {
      "entity_id": [id],
      "entity_type": ["media"],
      "flag_id": "dislikes",
      "uid":["0"]
    }
    this.service.giveRating(body)
    this.dislikes.count++
    this.toggleDislike()
  }

  @Input() likeType: 'liked' | 'notLiked' = 'notLiked'
  @Input() dislikeType: 'disliked' | 'notDisliked' = 'notDisliked'

}


