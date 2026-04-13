import { Directive, inject, ElementRef, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputError]'
})
export class InputErrorDirective {
  private el = inject(ElementRef);
  private control = inject(NgControl, { optional: true})

  @HostBinding('class.input-error') get hasError(): boolean {
    return (this.control?.invalid && this.control?.touched) || false;
  }

}
