import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { cart } from '../../../shared/models/cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/cartitem';
import { TitleComponent } from "../../partials/title/title.component";
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, RouterModule, TitleComponent, CommonModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

  cart!: cart
  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart=cart;
    })
  }

//remove item
  removeFromCart(cartItem:CartItem){
this.cartService.removeFromCart(cartItem.food.id)
  }

changeQuantity(cartItem: CartItem, quantityInString: string){
const quantity = parseInt(quantityInString)
this.cartService.changeQuantity(cartItem.food.id, quantity)
}

}
