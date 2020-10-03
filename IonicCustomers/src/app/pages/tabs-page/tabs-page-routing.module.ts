import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPagePage } from './tabs-page.page';
import { MapaPage } from "../mapa/mapa.page";


const routes: Routes = [
  {
    path: 'tab',
    component: TabsPagePage,
    children: [
      {
        path: 'mapa',
        children: [
          {
            path: '',
            loadChildren: () => import('../mapa/mapa.module').then(m => m.MapaPageModule)
          }
        ]
      },
      {
        path: 'scanner',
        children: [
          {
            path: '',
            loadChildren: () => import('../scanner/scanner.module').then(m => m.ScannerPageModule)
          }
          
        ]
      },
      {
        path: '',
        redirectTo: '/tab/mapa',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPagePageRoutingModule {}
