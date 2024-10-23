import { Component, OnInit } from '@angular/core';
import { CartItem } from '../CartItem';
import { CarService } from '../car.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css'
})
export class ViewCartComponent implements OnInit{
  cartItems!: CartItem[];
  cartTotal!:number;
  constructor(private carService:CarService){}

  ngOnInit(): void {
    this.cartItems = this.carService.getCartItems();
    this.cartTotal=this.carService.getCartTotal();
  }

  onCartItemChanged(item:CartItem){
    this.carService.onCartItemChanged(item);
    this.cartItems = this.carService.getCartItems();
    this.cartTotal=this.carService.getCartTotal();
  }

  onCartItemDeleted(id:number){
    this.carService.onCartItemDeleted(id);
    this.cartItems = this.carService.getCartItems();
    this.cartTotal=this.carService.getCartTotal();
  }
}
