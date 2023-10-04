import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function noLisurasValidator(control: AbstractControl): ValidationErrors | null {
  if (typeof control.value === 'string'&& control.value.toLocaleLowerCase() === 'carajo') {
    return {
      noCarajo: true
    }
  }
  return null;
}