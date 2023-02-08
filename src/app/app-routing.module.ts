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
import {ShareComponent} from "./share/share.component";
import {ArticleListComponent} from "./article-list/article-list.component";
import {SavedComponent} from "./saved/saved.component";
import {VideoCardComponent} from "./video-card/video-card.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'pt-pt/inicio', component: HomepageComponent},
  {path: 'video/:id', component: VideoPageComponent},
  {path: 'pt-pt/video/:id', component: VideoPageComponent},
  {path: 'channel/:id', component: ChannelPageComponent},
  {path: 'pt-pt/canal/:id', component: ChannelPageComponent},
  {path: 'search/tag/:tag', component: SearchComponent },
  {path: 'pt-pt/procurar/tag/:tag', component: SearchComponent },
  {path: 'articles', component: ArticleListComponent},
  {path: 'pt-pt/artigos', component: ArticleListComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: 'pt-pt/artigo/:id', component: ArticlePageComponent},
  {path: 'channels', component: ChannelListComponent},
  {path: 'pt-pt/canais', component: ChannelListComponent},
  {path: 'playlists', component: PlaylistListComponent},
  {path: 'pt-pt/playlists', component: PlaylistListComponent},
  {path: 'playlist/:id_playlist/video/:id_video', component: PlaylistPageComponent},
  {path: 'pt-pt/playlist/:id_playlist/video/:id_video', component: PlaylistPageComponent},
  {path: 'share', component: ShareComponent},
  {path: 'card', component: VideoCardComponent},
  {path: 'saved', component: SavedComponent},
  {path: 'pt-pt/guardados', component: SavedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]

})

export class AppRoutingModule { }


/*


{
    path: 'playlist/:id_playlist',
    children: [
      {path: '**', component: PlaylistPageComponent}
    ]
  },
 */
