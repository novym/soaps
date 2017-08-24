import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WashVehicleService {
  constructor() { }

  wash(vehicle) {
    const status = {
      price: 0,
      completed: '',
      message: '',
      discount: false
    };
 
    checkPlate(vehicle);
    checkType(vehicle);
    checkDiscount(vehicle);
    
    function checkPlate(vehicle) {
      if (vehicle.licensePlate === '1111111') {
        status.completed = 'rejected'
        status.message = 'We are unable to wash vehicles that are reported as stolen.';
      } else {
        status.completed = 'complete';
        status.message = 'Vehicle is ready!';
      }
    }

    function checkType(vehicle) {
      if (status.completed === 'rejected') {
        return;
      } else if (vehicle.type === 'car') {
         status.price = 5;
         return; 
      } else if (vehicle.type === 'truck') {
        washTruck(vehicle);
      } else {
        status.completed = 'rejected';
        status.message = 'Unfortunately we are only able to accept cars and trucks at this time.'
      }
    }

    function washTruck(truck) {
      if (truck.bedOpen) {
        status.completed = 'rejected';
        status.message = 'We are unable to wash open truck beds.'
        return;
      }
      
      status.price = 10

      if (truck.bedCleaning) {
        status.price = status.price + 2;
      }
    }

    function checkDiscount(vehicle) {
      if (!vehicle.firstVisit) {
        status.price = status.price * .5;
        status.discount = true;
      }
    }
    console.log(status);
    return status;
  }
}