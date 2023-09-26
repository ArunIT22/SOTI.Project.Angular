import { AbstractControl, ValidationErrors } from '@angular/forms';

export function TimeValidator(control: AbstractControl): ValidationErrors | null {
  const startTime = control.get('startTime')?.value;
  const endTime = control.get('endTime')?.value;

  if (Number(startTime) > Number(endTime)) {
    return { 'invalid-time': true };
  }

  return null;
}
