# angularjs4

Angular4:
---------
CLI need NodeJs to build and manage packages... and provide local dev server for testing
https://nodejs.org/en/download/
https://cli.angular.io/ : for creating and managing angular project

NodeJs will be install before CLI.... as cli need NodeJs
Once NodeJs is install open cmd and run below command
npm install -g @angular/cli : node package manager install globally angular-cli...

Now we create a new Angular Project using CLI....Command Line Interface
Create new project.
1. Create a new dir in which you want to create angular project
2. ng new projectName : you can put dir and project name same/diff...
Above will download all require dependency...to run our first project.

Than we move to project dir
cd projectDir
ng serve : this command will build source code and run dev server (Just like Tomcat)

Folder Structure :
All files outside dir are for Project Configuration....
e2e dir for End to End Testing.
src dir conatin our code
file inside src are again for project configuration...

*.component.ts      : Controller
*.component.html    : HTML View for that Controller
*.component.css     : CSS for HTML View
*.component.spec.ts : Testing 

CLI Misses:
app.module.ts
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

imports: [
    BrowserModule,
    FormsModule
  ],

Typescript:
-----------
Type Safe , provide concept of Classes , Interfaces ...
Tyepscript compile to Javascript with the help of CLI...
In browser javascript will run

Install Bootstrap: npm install --save bootstrap

bootstrap is downloaded ....now we need to tell angular project to use bootstrap
in angular-cli.json : we will enter the bootstrap configuration

How Angular Loads Up:
---------------------
In src dir we have index.html which is staring point...
index.html contain: <app-root></app-root> 
this will look for app component 
in app dir under src dir it will find app.component.ts which has
@Component({
  selector: 'app-root', /* this is what we see in index.html */
  templateUrl: './app.component.html', /* this is what we see loaded as first page..*/
  styleUrls: ['./app.component.css']  /* this is css which is applied ...*/
})
app.component.html contain: <h1>Welcome to Angular</h1> /* this is wee see as landing page */

When cli runs it packages all the js file in a bundle..
<script type="text/javascript" src="inline.bundle.js"></script><script type="text/javascript" src="polyfills.bundle.js"></script><script type="text/javascript" src="styles.bundle.js"></script><script type="text/javascript" src="vendor.bundle.js"></script><script type="text/javascript" src="main.bundle.js"></script></body>
</html>
when we do view page source ....

so cli bundle all our code and inject as js and when html run it run bundle js file...
it runs main.ts which contain:
import { enableProdMode } from '@angular/core'; /* we can enable PROD mode from here */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);

bootstrapModule(AppModule) will look for import ..from './app/app.module' and run 
app.module.ts and app.module.ts contain: bootstrap: [AppComponent]
above line will bootstrap the AppComponent 
which is our app.component.ts ie: export class AppComponent
app.component.ts have :
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

Components: component are directive that has template,css.
-----------
resuable
Angular app is made up of components like 
header component
in body we can have left panel component and right pannel component
fotter component
each component have its own .ts for buisness, .html for view, .css for look and feel

Create a new Component:
-----------------------
<app-root> is root component (app.component.ts)
now we create our component and these component entry will goes to app.component.html

all new component will go into app dir.. 
each component should have seprate dir...
component name should be dir name easy to recognize...
create file in new component: componentName.component.ts

component is a angular class : 
export class ServerComponent{} : Server as component name, this is a normal class
to enhance this class we attch @Component decorator now its component class
import { Component } from '@angular/core';
@Component({
	selector : 'app-server', /* using this name we can reffer to this component   */
	templateUrl : './server.component.html',
	styleUrls: ['./server.component.css']
})
export class ServerComponent{}

Now we have to register the new Server component to app.module.ts:
import { ServerComponent } from './server/server.component'; without .ts extension angular will put that for us.
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent	
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

now we can use our new server component :
in app.component.html : <app-server></app-server>

creating component using cli:
-----------------------------
ng g c componentName : g for genrate and c for component

diff between template and templateUrl: always use external
template is in line html and templateUrl is html which we reffer
same styles is inline and stylesUrls is reffer to external css file
inline applied between inline and external

use emmet : app-server press tab for component
for css : .container press tab

