import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  product:any;

  total: number = 0;
  @Input() cartTotal!: number;
  @Input() cartItems!: CartItem[];
  @Output() cartItemDeleted = new EventEmitter<number>();
  @Output() cartItemChanged = new EventEmitter<number>();  

  onCartItemDeleted(prodId:number) {
    this.cartItemDeleted.emit(prodId);    
  }

  onCartItemChanged(prodId: number) {
    this.cartItemChanged.emit(prodId);    
  }
}
