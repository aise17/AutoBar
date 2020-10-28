import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'ocamarero',
    pathMatch: 'full'
  },
  {
    path: 'ocamarero',
    loadChildren: () => import('./pages/ocamarero/ocamarero.module').then( m => m.OcamareroPageModule)
  },
  {
    path: 'carta',
    loadChildren: () => import('./pages/carta/carta.module').then( m => m.CartaPageModule)
  },
  {
    path: 'productsoforder',
    loadChildren: () => import('./pages/productsoforder/productsoforder.module').then( m => m.ProductsoforderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
