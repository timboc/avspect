import { Component, OnInit } from '@angular/core';
import { IAircraftType } from '../shared/aircraft-type.model'
import { AircraftTypeService } from '../shared/aircraft-type.service'

@Component({
  selector: 'app-aircraft-type-list',
  templateUrl: './aircraft-type-list.component.html',
  styleUrls: ['./aircraft-type-list.component.css']
})
export class AircraftTypeListComponent implements OnInit {

  aircraftTypes : IAircraftType[] = [];
  initialised : boolean = false;
  errorMessage : string;

  constructor(private aircraftTypeService : AircraftTypeService) {
  }

  ngOnInit() {
    this.aircraftTypeService.get().subscribe(response => {
      this.aircraftTypes = response;
      this.initialised = true;
    }, error => {
      this.errorMessage = error;
    })
  }
}