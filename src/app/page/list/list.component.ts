import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from '@angular/router';
import {GenresService} from "../../genres.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movies: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private genres: GenresService) {
  }

  search(value) {
    this.movies = this.movies.map(item => {
      const reg = RegExp(value.toLowerCase() , 'g');
      item.filter = !reg.test(item.title.toLowerCase());
      return item;
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.http.get('https://api.themoviedb.org/4/list/1?page=' + (params.id || 1) + '&api_key=38308cf7453d538f82afb3ebd561647d', {
      }).subscribe(response => {
        // @ts-ignore
        return this.movies = response.results;
      });
    });



  }

}
