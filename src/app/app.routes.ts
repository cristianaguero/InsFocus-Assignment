import { Routes } from '@angular/router';
import { LicensePageComponent } from './components/license-page/license-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'license-page', pathMatch: 'full' },
    { path: 'license-page', component: LicensePageComponent },
    { path: '**', redirectTo: 'license-page' }
];
