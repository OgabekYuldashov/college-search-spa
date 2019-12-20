import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CollegesService} from '../../services/colleges.service';
import {Response} from '../../models/Response';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  zip: string;
  year: string;
  predominantDegrees: string;
  distance: number;
  page = 0;

  @Output() refreshColleges: EventEmitter<Response> = new EventEmitter();

  constructor(private collegesService: CollegesService, private mapService: MapService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('On Submit:');
    this.mapService.getCityNameByZipCode(this.zip).subscribe(resp => {
      console.log('maps: ');
      console.log(resp);
    });
    this.collegesService.getColleges(this.zip, this.year, this.predominantDegrees, this.distance, this.page).subscribe(resp => {

            console.log('Response:');
            console.log(resp);
            this.refreshColleges.emit(resp);
    });
  }
}
