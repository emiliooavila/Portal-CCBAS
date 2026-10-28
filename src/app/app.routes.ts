import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { OfertaEducativaComponent } from './features/oferta-educativa/oferta-educativa';
import { DepartamentosComponent } from './features/departamentos/departamentos';
import { ContactoComponent } from './features/contacto/contacto';

export const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
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
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '**', 
    redirectTo: ''
  }
];