import { Observable } from 'rxjs/Rx';
import { VehicleLoader } from '../vehicle-loader.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IVehicle } from '../vehicle/vehicle';
import { WashVehicleService } from '../wash-vehicle.service';



@Component({
  selector: 'app-carwash',
  templateUrl: './carwash.component.html',
  styleUrls: ['./carwash.component.scss'],
  providers: [
    VehicleLoader,
    WashVehicleService
  ],
})
export class CarwashComponent implements OnInit {

  vehicles: Observable<{}[]>;
  status: any;

  constructor(
    private vehicleLoader: VehicleLoader,
    private washVehicle: WashVehicleService 
  ) { }

  ngOnInit() {
    this.vehicles = this.vehicleLoader.load();
    this.status = {};
    this.status.message = 'Waiting for Vehicle...';
  }

  getStatus(selected) {
    this.status = this.washVehicle.wash(selected);
  }
}
