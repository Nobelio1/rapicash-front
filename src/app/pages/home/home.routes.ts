import {Routes} from "@angular/router";

const CORE_ROUTES: Routes = [

  {
    path: '',
    loadComponent: () => import('./layout/home-layout/home-layout.component'),
    children: [
      //PRESTATARIO
      {
        path: 'operations',
        loadComponent: () => import('./operations-page/operations-page.component').then(m => m.OperationsPageComponent)
      },
      {
        path: 'loan',
        loadComponent: () => import('./get-loan-page/get-loan-page.component').then(m => m.GetLoanPageComponent)
      },
      {
        path: 'borrower-requests',
        loadComponent: () => import('./borrower-requests/borrower-requests.component').then(m => m.BorrowerRequestsComponent)
      },
      {
        path: 'bSummary/:id',
        loadComponent: () => import('./borrower-summary/borrower-summary.component').then(m => m.BorrowerSummaryComponent)
      },
      {
        path: 'notifications',
        loadComponent: () => import('./notifications/notifications.component').then(m => m.NotificationsComponent)
      },
      {
        path: 'pay',
        loadComponent: () => import('./pay/pay.component').then(m => m.PayComponent)
      },
      //ANALISTA FINANCIERO
      {
        path: 'financial-requests',
        loadComponent: () => import('./financial-requests/financial-requests.component').then(m => m.FinancialRequestsComponent)
      },
      {
        path: 'fSummary/:id',
        loadComponent: () => import('./financial-summary/financial-summary.component').then(m => m.FinancialSummaryComponent)
      },
      //ANALISTA CREDITO
      {
        path: 'credit-requests',
        loadComponent: () => import('./credit-requests/credit-requests.component').then(m => m.CreditRequestsComponent)
      },
      {
        path: 'cSummary/:id',
        loadComponent: () => import('./credit-summary/credit-summary.component').then(m => m.CreditSummaryComponent)
      },
      //OFICIAL DE CREDITO
      {
        path: 'oficial-requests',
        loadComponent: () => import('./oficial-requests/oficial-requests.component').then(m => m.OficialRequestsComponent)
      },
      {
        path: 'oSummary/:id',
        loadComponent: () => import('./oficial-summary/oficial-summary.component').then(m => m.OficialSummaryComponent)
      },
      {
        path: 'loan-history',
        loadComponent: () => import('./loan-history/loan-history.component').then(m => m.LoanHistoryComponent)
      },
      {
        path: 'lSummary/:id',
        loadComponent: () => import('./loan-summary/loan-summary.component').then(m => m.LoanSummaryComponent)
      },
      //REDIRECCION
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
