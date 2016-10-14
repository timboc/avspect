import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";
import {IAircraftType} from './aircraft-type.model';

@Injectable()
export class AircraftTypeService {
  url : string = 'http://localhost:5000';

  constructor(private http : Http) { }

  get() : Observable<IAircraftType[]> {

    return this.http
        .get(this.url + '/api/aircrafttypes')
        .map((res : Response) => <IAircraftType[]>res.json())        
  }

}
