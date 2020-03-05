import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private genres: any;

  constructor(private http: HttpClient) {
    this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=38308cf7453d538f82afb3ebd561647d', {
    }).subscribe(response => {
      this.genres = response.genres;
    });
  }

  public get getData() {
    return this.genres;
  }
}
