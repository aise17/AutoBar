import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsoforderPageRoutingModule } from './productsoforder-routing.module';

import { ProductsoforderPage } from './productsoforder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsoforderPageRoutingModule
  ],
  declarations: [ProductsoforderPage]
})
export class ProductsoforderPageModule {}
