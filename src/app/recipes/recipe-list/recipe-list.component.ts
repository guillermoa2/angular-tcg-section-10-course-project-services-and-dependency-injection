import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  // provide recipeService from parent component
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // Initializes recipes property
    this.recipes = this.recipeService.getRecipes();
  }

}