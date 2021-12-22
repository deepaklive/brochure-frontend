import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatCardModule } from '@angular/material/card';
import { DemoMaterialModule } from '../demo-material-module';


@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    DemoMaterialModule
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    FlexLayoutModule,
    // MatCardModule,
    DemoMaterialModule
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }



