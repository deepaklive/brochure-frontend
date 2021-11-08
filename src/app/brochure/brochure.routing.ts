import { Routes } from "@angular/router";
import { BrochureMainComponent } from "./brochure-main/brochure-main.component";
import { EditBrochureComponent } from "./edit-brochure/edit-brochure/edit-brochure.component";

export const DashboardRoutes: Routes = [
  {
    path: "",
    component: BrochureMainComponent,
  },

  {
    path: "edit-main",
    component: EditBrochureComponent,
  },
];
