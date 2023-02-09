import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Channel, NrVideosChannel, Playlist, Rating, Tag, Theme,Video,  Comments} from "./interface"
import * as url from "url";
import {TranslateService} from "@ngx-translate/core";


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  // Get Videos
  saved: number[]=JSON.parse(localStorage.getItem("saved") || "[]");
  md5= require("crypto-js/md5");
  pathSource="https://dev-project-upskill2-grupo2.pantheonsite.io";
  token = this.getToken();
  lang = localStorage.getItem('lang') || 'en';
  BASE_URL = this.getLang() || "https://dev-project-upskill2-grupo2.pantheonsite.io/api/"
  headers = {'Accept': 'application/vnd.api+json', 'X-CSRF-Token': String(this.token)};

  getLang() {
    if (this.lang == 'en') {
      return "https://dev-project-upskill2-grupo2.pantheonsite.io/api/"
    } else {
      return "https://dev-project-upskill2-grupo2.pantheonsite.io/pt-pt/api/"
    }
  }

  getToken(){
    return this.http.get("https://dev-project-upskill2-grupo2.pantheonsite.io/session/token")
  }

  getId(alias: string) {
  return this.http.get<any>(this.pathSource +alias + "?_format=json")
  }

  getVideos(page:number) {
    return this.http.get<Video[]>(this.BASE_URL + "videos?page="+page);
  }

  getVideosById(ids: number | string) {
    return this.http.get<Video[]>(this.BASE_URL + "videos/" + ids);
  }

  getThemes() {
    return this.http.get<Theme[]>(this.BASE_URL + "themes")
  }

  getThemeById(id: number | string) {
    return this.http.get<Theme>(this.BASE_URL + "themes/" + id)
  }

  getVideosByChannel(id: number | string) {
    return this.http.get<Video[]>(this.BASE_URL + "channels/" + id + "/videos");
  }

  getVideosByTag(id: number | string) {
    return this.http.get<Video[]>(this.BASE_URL + "tags/" + id + "/videos");
  }

  // Get Channels

  getChannels() {
    return this.http.get<Channel[]>(this.BASE_URL + "channels");
  }

  getNrVideosChannel() {
    return this.http.get<NrVideosChannel[]>(this.BASE_URL + "channels/all/nvideos")
  }

  getChannelsById(id: number | string) {
    return this.http.get<Channel[]>(this.BASE_URL + "channels/" + id);
  }

  getLikesByVideoId(id: number) {
    return this.http.get<Rating>(this.BASE_URL + 'videos/' + id + '/likes')
  }

  getDislikesByVideoId(id: number) {
    return this.http.get<Rating>(this.BASE_URL + 'videos/' + id + '/dislikes')
  }

  getTags() {
    return this.http.get<Tag[]>(this.BASE_URL + "tags");
  }

  getTagsById(id: string | number) {
    return this.http.get<Tag[]>(this.BASE_URL + "tags/" + id);
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
    return this.http.get<Playlist[]>(this.BASE_URL + "playlist");
  }

  getPlaylistById(id: number) {
    return this.http.get<Playlist[]>(this.BASE_URL + "playlist/" + id);
  }


  countVideos(ids: string) {
    let count: number;
    count = ids.split(",").length
    return count
  }


  getSaved() {
    return this.http.get<Video[]>(this.BASE_URL + "videos/?ids=" + this.saved.join(","));
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
  showShare: boolean = false

  openPopUp(){
    this.showShare=true

  }


  closePopUp(){

      this.showShare=false;
  }

  constructor(public http: HttpClient) {

  }



  getIP() {
    this.http.get('https://api.ipify.org?format=json').subscribe(data => {

    });
  }

  //Comments

  getComments(id:number|string , type: "video" | "channel"){
  if(type == "video"){
    return this.http.get<Comments[]>(this.BASE_URL + "videos/"+id+"/comments")
  }else{

    return this.http.get<Comments[]>(this.BASE_URL + "channels/"+id+"/comments")
  }

  }

  getGravatar(email:string){
     return  "https://www.gravatar.com/avatar/"+this.md5(email).toString()+"?d=404";
  }

  getRandomAvatart(email:string){
  return ' https://robohash.org/set_set3/bgset_bg1/'+email+'?size=100x100';
  }



}
