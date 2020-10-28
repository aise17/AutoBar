import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsoforderPage } from './productsoforder.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsoforderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsoforderPageRoutingModule {}
