import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RecipesCountComponent } from "./recipes-count/recipes-count.component";

@Component({
  selector: 'app-header',
  imports: [RecipesCountComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
