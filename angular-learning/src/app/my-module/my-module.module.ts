import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from '../my-component/my-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MyComponentComponent
  ]
})
export class MyModuleModule { }
