import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { AuthenticationModule } from '@authentication/authentication.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    SharedModule,
    AppRoutingModule,
    NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
