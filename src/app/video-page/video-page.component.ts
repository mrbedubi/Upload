import {Component, Input, SecurityContext} from '@angular/core';
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
  ids!: any;
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
    this.ids = this.route.snapshot.paramMap.get('id');
    this.service.getVideoId(this.ids).subscribe((video) => {
      this.ids = video.mid[0].value;
      this.initVideoPage();
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    })

  }

  public initVideoPage(){

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
  }

  public VideoId(url: string) {
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://www.youtube.com/embed/"+videoId+"?&autoplay=1"
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

