import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  // identity: any;
  // token: any;
  url: string;

  constructor(private http: Http) {
    this.url = GLOBAL.url;
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    return identity !== undefined ? identity : null;
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token !== undefined ? token : null;
  }


  login(user, gettoken = null) {
    if(gettoken != null) {
      user.gettoken = gettoken;
    }
    
    const params = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(`${this.url}users/login`, params, {headers}).pipe(map(res => res.json()));
  }

  register(user) {
    const params = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(`${this.url}users`, params, {headers}).pipe(map(res => res.json()));
  }
}
