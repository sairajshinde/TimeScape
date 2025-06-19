import { Directive, HostListener } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[adharValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AdharValidatorDirective,
      multi: true
    }
  ]
})
export class AdharValidatorDirective implements Validator {
  @HostListener('input', ['$event.target'])
  onInput(input: HTMLInputElement) {
    // Remove non-digits and limit to 12 characters
    let cleaned = input.value.replace(/\D/g, '').slice(0, 12);
    if (input.value !== cleaned) {
      input.value = cleaned;
      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return { required: true };

    // Aadhaar must be exactly 12 digits and start with 2–9
    const adharRegex = /^[2-9]{1}[0-9]{11}$/;

    if (!adharRegex.test(value)) {
      return { invalidAdhar: true };
    }

    return null;
  }
}
