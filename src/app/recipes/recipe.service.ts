import {
  ShoppingListService
} from './../shopping-list/shopping-list.service';
import {
  Injectable
} from '@angular/core';
import {
  Recipe
} from './recipe.model';
import {
  Ingredient
} from '../shared/ingredient.model';


@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {}


  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 21),
        new Ingredient('Meater', 1),
        new Ingredient('fishFries', 21)
      ]),
    new Recipe('Sea Food recipe', 'This is simply a test',
      'https://myrecipehampers.files.wordpress.com/2013/04/mrh-square-logo.png', [
        new Ingredient('DeliMeat', 1),
        new Ingredient('Fries', 21),
        new Ingredient('Crab', 1),
        new Ingredient('loadster', 21),
      ])
  ];

  public getRecipes() {
    return this.recipes.slice();
  }

  public addIngredientForShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  public getRecipe(index: number) {
    return this.recipes[index];
  }

}
