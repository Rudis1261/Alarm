import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  get(path, params) {
    let headers = new Headers({ 'Authorization': 'Bearer: ' + localStorage.getItem('token')});
    let options = new RequestOptions({ headers: headers });
    let url = [environment.api, environment.end_point[path]].join('/')
    if (params) {
      url = [url, params].join('/');
    }

    console.log(url);
    return this.http.get(url, options).map((res:Response) => res.json());
  }

  loggedIn() {
    return tokenNotExpired();
  }
}
