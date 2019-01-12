import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../services/customers.service';
import { HttpClientModule } from '@angular/common/http';
import { CasesService } from '../services/cases.service';
import { PopupMessageComponent } from '../components/popup-message/popup-message.component';
import { PopupMessageService } from '../components/popup-message/popup-message.service';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    SidebarComponent,
    PopupMessageComponent,
    DataTableComponent
  ],
  exports: [
    SidebarComponent,
    PopupMessageComponent,
    DataTableComponent
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        CustomerService,
        CasesService,
        PopupMessageService
      ]
    };
  }
}
