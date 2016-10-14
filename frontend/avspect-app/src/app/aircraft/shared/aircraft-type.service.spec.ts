/* tslint:disable:no-unused-variable */
/// <reference path="../../../../typings/index.d.ts" />
import { AircraftTypeService } from './aircraft-type.service';
import { IAircraftType } from './aircraft-type.model';
import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('Service: AircraftType', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},
        AircraftTypeService
      ]
    });
  });

  describe('get', () => {
    let sut : AircraftTypeService = null;
    beforeEach(() => {
        sut = TestBed.get(AircraftTypeService);
    });

    it('should be defined', () => {
      expect(sut).not.toBeNull();
    });

    it('should get aircraft types',
      inject([AircraftTypeService, MockBackend], 
        fakeAsync((aircraftTypeService : AircraftTypeService, mockBackend : MockBackend) => {
          let aircraftTypes: IAircraftType[];
          mockBackend.connections.subscribe(c => {
            let response = new ResponseOptions({body: '[{}]'});
            c.mockRespond(new Response(response));
          });
          aircraftTypeService
            .get()
            .subscribe(res => {
                  aircraftTypes = res;
            });
          tick();
          expect(aircraftTypes).not.toBeNull();
          expect(aircraftTypes.length).toEqual(1);
        })));
  });
});
