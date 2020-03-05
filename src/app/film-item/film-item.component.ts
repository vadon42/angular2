import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenresService} from '../genres.service';



@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() filmData;
  @Input() brief;

  public genresName: string;

  constructor(private http: HttpClient, private genres: GenresService) {
  }

  ngOnInit() {
    if (!this.brief) {
      this.genresName = this.genres.getData.reduce((array, genre) => {
        if (this.filmData.genre_ids.indexOf(genre.id) !== -1) {
          array.push(genre.name);
        }
        return array;
      }, []).join(', ');
    }
  }
}
