import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseTemplateComponent } from './base-template/base-template.component'

const routes: Routes = [
  { path: '', component: BaseTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
