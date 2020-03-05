import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  favorites(id: number): boolean {
    if (!id) { return this.get('favorites'); }
    else {
      const favorites = this.get('favorites') || [];
      const position = favorites.indexOf(id);
      position === -1 ? favorites.push(id) : favorites.splice(position, 1);
      this.set('favorites' , favorites);
      return  position !== -1 ? false : true;
    }
  }
}
