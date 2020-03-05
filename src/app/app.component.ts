import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.http.get('https://api.themoviedb.org/3/movie/changes?api_key=38308cf7453d538f82afb3ebd561647d&page=1', {
    // }).subscribe(response => {
    //   console.log(response)
    // });
  }

}
