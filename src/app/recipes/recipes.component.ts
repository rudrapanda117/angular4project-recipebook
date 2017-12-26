import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) {}

    public ngOnInit(): void {
        this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
            this.selectedRecipe = recipe;
        });
     }
}
