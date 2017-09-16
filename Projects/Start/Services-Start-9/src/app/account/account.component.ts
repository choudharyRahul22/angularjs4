import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: string;


  constructor(private loggingService:LoggingService, private accountsService:AccountsService){}
  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id,status);
    this.accountsService.updateStatus.emit(status);
  }
}
