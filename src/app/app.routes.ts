import { Routes } from '@angular/router';
// 1. Importar el HomeComponent
import { HomeComponent } from './features/home/home';
// Importamos el page de oferta educativa
import { OfertaEducativaComponent } from './features/oferta-educativa/oferta-educativa';
import { DepartamentosComponent } from './features/departamentos/departamentos';

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
    path: 'departamentos',
    component: DepartamentosComponent
  },
  {
    path: '**', 
    redirectTo: '' // 3. Cualquier ruta desconocida regresará al inicio, esto esta epico
  }
];