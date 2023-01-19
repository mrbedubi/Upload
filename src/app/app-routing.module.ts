import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {VideoPageComponent} from "./video-page/video-page.component";
import {ChannelPageComponent} from "./channel-page/channel-page.component";
import {ArticlePageComponent} from "./article-page/article-page.component";
import {ChannelListComponent} from "./channel-list/channel-list.component";
import {PlaylistListComponent} from "./playlist-list/playlist-list.component";
import {SearchComponent} from "./search/search.component";
import {PlaylistPageComponent} from "./playlist-page/playlist-page.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'video/:id', component: VideoPageComponent},
  {path: 'channel/:id', component: ChannelPageComponent},
  {path: 'search', component: SearchComponent, children:[
      {path:'tag/:tag', component: SearchComponent},
      {path:'category/:cat', component: SearchComponent},
      {path:'video/:title', component: SearchComponent},
      {path:'channel/:title', component: SearchComponent},
    ]},
  {path: 'article', component: ArticlePageComponent},
  {path: 'channel-list', component: ChannelListComponent},
  {path: 'playlist-list', component: PlaylistListComponent},
  {path: 'playlist', component: PlaylistPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
