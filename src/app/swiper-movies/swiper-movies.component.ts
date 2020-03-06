import {Component, Input, OnInit} from '@angular/core';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-swiper-movies',
  templateUrl: './swiper-movies.component.html',
  styleUrls: ['./swiper-movies.component.scss'],
})
export class SwiperMoviesComponent implements OnInit {

  @Input() title: string;
  @Input() data: [];

  constructor() {
  }

  config: SwiperOptions = {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },

      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      }
    }
  };

  ngOnInit() {
  }

}
