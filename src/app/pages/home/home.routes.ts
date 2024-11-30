import {Routes} from "@angular/router";
import {AuthGuard} from "../../guards/auth.guard";

const CORE_ROUTES: Routes = [

  {
    path: '',
    loadComponent: () => import('./layout/home-layout/home-layout.component'),
    children: [
      // PRESTATARIO
      {
        path: 'operations',
        loadComponent: () => import('./operations-page/operations-page.component').then(m => m.OperationsPageComponent),
        canActivate: [AuthGuard],
        data: { roles: [1] }, // Solo PRESTATARIO
      },
      {
        path: 'loan',
        loadComponent: () => import('./get-loan-page/get-loan-page.component').then(m => m.GetLoanPageComponent),
        canActivate: [AuthGuard],
        data: { roles: [1] }, // Solo PRESTATARIO
      },
      {
        path: 'borrower-requests',
        loadComponent: () => import('./borrower-requests/borrower-requests.component').then(m => m.BorrowerRequestsComponent),
        canActivate: [AuthGuard],
        data: { roles: [1] }, // Solo PRESTATARIO
      },
      {
        path: 'bSummary/:id',
        loadComponent: () => import('./borrower-summary/borrower-summary.component').then(m => m.BorrowerSummaryComponent),
        canActivate: [AuthGuard],
        data: { roles: [1] }, // Solo PRESTATARIO
      },
      {
        path: 'notifications',
        loadComponent: () => import('./notifications/notifications.component').then(m => m.NotificationsComponent),
        canActivate: [AuthGuard],
        data: { roles: [1] }, // Solo PRESTATARIO
      },
      {
        path: 'pay',
        loadComponent: () => import('./pay/pay.component').then(m => m.PayComponent),
        canActivate: [AuthGuard],
        data: { roles: [1] }, // Solo PRESTATARIO
      },
      // ANALISTA FINANCIERO
      {
        path: 'financial-requests',
        loadComponent: () => import('./financial-requests/financial-requests.component').then(m => m.FinancialRequestsComponent),
        canActivate: [AuthGuard],
        data: { roles: [2] }, // Solo ANALISTA FINANCIERO
      },
      {
        path: 'fSummary/:id',
        loadComponent: () => import('./financial-summary/financial-summary.component').then(m => m.FinancialSummaryComponent),
        canActivate: [AuthGuard],
        data: { roles: [2] }, // Solo ANALISTA FINANCIERO
      },
      // ANALISTA CREDITO
      {
        path: 'credit-requests',
        loadComponent: () => import('./credit-requests/credit-requests.component').then(m => m.CreditRequestsComponent),
        canActivate: [AuthGuard],
        data: { roles: [3] }, // Solo ANALISTA CREDITO
      },
      {
        path: 'cSummary/:id',
        loadComponent: () => import('./credit-summary/credit-summary.component').then(m => m.CreditSummaryComponent),
        canActivate: [AuthGuard],
        data: { roles: [3] }, // Solo ANALISTA CREDITO
      },
      // OFICIAL DE CREDITO
      {
        path: 'oficial-requests',
        loadComponent: () => import('./oficial-requests/oficial-requests.component').then(m => m.OficialRequestsComponent),
        canActivate: [AuthGuard],
        data: { roles: [4] }, // Solo OFICIAL DE CREDITO
      },
      {
        path: 'oSummary/:id',
        loadComponent: () => import('./oficial-summary/oficial-summary.component').then(m => m.OficialSummaryComponent),
        canActivate: [AuthGuard],
        data: { roles: [4] }, // Solo OFICIAL DE CREDITO
      },
      {
        path: 'loan-history',
        loadComponent: () => import('./loan-history/loan-history.component').then(m => m.LoanHistoryComponent),
        canActivate: [AuthGuard],
        data: { roles: [1,4] }, // Solo OFICIAL DE CREDITO
      },
      {
        path: 'lSummary/:id',
        loadComponent: () => import('./loan-summary/loan-summary.component').then(m => m.LoanSummaryComponent),
        canActivate: [AuthGuard],
        data: { roles: [1,4] }, // Solo OFICIAL DE CREDITO
      },
      // REDIRECCION
      {
        path: '',
        redirectTo: 'operations',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },

];

export default CORE_ROUTES;
