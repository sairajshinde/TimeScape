import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'lib-custom-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    FileUploadModule,
    CheckboxModule,
    DropdownModule,
  ],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.css'
})
export class CustomFormComponent {
  @Input() config: any;

  formGroup = new FormGroup({});
  isGridLayout = false;

  ngOnInit() {
    this.isGridLayout = this.config?.layout === 'grid';

    this.config?.fields?.forEach((field: any, index: number) => {
      const validators = [];
      if (field.required) validators.push(Validators.required);
      if (field.minlength) validators.push(Validators.minLength(+field.minlength));
      if (field.maxlength) validators.push(Validators.maxLength(+field.maxlength));
      if (field.regex) validators.push(Validators.pattern(field.regex));

      this.formGroup.addControl('field' + index, new FormControl('', validators));
    });
  }

  getFirstError(controlName: string): string | null {
    const control = this.formGroup.get(controlName);
    if (control && control.errors) {
      const firstKey = Object.keys(control.errors)[0];
      return firstKey;
    }
    return null;
  }
}
