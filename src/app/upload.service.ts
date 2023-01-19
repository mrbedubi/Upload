import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Channel, NrVideosChannel, Playlist, Tag, Theme, Video} from "./interface"


const BASE_URL = "https://dev-project-upskill2-grupo2.pantheonsite.io/api/";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  // Get Videos

  getVideos() {
    console.log("Hello");
    return this.http.get<Video[]>(BASE_URL + "videos");
  }

  getVideosById(ids: number) {
    return this.http.get<Video[]>(BASE_URL + "videos/" + ids);
  }

  getThemeById(id: number) {
    return this.http.get<Theme>(BASE_URL + "theme/" + id)
  }

  //Acho que não precisamos disto - ts
  getEmbedUrl(url: string) {
    const urlParts = url.split("=");
    return "https://www.youtube.com/embed/" + urlParts;
  }

  getVideosByChannel(id: number) {
    return this.http.get<Video[]>(BASE_URL + "channels/" + id + "/videos");
  }

  getVideosByTag(id: number | string) {
    return this.http.get<Video[]>(BASE_URL + "tags/" + id + "/videos");
  }

  // Get Channels

  getChannels() {
    return this.http.get<Channel[]>(BASE_URL + "channels");
  }

  getNrVideosChannel() {
    return this.http.get<NrVideosChannel[]>(BASE_URL + "channels/all/nvideos")
  }

  getChannelsById(id: number) {
    return this.http.get<Channel[]>(BASE_URL + "channels/" + id);
  }

  // Get Tags

  getTags() {
    return this.http.get<Tag[]>(BASE_URL + "tags");
  }

  getTagsById(id: string | number) {
    console.log(id)
    return this.http.get<Tag[]>(BASE_URL + "tags/" + id);
  }

  getThumbnail(s: string, url: string) {

    if (s != "") {
      return "https://dev-project-upskill2-grupo2.pantheonsite.io/" + s
    }
    const urlParts = url.split("=");
    const videoId = urlParts[urlParts.length - 1];
    return "https://img.youtube.com/vi/" + videoId + "/sddefault.jpg"
  }

//Get Playlist

    getPlaylist(){
      return this.http.get<Playlist[]>(BASE_URL + "playlist");
    }

    getPlaylistById(id:number){
      return this.http.get<Playlist[]>(BASE_URL + "playlist/" + id);
    }
    constructor(public http: HttpClient)
    {

    }

}
