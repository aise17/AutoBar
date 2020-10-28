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
        path: 'support',
        children: [
          {
            path: '',
            loadChildren: () => import('../support/support.module').then(m => m.SupportPageModule)
          }
          
        ]
      },
      {
        path: 'inicio',
        children: [
          {
            path: '',
            loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
          }
          
        ]
      },
      {
        path: 'carta/:mesaId',
        children: [
          {
            path: '',
            loadChildren: () => import('../carta/carta.module').then(m => m.CartaPageModule)
          }
          
        ]
      },
      {
        path: 'carta/:queryParams',
        children: [
          {
            path: '',
            loadChildren: () => import('../carta/carta.module').then(m => m.CartaPageModule)
          }
          
        ]
      },
      {
        path: 'carta',
        children: [
          {
            path: '',
            loadChildren: () => import('../carta/carta.module').then(m => m.CartaPageModule)
          }
          
        ]
      },
      {
        path: 'direcciones',
        children: [
          {
            path: '',
            loadChildren: () => import('../direcciones/direcciones.module').then(m => m.DireccionesPageModule)
          }
          
        ]
      },
      {
        path: 'orderhistory',
        children: [
          {
            path: '',
            loadChildren: () => import('../historico-pedidos/historico-pedidos.module').then(m => m.HistoricoPedidosPageModule)
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
