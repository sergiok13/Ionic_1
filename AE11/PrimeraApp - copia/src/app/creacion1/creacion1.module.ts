import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creacion1PageRoutingModule } from './creacion1-routing.module';

import { Creacion1Page } from './creacion1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creacion1PageRoutingModule
  ],
  declarations: [Creacion1Page]
})
export class Creacion1PageModule {}
