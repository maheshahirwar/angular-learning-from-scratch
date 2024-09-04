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
}
