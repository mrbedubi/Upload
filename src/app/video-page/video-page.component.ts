import {Component, SecurityContext} from '@angular/core';
import {Tag, Video} from "../interface";
import {UploadService} from "../upload.service";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute, Router} from "@angular/router";


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

  constructor(public service:UploadService, public sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router){

  }
  ngOnInit():void {
    this.ids = this.route.snapshot.paramMap.get('id')

    this.service.getVideosById(this.ids).subscribe((videos) => {
      this.video=videos[0]
      console.log(this.video.id)
    })

    this.service.getVideosByTag(6).subscribe((videosByTag) => {
      this.videosByTag = videosByTag

      console.log("ola", this.video.tags)

      this.service.getTagsById(this.video.tags).subscribe((tagbyId)=>{
        this.tags=tagbyId;

    });

    });

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

  public VideoId(url: string) {
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://www.youtube.com/embed/"+videoId//+"?&autoplay=1"
  }
}

