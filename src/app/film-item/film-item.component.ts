import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenresService} from '../genres.service';
import {LocalStorageService} from "../local-storage.service"



@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() filmData;
  @Input() brief;

  public genresName: string;
  public favorites: boolean;

  constructor(private http: HttpClient, private genres: GenresService, private storage: LocalStorageService) {
  }

  setFavorites(event, id) {
    event.stopPropagation();
    event.preventDefault();
    this.favorites = this.storage.setfavorites(id);
  }


  ngOnInit() {
    this.favorites = this.storage.getfavorites.some(el => el === this.filmData.id);

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
