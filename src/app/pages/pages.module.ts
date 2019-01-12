import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ],
  declarations: [
    SettingsComponent,
    AboutComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }
