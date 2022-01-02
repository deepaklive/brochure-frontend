import { Routes } from "@angular/router";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";


export const SecureRoutes: Routes = [
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "sign-up",
    component: SignupComponent,
  },
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
