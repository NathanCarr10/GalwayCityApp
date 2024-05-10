import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThingstodoPage } from './thingstodo.page';

const routes: Routes = [
  {
    path: '',
    component: ThingstodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThingstodoPageRoutingModule {}
