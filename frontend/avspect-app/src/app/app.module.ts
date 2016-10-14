import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AircraftTypeListComponent } from './aircraft/aircraft-type-list/aircraft-type-list.component';
import { AircraftTypeService } from './aircraft/shared/aircraft-type.service';

@NgModule({
  declarations: [
    AppComponent,
    AircraftTypeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AircraftTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
