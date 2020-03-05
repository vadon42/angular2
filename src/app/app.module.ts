import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FilmItemComponent } from './film-item/film-item.component';
import { ListComponent } from './page/list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { ForNumberPipe } from './for-number.pipe';
import { MoviesComponent } from './page/movies/movies.component';
import { SearchComponent } from './search/search.component';
import { SwiperMoviesComponent } from './swiper-movies/swiper-movies.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';

const appRoutes: Routes = [
  { path: 'movies/:id', component: MoviesComponent },
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: ListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FilmItemComponent,
    ListComponent,
    PaginationComponent,
    ForNumberPipe,
    MoviesComponent,
    SearchComponent,
    SwiperMoviesComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgxUsefulSwiperModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
