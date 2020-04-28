import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  
  url: string;

  constructor(private http: Http) {
    this.url = GLOBAL.url;
  }

  addAnimal(token, animal) {
    const params = JSON.stringify(animal);
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: token
    });

    return this.http.post(`${this.url}animals`, params, {headers}).pipe(map(res => res.json()));
  }

  deleteAnimal(token, animalId) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: token
    });

    const options = new RequestOptions({headers});

    return this.http.delete(`${this.url}animals/${animalId}`, options).pipe(map(res => res.json()));
  }

  getAnimal(animalId) {
    return this.http.get(`${this.url}animals/${animalId}`).pipe(map(res => res.json()));
  }

  getAnimals() {
    return this.http.get(`${this.url}animals`).pipe(map(res => res.json()));
  }

  getImageFile(imageId) {
    console.log(`${this.url}animals/imageFile/${imageId}`);
    return this.http.get(`${this.url}animals/imageFile/${imageId}`).pipe(map(res => res.json()));
  }
}
