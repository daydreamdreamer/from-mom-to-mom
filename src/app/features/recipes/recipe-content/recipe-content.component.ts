import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../shared/interfaces/recipe';

@Component({
  selector: 'app-recipe-content',
  imports: [],
  templateUrl: './recipe-content.component.html',
  styleUrl: './recipe-content.component.css'
})
export class RecipeContentComponent implements OnInit{
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    
  }
}
