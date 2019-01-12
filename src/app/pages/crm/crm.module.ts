import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { CrmRoutingModule } from './crm-routing.module';
import { CrmComponent } from './crm.component';
import { ChartsModule } from 'ng2-charts';

import { CustomerComponent } from './customer/customer.component';
import { CasesDetailComponent } from './cases/cases-detail/cases-detail.component';
import { CasesListComponent } from './cases/cases-list/cases-list.component';
import { CasesComponent } from './cases/cases.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [
    CrmComponent,
    CustomerComponent,
    CasesComponent,
    CasesListComponent,
    CasesDetailComponent,
    StatisticsComponent
  ]
})
export class CrmModule { }
