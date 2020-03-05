import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {LocalStorageService} from "../../local-storage.service"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies: {};
  public recommendations: any;
  public favorites: boolean;

  constructor(private location: Location, private http: HttpClient, private activatedRoute: ActivatedRoute, private storage: LocalStorageService) {
    this.activatedRoute.params.subscribe(params => {
      this.http.get('https://api.themoviedb.org/3/movie/' + params.id + '?api_key=38308cf7453d538f82afb3ebd561647d', {
      }).subscribe(response => {
        this.movies = response;
        this.favorites = this.storage.favorites().some(el => el === this.movies.id);

        this.http.get('https://api.themoviedb.org/3/movie/' + this.movies.id + '/recommendations?api_key=38308cf7453d538f82afb3ebd561647d', {
        }).subscribe(response => {
          this.recommendations = response.results;
        })
      });
    });
  }

  setFavorites(id) {
    this.favorites = this.storage.favorites(id);
  }


}
