import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB8_5epjDcAbPIwZVp-3N-0y1zze4R27YM';

  constructor(private http: HttpClient) { }

  // @ts-ignore
  getCityNameByZipCode(zip: string): Observable<any> {
    console.log('inside map service');
    this.http.get(`${this.mapsUrl}&address=${zip}`);
  }
}
