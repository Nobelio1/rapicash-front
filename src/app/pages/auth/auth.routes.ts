import {Routes} from "@angular/router";

const AUTH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/auth-layout/auth-layout.component'),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login-page/login-page.component').then(m => m.LoginPageComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./register-page/register-page.component').then(m => m.RegisterPageComponent)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
]

export default AUTH_ROUTES;
