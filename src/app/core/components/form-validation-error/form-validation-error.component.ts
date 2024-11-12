import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-form-validation-error',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './form-validation-error.component.html',
  styleUrl: './form-validation-error.component.css'
})
export class FormValidationErrorComponent {
  @Input() control: AbstractControl | null = null;

  get errorMessages(): string[]{
    if (!this.control?.errors) {
      return [];
    }

    return Object.keys(this.control.errors).map(errorKey => this.getErrorMessage(errorKey));
  }

  private getErrorMessage(errorKey: string): string {
    let errorMessages: { [key: string]: string } = {
      "required": 'This field is required.',
      "minlength": 'The input is too short.',
      "maxlength": 'The input is too long.',
      "email": 'Invalid email address.',
      "pattern": 'Invalid format.',
    };


    let errorMessage: string = errorMessages![errorKey];
    // error never becomes null, because it is checked in line 19
    return errorMessage ? errorMessage : this.control!.errors![errorKey];
  }
}
