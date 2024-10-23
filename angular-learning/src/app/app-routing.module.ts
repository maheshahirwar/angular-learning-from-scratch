import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent},
  {path:'viewcart',component : ViewCartComponent},
  {path:'car/:id', component : CarDetailsComponent},
  {path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
