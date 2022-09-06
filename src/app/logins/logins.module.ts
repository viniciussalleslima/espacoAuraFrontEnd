import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginsRoutingModule } from './logins-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginsRoutingModule
  ]
})
export class LoginsModule { }
