import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import {Subject} from 'rxjs/Subject';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Fab Salmon', 'For non workout days',
            'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
        [new Ingredient('Salmon Slice 7oz', 3),
         new Ingredient('Lemon', 2)
       ]),
        new Recipe('Fab  steak Ribeye', 'Great for work out days',
            'http://www.seriouseats.com/images/20110516-cowboy-steak-5.jpg',
         [new Ingredient('7 oz Ribeye', 6),
         new Ingredient('Butter', 1)
       ])
    ];

    constructor(private slService: ShoppingListService) {

    }
    getRecipeForId(index: number) {
        return this.recipes[index];
    }

    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteReciper(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipes (recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
}
