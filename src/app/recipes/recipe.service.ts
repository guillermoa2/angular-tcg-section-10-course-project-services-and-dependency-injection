import { Recipe } from './recipe.model';

export class RecipeService {
    // private so recipes can't be accessed from outside
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];

    // So recipes can be accessed from outside
    getRecipes() {
        // slice is used to get a copy, and really make sure we don't access the array stored from outside
        return this.recipes.slice();
    }
}