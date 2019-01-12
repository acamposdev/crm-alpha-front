import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { SearchComponent } from './search.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ],
  declarations: [
    SearchComponent,
    CustomersListComponent
  ]
})
export class SearchModule { }
