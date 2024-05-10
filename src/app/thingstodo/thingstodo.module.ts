import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThingstodoPageRoutingModule } from './thingstodo-routing.module';

import { ThingstodoPage } from './thingstodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThingstodoPageRoutingModule
  ],
  declarations: [ThingstodoPage]
})
export class ThingstodoPageModule {}
