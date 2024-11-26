import {Routes} from "@angular/router";

const CORE_ROUTES: Routes = [

  {
    path: '',
    loadComponent: () => import('./layout/home-layout/home-layout.component'),
    children: [
      {
        path: 'operations',
        loadComponent: () => import('./operations-page/operations-page.component').then(m => m.OperationsPageComponent)
      },
      {
        path: 'operations/loan',
        loadComponent: () => import('./get-loan-page/get-loan-page.component').then(m => m.GetLoanPageComponent)
      },
      {
        path: '',
        redirectTo: 'operations',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];


export default CORE_ROUTES;
