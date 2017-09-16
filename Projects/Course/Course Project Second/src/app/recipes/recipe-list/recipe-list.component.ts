import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe("Test Recipe 1","Test Recipe Description 1","http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg"),
    new Recipe("Test Recipe 2","Test Recipe Description 2","http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg")

  ];

  constructor() { }

  ngOnInit() {
  }

  recipeSel(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
  
}
