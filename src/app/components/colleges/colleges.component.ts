import { Component, OnInit } from '@angular/core';
import {College} from '../../models/College';
import {CollegesService} from '../../services/colleges.service';
import {Response} from '../../models/Response';
import {Metadata} from '../../models/Metadata';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css']
})
export class CollegesComponent implements OnInit {

  colleges: College[];
  resultMessage = '';
  metadata: Metadata;
  city = 'Fairfield';
  url = 'https://www.google.com/maps/embed/v1/place?q=${this.city}&key=AIzaSyAohNbXKpZKvgSeR02TC6BVjRUyLiv-1tA';

  constructor(private collegesService: CollegesService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  refreshColleges(response: Response) {
    console.log('on refresh:');
    console.log(response);

    this.metadata = response.metadata;

    // tslint:disable-next-line:max-line-length
    this.resultMessage = `TOTAL RECORDS: ${this.metadata.total} | RECORDS PER PAGE: ${this.metadata.per_page} | CURRENT PAGE: ${this.metadata.page + 1}`;
    this.colleges = response.schools;
  }
}
