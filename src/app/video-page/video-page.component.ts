import {Component, SecurityContext} from '@angular/core';
import {Video} from "../interface";
import {UploadService} from "../upload.service";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent {
  BaseUrl:string="https://dev-project-upskill2-grupo2.pantheonsite.io";
  channel: any;
  video!:Video
  videosByTag: Video[] = []

  constructor(public service:UploadService, public sanitizer: DomSanitizer){

  }
  ngOnInit():void {
    this.service.getVideosById(8).subscribe((videos) => {
      this.video=videos[0]
      console.log(this.video.tags)
    })

    this.service.getVideosByTag(6).subscribe((videosByTag) => {
      this.videosByTag = videosByTag
      console.log(this.videosByTag)
    })


}

  public VideoId(url: string) {
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://www.youtube.com/embed/"+videoId//+"?&autoplay=1"
  }
}

