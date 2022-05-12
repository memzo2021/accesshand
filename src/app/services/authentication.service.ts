import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private urlApi: string;
  public messager = new Subject<boolean>();
  public newsletter = new Subject<string>();


  constructor(private http: HttpClient) {
    this.urlApi = 'https://test-node-jb.herokuapp.com';
  }

  public registerUser(username: string, password: string) {
    const body = {
      email: username,
      password: password,
      "firstName": "Maho",
      "lastName": "Mac",
      "pseudo": "Dév"
    };
    return this.http.post(`${this.urlApi}/register`, body);
  }

  public logUser(username: string, password: string) {
    const body = {
     "email": username,
     "password": password
    };
    return this.http.post(`${this.urlApi}/login`, body);
  }
}
