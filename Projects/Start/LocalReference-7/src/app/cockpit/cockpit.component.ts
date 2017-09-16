import {Component, OnInit, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @ViewChild('newServerContent') newServerContent : ElementRef;

  @Output() onServerCreate = new EventEmitter<{name:string,content:string}>();
  @Output() onBlueprintCreate = new EventEmitter<{name:string,content:string}>();

 /* newServerName = '';
  newServerContent = '';*/

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName) {
   this.onServerCreate.emit({
     name: newServerName.value,
     content: this.newServerContent.nativeElement.value
   });
  }

  onAddBlueprint(newServerName) {
    this.onBlueprintCreate.emit({
      name: newServerName.value,
      content: this.newServerContent.nativeElement.value
    });
  }

}
