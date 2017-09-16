import {Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor : string = 'yellow';
  @Input() highlightColor : string = 'green';

  @HostBinding('style.backgroundColor') backgroundColor:string = 'yellow';

  constructor(private elementRef:ElementRef, private render:Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
  }

  @HostListener('mouseenter') mouseEnter(eventData:Event){
    //this.render.setStyle(this.elementRef.nativeElement,'backgroundColor','green');
    //this.backgroundColor = 'green';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData:Event){
    //this.render.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
    //this.backgroundColor = 'yellow';
    this.backgroundColor = this.defaultColor;
  }
}
