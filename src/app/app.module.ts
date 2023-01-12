import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { CommentsComponent } from './comments/comments.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { ChannelSuggestionsComponent } from './channel-suggestions/channel-suggestions.component';
import { ThemeSuggestionsComponent } from './theme-suggestions/theme-suggestions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoCardComponent,
    CommentsComponent,
    VideoPageComponent,
    HomepageComponent,
    ChannelPageComponent,
    ChannelSuggestionsComponent,
    ThemeSuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
