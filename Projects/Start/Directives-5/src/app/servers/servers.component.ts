import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "";
  newServerName='';
  serverAdded = false;
  servers = ['Server1','Server2'];

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    },2000)

    this.serverStatus = Math.random() > 0.5 ? "online":"offline";

  }

  ngOnInit() {
  }

  serverId:number=10;
  serverStatus:string="";

  getServerStatus(){
    return this.serverStatus;
  }

  onServercreate(){
    this.serverAdded = true;
    console.log(this.newServerName);
    this.servers.push(this.newServerName);
    console.log(this.servers);
    this.serverCreationStatus = "Server created successfully with name "+this.newServerName;
  }

  onUpdateServer(event:any){
    console.log(event.target.value);
    this.newServerName=event.target.value;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
