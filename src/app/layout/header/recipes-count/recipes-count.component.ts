import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes-count',
  imports: [],
  templateUrl: './recipes-count.component.html',
  styleUrl: './recipes-count.component.css'
})
export class RecipesCountComponent {

  recipesCount = 52618;
  authorsCount = 246;

}
