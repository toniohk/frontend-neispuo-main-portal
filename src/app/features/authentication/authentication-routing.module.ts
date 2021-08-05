import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginPage
  //       // canActivate: [NoAuthGuard]
  //     }
  //   ]
  // }
  { path: 'login', component: LoginPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
