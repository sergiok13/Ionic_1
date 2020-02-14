import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentroChatPage } from './dentro-chat.page';

const routes: Routes = [
  {
    path: '',
    component: DentroChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentroChatPageRoutingModule {}
