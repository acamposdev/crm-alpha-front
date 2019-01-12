import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmComponent } from './crm.component';
import { CasesDetailComponent } from './cases/cases-detail/cases-detail.component';
import { CasesListComponent } from './cases/cases-list/cases-list.component';
import { CasesComponent } from './cases/cases.component';

const routes: Routes = [
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
