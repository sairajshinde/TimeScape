import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PanValidatorDirective } from '../pan-validator.directive';

@Component({
  selector: 'lib-pan-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    PanValidatorDirective
  ],
  templateUrl: './pan-input.component.html',
  styleUrls: ['./pan-input.component.css'] // ✅ Plural form
})
export class PanInputComponent {
  form = new FormGroup({
    pan: new FormControl('')
  });
}
