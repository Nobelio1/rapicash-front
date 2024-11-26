import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/lading-page/lading-page.component').then(m => m.LadingPageComponent)
  },
  {
    path: 'brc',
    loadChildren: () => import('./pages/home/home.routes')
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes')
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }

];
