import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ae11Page } from './ae11.page';

const routes: Routes = [
  {
    path: '',
    component: Ae11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ae11PageRoutingModule {}