selectors : 
-----------
selector: 'app-servers'  is for element selector  <app-servers></app-servers>
selector: '[app-servers]' is for attribute selector like  <h2 app-servers></h2>
selector: '.app-servers' is for css class attribute like  <h2 class="app-servers"></h2>

Databinding:
-----------
communication between Typescript Code and Html Template

property binding: for html element and directives : [property] = "expression" using []
<button class="btn btn-primary" [disabled]="!allowNewServer">Add Server</button>
allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

String Interpolation : {{}} 

Event Binding: using ()
-----------------------
<button class="btn btn-primary" [disabled]="!allowNewServer" (click)="onServercreate()">Add Server</button>
<p>{{allowNewServer}}</p>
<p [innerText]="allowNewServer"></p>
<p>{{serverCreationStatus}}</p>
<p>

serverCreationStatus = "No server created yet!"
onServercreate(){
    this.serverCreationStatus = "Server created successfully!"
  }

input event:
------------
<input type="text" class="form-control" (input)="onUpdateServer($event)">
 onUpdateServer(event:any){
    console.log(event.target.value);
    this.newServerName=event.target.value;
  }

2 Way Data Binding:
-------------------
[(ngModel)]="propertyName"

<input type="text" class="form-control" (input)="onUpdateServer($event)" [(ngModel)]="newServerName">
<p>{{newServerName}}</p>

newServerName='Default';
onUpdateServer(event:any){
    console.log(event.target.value);
    this.newServerName=event.target.value;
  }
Important: For Two-Way-Binding to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms';

Directives:
-----------
Instruction to DOM

<p *ngIf="!serverAdded">No Server Created</p>
<p *ngIf="serverAdded">{{serverCreationStatus}}</p>
<p [ngStyle]="{background:getColor()}" [ngClass]='{online: serverStatus === "online"}'>
  {{'Server'}} with ID {{serverId}} is {{getServerStatus()}}

ng-for:
-------
<p *ngFor="let server of servers; let i=index">{{server}} {{i}}</p>
servers = ['Server1','Server2'];
on update
this.servers.push(this.newServerName);

Shortcut:
---------
export class Recipe{

  public name:string;
  public description:string;
  public imagePath:string;

  constructor(name:string , desc:string, imagePath:string){
    this.name=name;
    this.description=desc;
    this.imagePath=imagePath;
  }

}

can also do like :
export class Recipe{
  constructor(public name:string ,public desc:string,public imagePath:string){
  }

}

Debug:
------
Developer Tool : Source : Webpack : . src .....typescript put debug point and see.
augury chrome extension ....for debug

Service:
--------
create service : ng generate service myservicename or ng g s service name

We need to communicate between the components...
updateStatus = new EventEmitter<string>();
Component A : 
onSetTo(status: string) {
    this.accountsService.updateAccount(this.id,status);
    this.accountsService.updateStatus.emit(status);
  }
Component B:
constructor(private loggingService:LoggingService, private accountsService:AccountsService){
    this.accountsService.updateStatus.subscribe(
      (status:string) => alert("Updated " + status)
    );
  }

Routing :
---------
relative path : current we are on localhost:4200/servers
on servers component we have a link with routeLink="servers"
now once we click on this link the relative path will be
pagePath/path_we_just_click = localhost:4200/servers/servers

Absolute path : current we are on localhost:4200/servers
on servers component we have a link with routeLink="/servers"
now once we click on this link the absolute path will be
/path_we_just_click = localhost:4200/servers

routeLink work with reletive path (knows on which page it is) and 
this.router.navigate(['/servers']); dont know the reletive path and  
this.router.navigate(['servers']); these 2 will work same ....
always look for root/srevers : /servers to overcome this we have below
this.router.navigate(['/servers'],{relativeTo: this.route});
 
Subscription:
-------------
If we are on the same component and we do : <a [routerLink]="['/users',12,'Ravi']"> Load Ravi (12) </a>
than we wont get the updated value .....
i need to subscribe to param 
this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );

and angular will unsubscribe this as when again this component will be loaded our
subscription will fetch from memory which still persists.....
to manually unsubscribe 
private paramSubscription : Subscription;
ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }

query parameter:
----------------
onLoadServers(id: number){
    this.router.navigate(['/servers', id, 'edit'],{queryParams: {allowEdit: '1'},fragment: 'loading'});
  }

create module :
---------------
ng g m app-routing



