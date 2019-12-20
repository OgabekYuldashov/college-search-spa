import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class CollegesService {
  collegesUrl = 'http://localhost:8080/api/colleges';

  constructor(private http: HttpClient) { }

  getColleges(zip: string, year: string, predominantDegrees: string, distance: number, page: number): Observable<Response> {

    /*zip = '52556';
    year = '2017';
    predominantDegrees = '2,3';*/

    if (this.empty(zip) || this.empty(year)) {
      console.log('ZIP and YEAR are compulsory');
      return;
    }

    let finalUrl = `${this.collegesUrl}?zip=${zip}&year=${year}`;
    if (distance) {
      finalUrl += '&predominantDegrees=' + predominantDegrees;
    }
    if (distance) {
      finalUrl += '&distance=' + distance;
    }
    if (page) {
      finalUrl += '&page=' + page;
    }

    return this.http.get<Response>(finalUrl);
  }

  empty(e) {
    switch (e) {
      case '':
      case 0:
      case '0':
      case null:
      case false:
      // tslint:disable-next-line:triple-equals
      case typeof this == 'undefined':
        return true;
      default:
        return false;
    }
  }
}
