import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { CarData } from '../CarData';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cars: CarData[] = [];
  selectedCar?: CarData;

  constructor(private carService: CarService, private authService:AuthService, private router:Router,private auth:SocialAuthService) {}

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

  logout(){
    this.auth.signOut();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
}
