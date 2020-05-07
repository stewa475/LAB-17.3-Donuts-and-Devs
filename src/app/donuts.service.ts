import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results, Donut, Donuts } from './interfaces/donuts';

@Injectable({
  providedIn: 'root',
})
export class DonutsService {
  apiUrl: string = 'https://grandcircusco.github.io/demo-apis/donuts';

  constructor(private http: HttpClient) {}

  getDonuts() {
    return this.http.get<Results>(`${this.apiUrl}.json`);
  }

  getDonut(){
    return this.http.get<Donuts>(`${this.apiUrl}/id.json`);
  }

  
}
