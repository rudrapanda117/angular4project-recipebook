import { Recipe } from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test',
      'https://myrecipehampers.files.wordpress.com/2013/04/mrh-square-logo.png')
  ];

     public getRecipes() {
          return this.recipes.slice();
      }

}
