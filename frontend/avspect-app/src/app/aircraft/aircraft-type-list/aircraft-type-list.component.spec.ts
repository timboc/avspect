/* tslint:disable:no-unused-variable */
/// <reference path="../../../../typings/index.d.ts" />

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { AircraftTypeListComponent } from './aircraft-type-list.component';
import { AircraftTypeService } from '../shared/aircraft-type.service'; 
import { IAircraftType } from '../shared/aircraft-type.model';

class MockAircraftTypeService extends AircraftTypeService
{
  storedAircraftTypes : IAircraftType[] = [
    { "name": "747", "vendor" : "boeing" }
  ];

  get() : Observable<IAircraftType[]> {
    return Observable.of(this.storedAircraftTypes);
  }
}

describe('Component: AircraftTypeList', () => {
  describe('the AircraftTypeList\'s', () => {
    let fixture : ComponentFixture<AircraftTypeListComponent>;
    let sut : AircraftTypeListComponent;
    let mock : MockAircraftTypeService;
    
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ AircraftTypeListComponent ],
        providers: [
          { provide: AircraftTypeService, useClass: MockAircraftTypeService }
        ]
      })

      fixture = TestBed.createComponent(AircraftTypeListComponent);
      sut = fixture.componentInstance;      
      mock = TestBed.get(AircraftTypeService);
    })

    describe('constructor', () => {
      it('should have an empty list of AircraftTypes', () => {
        expect(sut.aircraftTypes).toBeDefined();              
      })
      it('should not be initialised', () => {
        expect(sut.initialised).toEqual(false);
      })
    })

    describe('onInit', () => {
      beforeEach(() => {
        fixture.detectChanges(); // calls ngOnInit()
      });

      it('should be initialised', () => {
        expect(sut.initialised).toEqual(true);
      });

      it('should have types', () => {
        expect(sut.aircraftTypes.length).toEqual(mock.storedAircraftTypes.length);
        expect(sut.aircraftTypes[0].name).toEqual(mock.storedAircraftTypes[0].name);                
      });

      it('should have one li per type', () => {
        var lis = <NodeList>fixture.nativeElement.querySelectorAll('li'); 
        expect(lis.length).toEqual(mock.storedAircraftTypes.length);
        expect(lis[0].textContent).toEqual(mock.storedAircraftTypes[0].name + ' by ' + mock.storedAircraftTypes[0].vendor);
      })
    });
  });
});
