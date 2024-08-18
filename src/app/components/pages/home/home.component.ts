import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from "../../partials/search/search.component";
import { TagComponent } from "../../partials/tag/tag.component";
import { FoodPageComponent } from "../food-page/food-page.component";
import { CartPageComponent } from '../cart-page/cart-page.component';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    SearchComponent,
    TagComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

  foods: Food[]=[]
  constructor(private foodService:FoodService , activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe ((params)=>{
      if(params.searchTerm)
        this.foods = this.foodService.geAllFoodBySearchTerm(params.searchTerm)
      else if(params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag)
      
      else{
        this.foods = foodService.getAll()
      }
    })


  }
}
