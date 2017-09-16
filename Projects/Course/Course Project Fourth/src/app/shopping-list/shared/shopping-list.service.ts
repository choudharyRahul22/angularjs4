import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Injectable()
export class ShoppingListService {

  constructor() { }

  addNewIngredient = new EventEmitter<Ingredient[]>();

  private ingredients:Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    return this.addNewIngredient.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    for(let ingredient in ingredients){
      console.log('on shopping-list service ' + ingredient);
    }

    this.ingredients.push(...ingredients);
    this.addNewIngredient.emit(this.ingredients.slice());
  }


}
