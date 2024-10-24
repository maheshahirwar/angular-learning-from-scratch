import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  constructor() { }

  login(loginForm:FormGroup):boolean{
    let email = loginForm.value.email;
    let password = loginForm.value.password;
    if(email==='admin@gmail.com' && password==='admin@123'){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  logout(){
    this.isLoggedIn = false;
  }
  isAuthenticated():boolean{
    return this.isLoggedIn;
  }

  setAuthenticated(){
    this.isLoggedIn=true;
  }
}
