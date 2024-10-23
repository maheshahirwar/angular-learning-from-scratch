import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { CarData } from '../CarData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cars: CarData[] = [];
  selectedCar?: CarData;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Fetch all cars from the JSON file
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
    });
  }

  // Fetch details for a specific car by ID
  getCarDetails(id: number): void {
    this.carService.getCarById(id).subscribe(car => {
      this.selectedCar = car;
    });
  }

  
}
