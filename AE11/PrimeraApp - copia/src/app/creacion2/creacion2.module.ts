import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creacion2PageRoutingModule } from './creacion2-routing.module';

import { Creacion2Page } from './creacion2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creacion2PageRoutingModule
  ],
  declarations: [Creacion2Page]
})
export class Creacion2PageModule {}
