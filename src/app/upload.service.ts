import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Channel, NrVideosChannel, Playlist, Rating, Tag, Theme, Video} from "./interface"



const BASE_URL = "https://dev-project-upskill2-grupo2.pantheonsite.io/api/";
const BASE_URL_PT = "https://dev-project-upskill2-grupo2.pantheonsite.io/pt-pt/api/";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  // Get Videos
  saved: number[]=JSON.parse(localStorage.getItem("saved") || "[]");
  md5= require("crypto-js/md5");
  pathSource="https://dev-project-upskill2-grupo2.pantheonsite.io";

  getVideos() {
    return this.http.get<Video[]>(BASE_URL + "videos");
  }

  getVideosById(ids: number | string) {
    return this.http.get<Video[]>(BASE_URL + "videos/" + ids);
  }

  getThemes() {
    return this.http.get<Theme[]>(BASE_URL + "themes")
  }

  getThemeById(id: number) {
    return this.http.get<Theme>(BASE_URL + "themes/" + id)
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

  getLikesByVideoId(id: number) {
    return this.http.get<Rating>(BASE_URL + 'videos/' + id + '/likes')
  }

  getDislikesByVideoId(id: number) {
    return this.http.get<Rating>(BASE_URL + 'videos/' + id + '/dislikes')
  }

  getTags() {
    return this.http.get<Tag[]>(BASE_URL + "tags");
  }

  getTagsById(id: string | number) {
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


  getSaved() {
    return this.http.get<Video[]>(BASE_URL + "videos/?ids=" + this.saved.join(","));
  }


  isSaved(id: any) {
     return this.saved.includes(id)
  }

  toggleFavorite(id: any) {
    if (this.isSaved(id)) {
      //remover o id dos favoritos
      this.saved.splice(this.saved.indexOf(id), 1)
    } else
      //adicionar o id aos favoritos
      this.saved.push(id);


    // local storage - é uma caixa do browser para  guardar informação e esta so pode ser guardada como string
    localStorage.setItem("saved",JSON.stringify(this.saved))
  }

  getToken(){
    return this.http.get("https://dev-project-upskill2-grupo2.pantheonsite.io/session/token")
  }

token = this.getToken();

headers = {'Accept': 'application/vnd.api+json', 'X-CSRF-Token': String(this.token)};

postComments(body:{}){
    return this.http.post("https://dev-project-upskill2-grupo2.pantheonsite.io/comment",
      body,
      {'headers':this.headers}).subscribe()
}

giveRating(body:{
  "entity_id": number[],
  "entity_type": string[],
  "flag_id": string,
  "uid": string[]
  }){
  return this.http.post("https://dev-project-upskill2-grupo2.pantheonsite.io/entity/flagging",
    body,
    {headers: this.headers}).subscribe()
}

reportVideo(){

}

  showPopup: boolean = false

  sharePopup(e: any) {
    e.stopPropagation();

    if (this.showPopup) this.showPopup = false;
    else this.showPopup = true;
  }

  constructor(public http: HttpClient) {

  }



  getIP() {
    this.http.get('https://api.ipify.org?format=json').subscribe(data => {
      console.log(data);
    });
  }


  getGravatar(email:string){
     return  "https://www.gravatar.com/avatar/"+this.md5(email).toString()+"?d=404";
  }

  getRandomAvatart(email:string){
  return ' https://robohash.org/set_set3/bgset_bg1/'+email+'?size=100x100';
  }

}
