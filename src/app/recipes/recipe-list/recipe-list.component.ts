import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output('recipewasselected') recipeWasSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }

}
