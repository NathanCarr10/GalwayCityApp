import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHistoryModalPage } from './my-history-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MyHistoryModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyHistoryModalPageRoutingModule {}
