import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySportsModalPage } from './my-sports-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MySportsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySportsModalPageRoutingModule {}
