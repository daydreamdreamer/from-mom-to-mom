import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const timeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const hours = control.get('hours')?.value;
  const minutes = control.get('minutes')?.value;

  if (hours == null || minutes == null) {
    return null;
  }

  if (hours === 0 && minutes === 0) {
    return { invalidTime: true };
  }

  return null;
};