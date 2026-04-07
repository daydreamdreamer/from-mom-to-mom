import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { RecipeCategory } from '../../../shared/interfaces/recipe';
import { RecipesService } from '../../../core/services/recipes.service';
import { Recipe } from '../../../shared/interfaces/recipe';
import { timeValidator } from '../../../shared/validators/time.validator';
import { InputErrorDirective } from '../../../shared/directives/input-error.directive';
import { RecipeCategoryLabels } from '../../../shared/constants/recipe-category.map';
import { DynamicListInputComponent } from '../../../shared/components/dynamic-list-input/dynamic-list-input.component';

@Component({
  selector: 'app-add-recipe',
  imports: [ReactiveFormsModule, DynamicListInputComponent],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit {
  private fb = inject(FormBuilder);

  categories = RecipeCategory;
  labels = RecipeCategoryLabels;

  categoryEntries = Object.values(RecipeCategory)
    .filter(v => typeof v === 'number') as RecipeCategory[];

  recipeForm: FormGroup = this.fb.group({
    recipeName: ['', [Validators.required, Validators.minLength(2)]],
    category: [null as RecipeCategory | null, [Validators.required]],
    cookingTime: this.fb.group(
      {
        hours: [0, [Validators.required, Validators.min(0), Validators.max(23)]],
        minutes: [0, [Validators.required, Validators.min(0), Validators.max(59)]]
      },
      { validators: timeValidator }),
    preparationDetails:  [[] as string[]],
    ingredients: [[] as string[]]
  });

  ngOnInit(): void {

  }

  onSubmit(): void {
     if (this.recipeForm.invalid) {
      this.recipeForm.markAllAsTouched();
      return;
    }
  }

}
