import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appElse]'
})
export class ElseDirective {

  @Input() set appElse(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.vcRef.clear();
    }
  }



  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
