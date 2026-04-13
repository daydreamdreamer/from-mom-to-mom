import { Component, Input, forwardRef, inject} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { InputErrorDirective } from "../../../shared/directives/input-error.directive";

@Component({
  selector: 'app-dynamic-list-input',
  standalone: true,
  imports: [ReactiveFormsModule, InputErrorDirective],
  templateUrl: './dynamic-list-input.component.html',
  styleUrls: ['./dynamic-list-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicListInputComponent),
      multi: true
    }
  ]
})
export class DynamicListInputComponent implements ControlValueAccessor {
  @Input() label = '';
  private fb = inject(FormBuilder);


  formArray: FormArray<FormControl<string>> = this.fb.array([
    this.fb.nonNullable.control('', Validators.required)
  ]);

  private onChange: (value: string[]) => void = () => {};
  private onTouched: () => void = () => {};


  addField(): void {
    this.formArray.push(
      this.fb.nonNullable.control('', Validators.required)
    );
    this.emitChanges();
  }

  removeField(index: number): void {
    if (this.formArray.length > 1) {
      this.formArray.removeAt(index);
      this.emitChanges();
    }
  }

  emitChanges(): void {
    this.onChange(this.formArray.value);
    this.onTouched();
  }

  writeValue(values: string[] | null): void {
    if (values && values.length) {
      this.formArray.clear();

      values.forEach(v =>
        this.formArray.push(
          this.fb.nonNullable.control(v, Validators.required)
        )
      );
    } else {
      this.formArray.clear();
      this.formArray.push(
        this.fb.nonNullable.control('', Validators.required)
      );
    }
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}