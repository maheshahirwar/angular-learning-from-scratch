import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { CarData } from '../CarData';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit{

  car?: CarData;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) {}

  total!:number;
  ngOnInit(): void {
    // Get the car ID from the route parameters
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCarById(id).subscribe(car => {
      this.car = car;
    });
    this.total = this.carService.getTotalCount();
  }
  addToCart(car:CarData){
    this.carService.addToCart(car);
    this.total = this.carService.getTotalCount();
  }
}
