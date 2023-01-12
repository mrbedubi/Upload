import { Component } from '@angular/core';
import {UploadService} from "../upload.service";
import {Video,Videos, Channel ,Tag} from "../interface";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  videos!:Video[]


constructor( public list:UploadService) {
}

ngOnInit():void {
    this.list.getVideos().subscribe((videos)=>{
      this.videos=videos
      console.log(this.videos[0]);
    })
}

public VideoId(s:string ,url:string){

    if(s!=""){
      return "https://dev-project-upskill2-grupo2.pantheonsite.io"+s
    }
    const urlParts = url.split("=");
  const videoId = urlParts[urlParts.length - 1];
 return "https://img.youtube.com/vi/"+videoId+"/hqdefault.jpg"
}

}
