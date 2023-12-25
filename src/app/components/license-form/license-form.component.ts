
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LicenseService } from '../../services/license.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-license-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule ],
  templateUrl: './license-form.component.html',
  styleUrl: './license-form.component.css'
})
export class LicenseFormComponent {

  licenseForm: FormGroup;

  data: any;

  showError: boolean = false;
  msgError: string = '';

  constructor(private form: FormBuilder, private _licenseService: LicenseService, private _dataService: DataService) {
    this.licenseForm = this.form.group({
      licenseKey: ['', Validators.required]
    });
  }
  
  checkValidation(control: string, error: string) {
    return this.licenseForm.get(control)?.hasError(error) && this.licenseForm.get(control)?.touched;
  }



  handleSubmit() {

    if (this.licenseForm.invalid) {
      return this.licenseForm.controls['licenseKey'].markAsTouched();
    }

    this._licenseService.getLicense(this.licenseForm.get('licenseKey')?.value).subscribe({
      next: (result: any) => {
        this.data = result;
        this._dataService.setLicenseData(this.data);
        this.showError = false;
      },
      error: (error: any) => {
        this.showError = true;
        this.msgError = error.error.message;
      }
    }
    );

    this.licenseForm.reset();
  }

}
