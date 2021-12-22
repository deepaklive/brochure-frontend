import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SharedModule } from '../shared/shared.module';
import { SecureRoutes } from "./secure.routing";
import { RouterModule } from "@angular/router";
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SecureRoutes),
  ]
})
export class SecureModule { }
