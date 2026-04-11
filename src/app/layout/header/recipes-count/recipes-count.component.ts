import { Component, inject } from '@angular/core';
import { StatsService } from '../../../core/services/stats.service';

@Component({
  selector: 'app-recipes-count',
  imports: [],
  templateUrl: './recipes-count.component.html',
  styleUrl: './recipes-count.component.css'
})
export class RecipesCountComponent {
  private statsService = inject(StatsService);

  recipesCount = this.statsService.recipesCount;
  usersCount = this.statsService.usersCount;

  ngOnInit() {
    this.statsService.sync();
  }
}
