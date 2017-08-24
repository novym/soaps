import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IVehicle } from './vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  @Input('vehicle') vehicle: string;
  @Output() dispatch: EventEmitter<IVehicle> = new EventEmitter();

  select(vehicle: IVehicle) {
    this.dispatch.emit(vehicle);
  }
}
