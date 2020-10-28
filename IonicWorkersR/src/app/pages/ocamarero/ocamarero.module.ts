import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcamareroPageRoutingModule } from './ocamarero-routing.module';

import { OcamareroPage } from './ocamarero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcamareroPageRoutingModule
  ],
  declarations: [OcamareroPage]
})
export class OcamareroPageModule {}
