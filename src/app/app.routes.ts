import { Routes } from '@angular/router';
// 1. Importar el HomeComponent
import { HomeComponent } from './features/home/home';
// Importamos el page de oferta educativa
import { OfertaEducativaComponent } from './features/oferta-educativa/oferta-educativa';

export const routes: Routes = [
  {
    path: '', 
    component: HomeComponent // 2. Indicar que el home se muestre en la ruta raíz
  },
  {
    path: 'oferta-educativa',
    component: OfertaEducativaComponent
  },
  {
    path: '**', 
    redirectTo: '' // 3. Cualquier ruta desconocida regresará al inicio, esto esta epico
  }
];