import {Component, OnInit, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() onServerCreate = new EventEmitter<{name:string,content:string}>();
  @Output() onBlueprintCreate = new EventEmitter<{name:string,content:string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
   this.onServerCreate.emit({
     name: this.newServerName,
     content: this.newServerContent
   });
  }

  onAddBlueprint() {
    this.onBlueprintCreate.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
