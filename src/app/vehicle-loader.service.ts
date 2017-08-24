import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleLoader {
  constructor(private http: Http) { }

  load() {
    return this.http.get('assets/data.json')
    .map(res => res.json());
  }
}
