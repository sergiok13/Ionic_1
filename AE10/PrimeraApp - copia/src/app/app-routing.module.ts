import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ae11', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'creacion1/:id/:Metros/:Habitaciones/:Banyos',
    loadChildren: () => import('./creacion1/creacion1.module').then( m => m.Creacion1PageModule)
  },
  {
    path: 'creacion2/:id/:Tipo_Vehiculo/:Anyo_Vehiculo/:Kilometros_Recorridos',
    loadChildren: () => import('./creacion2/creacion2.module').then( m => m.Creacion2PageModule)
  },
  {
    path: 'creacion3/:id/:Estado_Producto',
    loadChildren: () => import('./creacion3/creacion3.module').then( m => m.Creacion3PageModule)
  },
  {
    path: 'ae11',
    loadChildren: () => import('./ae11/ae11.module').then( m => m.Ae11PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
