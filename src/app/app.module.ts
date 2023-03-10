import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {VideoCardComponent} from './video-card/video-card.component';
import {CommentsComponent} from './comments/comments.component';
import {VideoPageComponent} from './video-page/video-page.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ChannelPageComponent} from './channel-page/channel-page.component';
import {ChannelSuggestionsComponent} from './channel-suggestions/channel-suggestions.component';
import {ThemeSuggestionsComponent} from './theme-suggestions/theme-suggestions.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ChannelListComponent} from './channel-list/channel-list.component';
import {ChannelCardComponent} from './channel-card/channel-card.component';
import {SafeUrlPipe} from './safe-url.pipe';
import {ArticlePageComponent} from "./article-page/article-page.component";
import {PlaylistListComponent} from './playlist-list/playlist-list.component';
import {PlaylistPageComponent} from './playlist-page/playlist-page.component';
import {PlaylistCardComponent} from './playlist-card/playlist-card.component';
import {SearchComponent} from './search/search.component';
import {TagsListComponent} from './tags-list/tags-list.component';
import {ShareComponent} from './share/share.component';
import {ArticleCardComponent} from './article-card/article-card.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {SavedComponent} from "./saved/saved.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReportPopUpComponent } from './report-pop-up/report-pop-up.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


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
    ThemeSuggestionsComponent,
    ChannelListComponent,
    ChannelCardComponent,
    SafeUrlPipe,
    ArticlePageComponent,
    PlaylistListComponent,
    PlaylistPageComponent,
    PlaylistCardComponent,
    SearchComponent,
    TagsListComponent,
    ShareComponent,
    ArticleCardComponent,
    ArticleListComponent,
    SavedComponent,
    ReportPopUpComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
  InfiniteScrollModule,
  FontAwesomeModule,
  ReactiveFormsModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
