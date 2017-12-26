import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
export class ShoppingListService {

    public ingedientsChanged = new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[]= [
        new Ingredient('Apple', 10),
        new Ingredient('Tomato', 10)

      ];

      public getIngedients() {
          return this.ingredients.slice();
      }

      addIngedient(ingedient: Ingredient) {
        this.ingredients.push(ingedient);
        this.ingedientsChanged.emit(this.ingredients.slice());
      }

}
