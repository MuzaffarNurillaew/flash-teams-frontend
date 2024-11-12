import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validateEqualityOf(control: AbstractControl, controlToCompare: AbstractControl, error: ValidationErrors | null): ValidatorFn {
  if (!control || !controlToCompare || !control.value || !control.value ||  control.invalid || controlToCompare.invalid || control.value !== controlToCompare.value) {
    // return controlToCompare control and set the error
    controlToCompare.setErrors(error);

    return (control: AbstractControl) => {
      return { notEqual: error };
    };
  }

  return (control: AbstractControl) => {
    return null;
  };
}
