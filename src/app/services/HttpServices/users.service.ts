import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { UserI } from '../models/users.interface';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _url = '/api/User'

  constructor(private http: HttpClient ) { 
    console.log("Servicio Anuncios xd")
  }
  getUsers(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
  
  return this.http.get(this._url, {
    headers: header
  });
  }
}
