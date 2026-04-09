import { Component } from '@angular/core';
import { RecentRecipesComponent } from './recent-recipes/recent-recipes.component';
import { SuperMamasComponent } from './super-mamas/super-mamas.component';

@Component({
  selector: 'app-home',
  imports: [RecentRecipesComponent, SuperMamasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
