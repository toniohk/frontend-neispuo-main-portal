import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginPage } from './pages/login/login.page';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule, FormsModule, ReactiveFormsModule]
})
export class AuthenticationModule {}
