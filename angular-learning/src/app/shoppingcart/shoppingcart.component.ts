import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../CartItem';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent implements OnInit{

  ngOnInit(): void {
    this.updateCartTotal();
  }

  // cartItems = new BehaviorSubject<Products[]>([]);
  // totalPrice!:number;
  // item!:Products;
  // addToCart(product:Products){
  //   let cart = this.cartItems.value;
  //   cart.filter(prod=>prod.productName==product.productName)
  //   .map(prod=>prod.price*2);
  //   console.log("cart list : "+cart);
  // }


  cartTotal: number = 0;
  cartItems: CartItem[] = [];

  onCartItemDeleted(productId: number) {
    const index = this.cartItems.findIndex( elem => elem.id == productId )
    this.cartItems.splice(index,1);
    this.updateCartTotal();
  }

  onCartItemChanged(productId: number) {
    this.updateCartTotal();
  }

  onCartUpdated(product:Products) {
    const index = this.cartItems.findIndex( elem => elem.id == product.productId )
    if (index===-1) {
      this.cartItems.push({
          id: product.productId,
          name: product.productName,
          quantity: 1,
          price: product.price,
          total: product.price * 1
      });
    } else {
      this.cartItems[index].id = product.productId;
      this.cartItems[index].name = product.productName;
      this.cartItems[index].quantity++;
      this.cartItems[index].price = product.price;
      this.cartItems[index].total = this.cartItems[index].price * this.cartItems[index].quantity;
    }
      this.updateCartTotal();
  }

  updateCartTotal() {
    //the code to update the total property of the cart
    let total = 0;
    this.cartItems.map( elem => total = total + elem.quantity*elem.price);
    this.cartTotal = total;
 }   
}
