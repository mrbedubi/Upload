import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {VideoPageComponent} from "./video-page/video-page.component";
import {ChannelPageComponent} from "./channel-page/channel-page.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'video', component: VideoPageComponent},
  {path: 'channel', component: ChannelPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
