import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortalPageComponent } from './pages/portal-page/portal-page.component';
import { ModuloDetalleComponent } from './pages/modulo-detalle/modulo-detalle.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'portal',
    component: PortalPageComponent
  },
  {
    path: 'modulos/:slug',
    component: ModuloDetalleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
