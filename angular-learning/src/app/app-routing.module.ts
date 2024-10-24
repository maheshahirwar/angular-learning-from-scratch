import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component : LoginComponent},
  {path: 'home', component : HomeComponent, canActivate:[authGuard]},
  {path:'viewcart',component : ViewCartComponent, canActivate:[authGuard]},
  {path:'car/:id', component : CarDetailsComponent, canActivate:[authGuard]},
  {path:'**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
