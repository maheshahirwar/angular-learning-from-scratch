import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from '../my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { RepeatDirective } from '../repeat.directive';
import { ButtonDirective } from '../button.directive';
import { SortPipe } from '../sort.pipe';



@NgModule({
  declarations: [
    MyComponentComponent,
    RepeatDirective,
    ButtonDirective,
    SortPipe
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
