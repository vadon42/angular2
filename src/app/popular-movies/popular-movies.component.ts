import { Component, OnInit } from '@angular/core';
// import {SwiperOptions} from "swiper";
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss'],
})
export class PopularMoviesComponent implements OnInit {

  popularMovies: any;

  constructor(private http: HttpClient) {
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=38308cf7453d538f82afb3ebd561647d&page=1', {
    }).subscribe(response => {
      // @ts-ignore
      this.popularMovies = response.results;
    });

  }

  //
  //
  // config: SwiperOptions = {
  //   loop: true,
  //   loopFillGroupWithBlank: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //
  //   breakpoints: {
  //     // when window width is >= 640px
  //     1200: {
  //       slidesPerView: 4,
  //       slidesPerGroup: 4,
  //     },
  //
  //     992: {
  //       slidesPerView: 3,
  //       slidesPerGroup: 3,
  //     },
  //
  //     600: {
  //       slidesPerView: 2,
  //       slidesPerGroup: 2,
  //     }
  //   }
  // };
  //

  ngOnInit() {
  }

}
