import { Directive, HostListener } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[panValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PanValidatorDirective,
      multi: true
    }
  ]
})
export class PanValidatorDirective implements Validator {
  @HostListener('input', ['$event.target'])
  onInput(input: HTMLInputElement) {
    const cleaned = input.value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .slice(0, 9); // ✅ PAN is 9 characters

    if (input.value !== cleaned) {
      input.value = cleaned;
      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const pan = control.value;

    if (!pan) {
      console.warn('PAN is required.');
      return { required: true };
    }

    const panRegex = /^[A-Z]{4}[0-9]{4}[A-Z]$/;

    const valid = panRegex.test(pan);
    if (!valid) {
      console.warn(`Invalid PAN format: "${pan}"`);
      return { invalidPan: true };
    }

    return null;
  }
}
