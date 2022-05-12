import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StationyService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'https://test-node-jb.herokuapp.com';
  }

  getAllStations() {
    const token = localStorage.getItem("token");

    return this.http.get(`${this.urlApi}/api/station/personnal`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
}
