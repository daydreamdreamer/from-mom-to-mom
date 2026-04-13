import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Recipe, RecipeCategory, RecipeDto } from '../../../shared/interfaces/recipe';
import { RecipeCategoryLabels } from '../../../shared/constants/recipe-category.map';
import { timeValidator } from '../../../shared/validators/time.validator';
import { DynamicListInputComponent } from '../../../shared/components/dynamic-list-input/dynamic-list-input.component';
import { InputErrorDirective } from "../../../shared/directives/input-error.directive";

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicListInputComponent, InputErrorDirective],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent implements OnChanges {
  private fb = inject(FormBuilder);

  @Input() initialData: Recipe | null = null;
  @Input() isEditMode = false;

  @Output() formSubmit = new EventEmitter<RecipeDto>();

  labels = RecipeCategoryLabels;

  categoryEntries = Object.values(RecipeCategory)
    .filter(v => typeof v === 'number') as RecipeCategory[];

  recipeForm: FormGroup = this.fb.group({
    recipeName: ["", [Validators.required, Validators.minLength(2)]],
    category: [null as RecipeCategory | null, Validators.required],
    cookingTime: this.fb.group(
      {
        hours: [0, [Validators.required, Validators.min(0), Validators.max(23)]],
        minutes: [0, [Validators.required, Validators.min(0), Validators.max(59)]]
      },
      { validators: timeValidator }
    ),
    ingredients: [[] as string[]],
    preparationDetails: [[] as string[]]
  });

  get hoursCtrl() {
    return this.recipeForm.get('cookingTime.hours');
  }

  get minutesCtrl() {
    return this.recipeForm.get('cookingTime.minutes');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialData'] && this.initialData) {
      const hours = Math.floor(this.initialData.cookingTime / 60);
      const minutes = this.initialData.cookingTime % 60;

      this.recipeForm.patchValue({
        recipeName: this.initialData.recipeName,
        category: this.initialData.category,
        cookingTime: { hours, minutes },
        ingredients: this.initialData.ingredients,
        preparationDetails: this.initialData.preparationDetails
      });
    }
  }

  onSubmit(): void {
    if (this.recipeForm.invalid) {
      this.recipeForm.markAllAsTouched();
      return;
    }

    const formValue = this.recipeForm.value;

    const cookingTime =
      formValue.cookingTime.hours * 60 +
      formValue.cookingTime.minutes;

    const recipeDto: RecipeDto = {
      recipeName: formValue.recipeName!,
      category: formValue.category!,
      cookingTime,
      ingredients: formValue.ingredients ?? [],
      preparationDetails: formValue.preparationDetails ?? []
    };

    this.formSubmit.emit(recipeDto);
  }
}
