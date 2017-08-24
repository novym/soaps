import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouter } from './app.routes';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CarwashComponent } from './carwash/carwash.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    CarwashComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
