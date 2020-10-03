import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPagePageRoutingModule } from './tabs-page-routing.module';

import { TabsPagePage } from './tabs-page.page';
import { MapaPageModule } from "../mapa/mapa.module";
import { ScannerPageModule } from "../scanner/scanner.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MapaPageModule,
    ScannerPageModule,
    TabsPagePageRoutingModule
  ],
  declarations: [TabsPagePage]
})
export class TabsPagePageModule {}
