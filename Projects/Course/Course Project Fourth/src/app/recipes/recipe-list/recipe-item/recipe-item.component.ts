import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../shared/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;


 /* @Input() recipe : {name: string,description: string,imagePath: string};*/

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
