import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DentroChatPageRoutingModule } from './dentro-chat-routing.module';

import { DentroChatPage } from './dentro-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DentroChatPageRoutingModule
  ],
  declarations: [DentroChatPage]
})
export class DentroChatPageModule {}
