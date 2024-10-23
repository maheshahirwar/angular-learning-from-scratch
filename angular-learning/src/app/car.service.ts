import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CarData } from './CarData';
import { CartItem } from './CartItem';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private jsonUrl = 'car-data.json';  // Path to the JSON file

  constructor(private http: HttpClient) { }

  // Method to get all cars
  getAllCars(): Observable<CarData[]> {
    return this.http.get<CarData[]>(this.jsonUrl);  // Making a GET request to fetch the JSON
  }

  // Method to get a car by ID
  getCarById(id: number): Observable<CarData | undefined> {
    return new Observable(observer => {
      this.getAllCars().subscribe(cars => {
        const car = cars.find(car => car.id === id);
        observer.next(car);
        observer.complete();
      });
    });
  }


  cartTotal: number = 0;
  cartItems: CartItem[] = [];
  totalCount:number = 0;
  onCartItemDeleted(id: number) {
    const index = this.cartItems.findIndex( elem => elem.id == id )
    this.cartItems.splice(index,1);
    this.updateCartTotal();
    this.totalCount--;
  }

  onCartItemChanged(cartItem:CartItem) {
    const index = this.cartItems.findIndex( elem => elem.id == cartItem.id )
    this.cartItems[index].quantity = cartItem.quantity;
    this.cartItems[index].total = this.cartItems[index].price * this.cartItems[index].quantity;
    this.updateCartTotal();
  }

  addToCart(car:CarData) {
    const index = this.cartItems.findIndex( elem => elem.id == car.id )
    this.totalCount++;
    if (index===-1) {
      this.cartItems.push({
          id: car.id,
          name: car.make,
          quantity: 1,
          price: car.price,
          total: car.price * 1
      });
    } else {
      this.cartItems[index].id = car.id;
      this.cartItems[index].name = car.make;
      this.cartItems[index].quantity++;
      this.cartItems[index].price = car.price;
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


 getCartTotal():number{
  return this.cartTotal;
 }

 getCartItems():CartItem[]{
  return this.cartItems;
 }

 getTotalCount():number{
  return this.totalCount;
 }
}
