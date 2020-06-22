import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test recipe','This is simply a test','https://img.taste.com.au/i6uNNUvx/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg'),
    new Recipe('A test recipe2','This is simply a test2','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
