import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcamareroPage } from './ocamarero.page';

const routes: Routes = [
  {
    path: '',
    component: OcamareroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcamareroPageRoutingModule {}
