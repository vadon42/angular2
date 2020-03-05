import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // public config;


  constructor(private http: HttpClient) {
  }


  search() {

  //   --url 'https://api.themoviedb.org/4/list/1' \
  // --header 'Authorization: Bearer <<access_token>>' \
  // --header 'Content-Type: application/json;charset=utf-8'


    // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODMwOGNmNzQ1M2Q1MzhmODJhZmIzZWJkNTYxNjQ3ZCIsInN1YiI6IjVlNWZhOGExMzU3YzAwMDAxMTJmNzc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mht--Y5djFWmD_5SYJlB0LQ8CWjg0Lef0XgYB6D0N4U
    // https://api.themoviedb.org/1/movie/560?api_key=38308cf7453d538f82afb3ebd561647d
   // https://api.themoviedb.org/4/list/1?page=1&api_key=38308cf7453d538f82afb3ebd561647d

    // headers: {
    //   'Content-Type': 'application/json;charset=utf-8',
    //   Authorization: 'Bearer <<38308cf7453d538f82afb3ebd561647d>>'
    // }


  }

//   return this.http.post<T>(/yoururl, yourObject, {
//   headers: new HttpHeaders({
//   'Content-Type': 'application/json'
// }), observe: 'response'
// }).pipe(
//   map(/* do some mapping */)
// );

  ngOnInit(): void {




    // this.http.get('https://api.themoviedb.org/3/movie/changes?api_key=38308cf7453d538f82afb3ebd561647d&page=1', {
    // }).subscribe(response => {
    //   console.log(response)
    // });


    // https://api.themoviedb.org/3/list/{list_id}/item_status?api_key=<<api_key>>




  }

}
