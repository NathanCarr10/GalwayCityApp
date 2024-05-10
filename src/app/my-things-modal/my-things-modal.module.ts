import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyThingsModalPageRoutingModule } from './my-things-modal-routing.module';

import { MyThingsModalPage } from './my-things-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyThingsModalPageRoutingModule
  ],
  declarations: [MyThingsModalPage]
})
export class MyThingsModalPageModule {}
