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

  userName!:string;
  password!:string;

  successMessage!:string;
  submit(){
    this.successMessage = "submitted successfully!!";
  }
}
