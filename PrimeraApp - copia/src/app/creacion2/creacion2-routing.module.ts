import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creacion2Page } from './creacion2.page';

const routes: Routes = [
  {
    path: '',
    component: Creacion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creacion2PageRoutingModule {}
