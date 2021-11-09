import { Routes } from "@angular/router";
import { BrochureMainComponent } from "./brochure-main/brochure-main.component";
import { BrochureComponent } from "./brochure.component";
import { EditBrochureComponent } from "./edit-brochure/edit-brochure/edit-brochure.component";

export const DashboardRoutes: Routes = [
  {
    path: "brochure",
    component: BrochureMainComponent,
  },
  {
    path: "edit-main",
    component: EditBrochureComponent,
  },
  {
    path: "my_profile",
    component: BrochureComponent,
  },
  {
    path: "candidate_dashboard",
    component: BrochureComponent,
  },
];
