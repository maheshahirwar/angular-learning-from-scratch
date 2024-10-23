import { Component, EventEmitter, Output } from '@angular/core';
import { Products } from '../Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  productsList:Products[] = [
    {productId:1, productName: "Samsung J7", description:"Samsung J7 128 GB Memory and 6GB RAM ", price: 18000 },
    {productId:2, productName: "Apple iPhone 6S",description:"", price: 60000 },
    {productId:3, productName: "Lenovo K5 Note",description:"", price: 10000 },
    {productId:4, productName: "Nokia 6",description:"", price: 15000 },
    {productId:5, productName: "Vivo V5 Plus",description:"", price: 26000 }
  ];

  @Output() cartUpdated = new EventEmitter<Products>();

  onCartUpdated(product:Products) {
    const index = this.productsList.findIndex(elem => elem.productId == product.productId);
    this.cartUpdated.emit(product);
 }
}
