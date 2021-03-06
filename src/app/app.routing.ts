import { Routes } from '@angular/router';
// import { } from '../app/secure/secure.routing'
import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/brochure',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: 
        () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: '',
        loadChildren: 
        () => import('./brochure/brochure.module').then(m => m.BrochureModule)
      },
      {
        path: '',
        loadChildren: 
        () => import('./secure/secure.module').then(m => m.SecureModule)
      }
    ]
  }
];
