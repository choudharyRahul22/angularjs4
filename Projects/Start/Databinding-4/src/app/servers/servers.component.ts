import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created yet!";
  newServerName='Default';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  serverId:number=10;
  serverStatus:string="Online";

  getServerStatus(){
    return this.serverStatus;
  }

  onServercreate(){
    this.serverCreationStatus = "Server created successfully!"
  }

  onUpdateServer(event:any){
    console.log(event.target.value);
    this.newServerName=event.target.value;
  }
}
