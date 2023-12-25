import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private http: HttpClient) {
  }

  getLicense(key: string) {
    return this.http.get(`${environment.baseUrl}/licenses/${key}`);
  }



}
