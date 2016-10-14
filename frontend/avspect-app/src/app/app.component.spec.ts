/* tslint:disable:no-unused-variable */
/// <reference path="../../typings/index.d.ts" />

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AircraftTypeListComponent } from './aircraft/aircraft-type-list/aircraft-type-list.component'
import { AircraftTypeService } from './aircraft/shared/aircraft-type.service'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('App: AvspectApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AircraftTypeListComponent
      ],
      providers: [AircraftTypeService],
      imports: [BrowserModule,
                FormsModule,
                HttpModule]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
