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
    return this.http.get<Video[]>(BASE_URL + "videos");
  }

  getVideosById(ids: number) {
    return this.http.get<Video[]>(BASE_URL + "videos/" + ids);
  }

  getThemes() {
    return this.http.get<Theme[]>(BASE_URL + "themes")
  }

  getThemeById(id: number) {
    return this.http.get<Theme>(BASE_URL + "themes/" + id)
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

  getPlaylist() {
    return this.http.get<Playlist[]>(BASE_URL + "playlist");
  }

  getPlaylistById(id: number) {
    return this.http.get<Playlist[]>(BASE_URL + "playlist/" + id);
  }


  countVideos(ids: string) {
    let count: number;
    count = ids.split(",").length
    return count
  }
  getToken(){
    return this.http.get("https://dev-project-upskill2-grupo2.pantheonsite.io/session/token")
  }

token = this.getToken();

headers = {'Accept': 'application/vnd.api+json', 'X-CSRF-Token': String(this.token)};

postComments(body:{}){
    return this.http.post("https://dev-project-upskill2-grupo2.pantheonsite.io/api/comments",
      body,
      {'headers':this.headers})
}
  constructor(public http: HttpClient) {

  }

}
