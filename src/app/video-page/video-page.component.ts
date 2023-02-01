import {Component, SecurityContext} from '@angular/core';
import {Rating, Tag, Video} from "../interface";
import {UploadService} from "../upload.service";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute, Router} from "@angular/router";
import {faFlag} from "@fortawesome/free-solid-svg-icons";
import {faBookmark as saved} from "@fortawesome/free-solid-svg-icons";
import {faBookmark as notSaved, faThumbsUp as notLiked, faThumbsDown as notDisliked} from "@fortawesome/free-regular-svg-icons";
import {faShareAlt, faThumbsUp as liked, faThumbsDown as disliked} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent {
  BaseUrl:string="https://dev-project-upskill2-grupo2.pantheonsite.io";
  video!:Video
  videosByTag: Video[] = []
  tags:Tag[]=[]
  ids!: any
  likes!: Rating
  dislikes!: Rating

  //FA icons
  faFlag = faFlag
  savedIcon = saved
  notSavedIcon = notSaved
  faShareAlt = faShareAlt
  liked = liked
  notLiked = notLiked
  disliked = disliked
  notDisliked = notDisliked


  constructor(public service:UploadService, public sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router){

  }
  ngOnInit():void {
    this.ids = this.route.snapshot.paramMap.get('id')

    this.service.getLikesByVideoId(this.ids).subscribe((likes) => {
      Object.values(likes)[0] != undefined ? this.likes = Object.values(likes)[0] : this.likes = {count: 0}
    })

    this.service.getDislikesByVideoId(this.ids).subscribe((dislikes) => {
     Object.values(dislikes)[0] != undefined ? this.dislikes = Object.values(dislikes)[0] : this.dislikes = {count: 0}
    })

    this.service.getVideosById(this.ids).subscribe((videos) => {
      this.video=videos[0]
    })

    this.service.getVideosByTag(6).subscribe((videosByTag) => {
      this.videosByTag = videosByTag

      this.service.getTagsById(this.video.tags).subscribe((tagbyId)=>{
        this.tags=tagbyId;
      });
    });

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

  public VideoId(url: string) {
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://www.youtube.com/embed/"+videoId+"?&autoplay=1"
  }
}

