import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private loggingService:LoggingService, private accountsService:AccountsService){
    this.accountsService.updateStatus.subscribe(
      (status:string) => alert("Updated " + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
  }
}
