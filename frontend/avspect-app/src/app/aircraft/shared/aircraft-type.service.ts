import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";
import {IAircraftType} from './aircraft-type.model';

@Injectable()
export class AircraftTypeService {
  url : string = 'http://localhost:1234';

  constructor(private http : Http) { }

  get() : Observable<IAircraftType[]> {

    return this.http
        .get("app/aircraft/shared/data/aircraft-types.json")
        .map((res : Response) => <IAircraftType[]>res.json())        
  }

}
