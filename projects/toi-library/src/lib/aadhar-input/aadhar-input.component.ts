import { Component } from '@angular/core';
import { AdharValidatorDirective } from '../adhar-validator.directive';

@Component({
  selector: 'lib-aadhar-input',
  standalone: true,
  imports: [AdharValidatorDirective],
  templateUrl: './aadhar-input.component.html',
  styleUrl: './aadhar-input.component.css'
})
export class AadharInputComponent {

}
