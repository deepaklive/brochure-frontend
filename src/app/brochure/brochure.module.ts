import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrochureMainComponent } from './brochure-main/brochure-main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { DemoMaterialModule } from '../demo-material-module';
import { DashboardRoutes } from './brochure.routing';
import { CandidateListComponent } from './candidates/candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from './candidates/candidate-details/candidate-details.component';
import { ImageSliderComponent } from './common/image-slider/image-slider.component';
import { EditBrochureComponent } from './edit-brochure/edit-brochure/edit-brochure.component';
import { EditInstituteComponent } from './edit-brochure/edit-institute/edit-institute.component';
import { EditCandidateComponent } from './edit-brochure/edit-candidate/edit-candidate.component';
import { EditCompetenciesComponent } from './edit-brochure/edit-competencies/edit-competencies.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CandidateService } from '../_services/candidate.service';
import { ResumeComponent } from './resume/resume.component';
import { TriServicesComponent } from './common/tri-services/tri-services.component';
import { BrochureComponent } from './brochure.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CandidateDataentryComponent } from './candidates/candidate-dataentry/candidate-dataentry.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BrochureMainComponent,
    CandidateListComponent,
    CandidateDetailsComponent,
    ImageSliderComponent,
    EditBrochureComponent,
    EditInstituteComponent,
    EditCandidateComponent,
    EditCompetenciesComponent,
    ResumeComponent,
    TriServicesComponent,
    BrochureComponent,
    CandidateDataentryComponent,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ChartistModule,
    NgImageSliderModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  providers:[
    
  ]
})
export class BrochureModule { }
