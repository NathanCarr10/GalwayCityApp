import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyHistoryModalPageRoutingModule } from './my-history-modal-routing.module';

import { MyHistoryModalPage } from './my-history-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyHistoryModalPageRoutingModule
  ],
  declarations: [MyHistoryModalPage]
})
export class MyHistoryModalPageModule {}
