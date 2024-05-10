import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySportsModalPageRoutingModule } from './my-sports-modal-routing.module';

import { MySportsModalPage } from './my-sports-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySportsModalPageRoutingModule
  ],
  declarations: [MySportsModalPage]
})
export class MySportsModalPageModule {}
