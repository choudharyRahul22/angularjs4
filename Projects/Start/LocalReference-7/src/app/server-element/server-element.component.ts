import {
  Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

 @Input() element : {type: string,name: string,content: string};

  @ViewChild('heading') header: ElementRef;
  @ContentChild('paragraph') para:ElementRef;

  constructor() {
    console.log("constructor called ");
  }

  ngOnInit() {
    console.log("ngOnInit called ");
    console.log('Text Output : ' + this.header.nativeElement.textContent);
    console.log('Paragraph Output : ' + this.para.nativeElement.textContent);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges called ");
    console.log(changes)
  }

  ngDoCheck(){
    console.log("ngDoCheck called ");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called ");
    console.log('Paragraph Output : ' + this.para.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called ");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called ");
    console.log('Text Output : ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called ");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called ");
  }



}
