import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function timeValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        const hours = control.get('hours')?.value ?? 0;
        const minutes = control.get('minutes')?.value ?? 0;

        if (hours === 0 && minutes === 0) {
            return { invalidTime: true };
        }

        return null;
    }
}