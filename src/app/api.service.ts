import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) {}

  getRandomData() {
    return this.http.get('https://randomuser.me/api/?results=90')
  }
}
