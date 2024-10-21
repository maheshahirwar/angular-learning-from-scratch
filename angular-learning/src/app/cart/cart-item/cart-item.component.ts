import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  @Input() cartItem!: CartItem;
  @Output() cartItemDeleted = new EventEmitter<number>();
  @Output() cartItemChanged = new EventEmitter<number>();  

  onCartItemDeleted(id:number) {
    this.cartItemDeleted.emit(id);
  }  

  onCartItemChanged(id:number) {
    this.cartItemChanged.emit(id);    
  }
}
