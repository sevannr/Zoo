import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  url: string;

  constructor(private http: Http) { 
    this.url = GLOBAL.url;
  }

  register(user) {
    const params = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(`${this.url}users`, params, {headers}).pipe(map(res => res.json()));
  }
}
