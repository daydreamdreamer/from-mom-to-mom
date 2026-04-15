import { Component, OnInit, inject } from '@angular/core';
import { SuperMamasItemComponent } from '../../../shared/components/super-mamas-item/super-mamas-item.component';
import { TopUser } from '../../../shared/interfaces/user';
import { RecipesService } from '../../../core/services/recipes.service';

@Component({
  selector: 'app-super-mamas',
  imports: [SuperMamasItemComponent],
  templateUrl: './super-mamas.component.html',
  styleUrl: './super-mamas.component.css'
})
export class SuperMamasComponent implements OnInit {
  private recipeService = inject(RecipesService);
  superMamas: TopUser[] = [];

  ngOnInit(): void {
    this.recipeService.getTopUsers().subscribe(topUser => {
      this.superMamas = topUser;
    });
  }

}
