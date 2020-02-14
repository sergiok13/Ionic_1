import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creacion1Page } from './creacion1.page';

const routes: Routes = [
  {
    path: '',
    component: Creacion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creacion1PageRoutingModule {}
