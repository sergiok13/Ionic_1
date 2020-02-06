import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creacion3Page } from './creacion3.page';

const routes: Routes = [
  {
    path: '',
    component: Creacion3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creacion3PageRoutingModule {}
