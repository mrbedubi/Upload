import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Channel, NrVideosChannel, Tag, Video} from "./interface"


const BASE_URL = "https://dev-project-upskill2-grupo2.pantheonsite.io/api/";
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  // Get Videos

  getVideos(){
    console.log("Hello");
   return this.http.get<Video[]>(BASE_URL+"videos");
  }

  getVideosById(ids:number){
   return this.http.get<Video[]>(BASE_URL+"videos/"+ids);
  }

  getEmbedUrl(url: string) {
    const urlParts = url.split("=");
    return "https://www.youtube.com/embed/"+urlParts;
  }

  getVideosByChannel(id:number){
   return this.http.get<Video[]>(BASE_URL+"channels/"+id+"/videos");
  }

  getVideosByTag(id:number){
   return this.http.get<Video>(BASE_URL+"tags/"+id+"/videos");
  }

  // Get Channels

  getChannels(){
    return this.http.get<Channel[]>(BASE_URL+"channels");
  }

  getNrVideosChannel(){
    return this.http.get<NrVideosChannel[]>(BASE_URL+"channels/all/nvideos")
  }

  getChannelsById(id:number){
    return this.http.get<Channel[]>(BASE_URL+"channels/"+id);
  }

  // Get Tags

  getTags(){
    return this.http.get<Tag[]>(BASE_URL+"tags");
  }

  getTagsById(id:number){
    return this.http.get<Tag>(BASE_URL+"tags/"+id);
  }

  constructor(public http: HttpClient) { }
}
