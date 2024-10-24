import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService,private router:Router,private auth:SocialAuthService){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    });

    this.auth.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        this.authService.setAuthenticated();
        this.router.navigate(['/home']);
      }
      console.log(this.loggedIn);
      
    });
  }
  errorMessage!:string;
  login(){
      if(this.authService.login(this.loginForm)){
        this.router.navigate(['/home']);
      }else{
        this.errorMessage = "Authentication failed. Please try again!!";
      }
  }
  user!:SocialUser;
  loggedIn!:boolean
}
