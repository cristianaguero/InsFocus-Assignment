import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private licenseData = new BehaviorSubject<any>(null);
  currentLicenseData = this.licenseData.asObservable();

  constructor() { }

  setLicenseData(data: any) {
    this.licenseData.next(data);
  }
}
