import { Component, computed, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { CookingTimePipe } from '../../pipes/cooking-time.pipe';
import { RecipeCategoryLabels } from '../../../shared/constants/recipe-category.map';
import { CategoryImagePipe } from '../../pipes/category-image.pipe';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-recipe-item',
  imports: [RouterLink, CookingTimePipe, CategoryImagePipe],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input({ required: true }) recipe!: Recipe;
  @Output() deleteRecipe = new EventEmitter<string>();

  authService = inject(AuthService);
  labels = RecipeCategoryLabels;

  isOwner = computed(() =>
    this.authService.isOwner(this.recipe?.author?._id)
  );

  onDelete(event: Event) {
    event.stopPropagation();

    const confirmed = confirm('Сигурен ли си?');

    if (!confirmed) return;

    this.deleteRecipe.emit(this.recipe._id);
  }
}
