import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies: {};
  public recommendations: any;

  constructor(private location: Location, private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.http.get('https://api.themoviedb.org/3/movie/' + params.id + '?api_key=38308cf7453d538f82afb3ebd561647d', {
      }).subscribe(response => {
        this.movies = response;

        this.http.get('https://api.themoviedb.org/3/movie/' + this.movies.id + '/recommendations?api_key=38308cf7453d538f82afb3ebd561647d', {
        }).subscribe(response => {
          this.recommendations = response.results;
        })
      });
    });


  }

  ngOnInit() {

  }

}
