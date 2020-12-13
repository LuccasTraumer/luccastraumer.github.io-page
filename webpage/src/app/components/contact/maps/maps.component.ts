import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title = 'AGM Project';
  latitude = -22.8925058;
  longitude = -47.0281151;

  constructor() { }

  ngOnInit(): void {
  }


  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;

  }
}