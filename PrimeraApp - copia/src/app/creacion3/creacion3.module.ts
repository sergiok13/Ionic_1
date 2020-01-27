import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creacion3PageRoutingModule } from './creacion3-routing.module';

import { Creacion3Page } from './creacion3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creacion3PageRoutingModule
  ],
  declarations: [Creacion3Page]
})
export class Creacion3PageModule {}
