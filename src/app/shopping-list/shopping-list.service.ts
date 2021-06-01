import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // informs other components about the event being emitted
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // possible solution, but not efficient with large amount of data
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // Spread operator used in push method to push list of elements instead of a single array object
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}