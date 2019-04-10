import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesDetailComponent } from './cases/cases-detail/cases-detail.component';
import { CasesComponent } from './cases/cases.component';
import { CrmComponent } from './crm.component';

const crmRoutes: Routes = [
  {
    path: '',
    component: CrmComponent,
    children: [
      {
        path: '',
        component: CasesComponent
      },
      {
        path: 'case-detail/:caseId',
        component: CasesDetailComponent
      },
      {
        path: 'case-detail/new',
        component: CasesDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crmRoutes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
