import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ae11PageRoutingModule } from './ae11-routing.module';

import { Ae11Page } from './ae11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ae11PageRoutingModule
  ],
  declarations: [Ae11Page]
})
export class Ae11PageModule {}
