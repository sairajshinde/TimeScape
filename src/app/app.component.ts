import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomFormComponent, PanInputComponent } from '../../projects/toi-library/src/public-api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TimeScape';

  inputConfig= {
  columns: 2,
  fields: [
    {
      title: 'Full Name',
      required: true,
      inputType: 'text',
      placeholder: 'Enter your full name',
      minlength: '3',
      maxlength: '30',
      regex: '^[a-zA-Z ]+$',
      patternMessage: 'Only letters and spaces allowed',
      backgroundcolor: '#f0f9ff',
      color: '#1e3a8a',
      icon: 'pi pi-user',
      cssClass: 'full-width rounded-lg'
    },
    {
      title: 'Email Address',
      inputType: 'email',
      placeholder: 'Enter your email',
      minlength: '5',
      maxlength: '50',
      regex: '^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
      patternMessage: 'Enter a valid email address',
      backgroundcolor: '#fff7ed',
      color: '#713f12',
      icon: 'pi pi-envelope',
      cssClass: 'medium-width custom-shadow'
    },
    {
      title: 'Mobile Number',
      inputType: 'text',
      placeholder: 'Enter 10-digit mobile number',
      minlength: '10',
      maxlength: '10',
      regex: '^[0-9]{10}$',
      patternMessage: 'Enter a valid 10-digit mobile number',
      backgroundcolor: '#ecfdf5',
      color: '#065f46',
      icon: 'pi pi-phone',
      cssClass: 'full-width'
    },
    {
      title: 'PAN Number',
      inputType: 'text',
      placeholder: 'ABCDE1234F',
      minlength: '10',
      maxlength: '10',
      regex: '^[A-Z]{5}[0-9]{4}[A-Z]{1}$',
      patternMessage: 'Enter a valid PAN number',
      backgroundcolor: '#fef2f2',
      color: '#991b1b',
      icon: 'pi pi-id-card',
      cssClass: 'full-width'
    },
    {
      title: 'File Upload',
      inputType: 'file',
      placeholder: 'upload file',
      // minlength: '10',
      // maxlength: '10',
      // regex: '^[A-Z]{5}[0-9]{4}[A-Z]{1}$',
      // patternMessage: 'Enter a valid PAN number',
      backgroundcolor: '#fef2f2',
      color: '#991b1b',
      icon: 'pi pi-file',
      cssClass: 'medium-width'
    }
  ]
};
;
}
