import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor(private elementRef:ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor = 'black';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.fontFamily = 'cursive';
    this.elementRef.nativeElement.style.width = '100px';
    this.elementRef.nativeElement.style.height = '30px';
  }

  @Input() buttonColor!: string;
  
  @HostListener('click') onClick(){
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
    this.elementRef.nativeElement.style.fontFamily = 'italic';
    this.elementRef.nativeElement.style.width = '120px';
    this.elementRef.nativeElement.style.height = '40px';
  }

  @HostListener('mouseenter') onMouseOver(){
    this.elementRef.nativeElement.style.color = 'red'
    this.elementRef.nativeElement.style.backgroundColor = this.buttonColor;
    this.elementRef.nativeElement.style.fontFamily = 'arial';
    this.elementRef.nativeElement.style.width = '120px';
    this.elementRef.nativeElement.style.height = '40px';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor = 'black';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.fontFamily = 'cursive';
    this.elementRef.nativeElement.style.width = '100px';
    this.elementRef.nativeElement.style.height = '30px';
  }

}
