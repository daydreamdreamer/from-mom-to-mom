import { Component } from '@angular/core';
import { RecipesCountComponent } from "./recipes-count/recipes-count.component";

@Component({
  selector: 'app-header',
  imports: [RecipesCountComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
