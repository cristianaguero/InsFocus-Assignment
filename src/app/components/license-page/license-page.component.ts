import { Component } from '@angular/core';
import { LicenseFormComponent } from '../license-form/license-form.component';
import { LicenseInfoComponent } from '../license-info/license-info.component';


@Component({
  selector: 'app-license-page',
  standalone: true,
  imports: [ LicenseFormComponent, LicenseInfoComponent],
  templateUrl: './license-page.component.html',
  styleUrl: './license-page.component.css'
})
export class LicensePageComponent {

}
