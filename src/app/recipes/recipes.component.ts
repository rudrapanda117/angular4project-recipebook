import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

    constructor(private recipeService: RecipeService) {}

    public ngOnInit(): void {

     }
}
