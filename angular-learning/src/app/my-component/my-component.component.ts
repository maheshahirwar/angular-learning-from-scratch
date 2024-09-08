import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',

  // Inline Templates
  // template:`
  //           <p>
  //             Hello {{ courseName }}
  //           </p>
  //         `,

  // External Templates 
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  courseName:string = "Angular"
  num:number = 8
  username:string="";
  changeName(){
    this.courseName = "Typescript";
  }

  showUser(user:string){
    this.username = user;
  }

  imageUri = "google.png";

  noOfColumns = 2;
  noOfRows = 2;

  applyClass = true;

  applyStyle = true;

  styleObj1 = {
    backgroundColor: 'orange',
    color: 'black'
  }
  styleObj2 = {
    backgroundColor: 'greenyellow',
    color: 'white'
  }

  mouse = "";
  onMouse(){
    console.log("mouse over the element ");
    
    this.mouse = "mouse is over the element";
  }

  onMouseLeave(){
    console.log("mouse leave the element ");
    this.mouse = "";
  }

  successMessage!:string;
  submit(){
    this.successMessage = "submitted successfully!!";
  }

  userName: string='';
  password: string='';
  loginSuccess = false;
  loginFailed = false;
  login() {
    this.loginFailed = this.loginSuccess = false;
    if (this.userName == "admin" && this.password == "admin@123") {
      this.loginSuccess = true
    } else {
      this.loginFailed = true;
    }
  }


  courses: any[] = [
    { id: 1, name: "TypeScript" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Node JS" },
    { id: 1, name: "TypeScript" }
  ];

  choices : string[] = [
    "red","blue","orange","green","black","white"
  ];

  choice!:string;

  colorName = 'green';
  fontWeight = 'bold';
  border =  '2px solid blue';


  isBorder = true;
  isStyle = true;

  buttonColor = 'green';

  sortoption: string = "";
  productsList = [
    { productName: "Samsung J7", price: 18000 },
    { productName: "Apple iPhone 6S", price: 60000 },
    { productName: "Lenovo K5 Note", price: 10000 },
    { productName: "Nokia 6", price: 15000 },
    { productName: "Vivo V5 Plus", price: 26000 }
  ];
  
}
