import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-license-info',
  standalone: true,
  imports: [],
  templateUrl: './license-info.component.html',
  styleUrl: './license-info.component.css'
})
export class LicenseInfoComponent implements OnInit {

  data: any;

  constructor( private _dataService: DataService) {
    
  }

  ngOnInit() {
    this._dataService.currentLicenseData.subscribe(data => this.data = data);
  }


}
