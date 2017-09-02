import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../Recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs/Rx';
@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://recipe-book-372d3.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipe());
    }

    getRecipes() {
       const token = this.authService.getToken();
        this.http.get('https://recipe-book-372d3.firebaseio.com/recipes.json?auth=' + token)
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (const recipe of recipes) {
                    if (recipe['ingredients']) {
                        recipe['ingredient'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.updateRecipes(recipes);
            }
        );
    }
}
