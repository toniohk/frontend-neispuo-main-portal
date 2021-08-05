import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('@authentication/authentication.module').then((m) => m.AuthenticationModule)
  // },
  {
    path: 'portal',
    data: {
      breadcrumb: 'Табло за управление'
    },
    loadChildren: () => import('@portal/portal.module').then((m) => m.PortalModule)
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
