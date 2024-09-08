import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) { }

  @Input() set appRepeat(count:number){
    for(let i=0;i<count;i++){
      this.view.createEmbeddedView(this.template);
    }
  }
}
