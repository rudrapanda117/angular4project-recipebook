import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {

    public ingedientsChanged = new Subject<Ingredient[]>();

   private ingredients: Ingredient[]= [
        new Ingredient('Apple', 10),
        new Ingredient('Tomato', 10)

      ];

      public getIngedients() {
          return this.ingredients.slice();
      }

      addIngedient(ingedient: Ingredient) {
        this.ingredients.push(ingedient);
        this.ingedientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
          this.ingredients.push(...ingredients);
          this.ingedientsChanged.next(this.ingredients.slice());
      }

}
