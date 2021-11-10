import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateModel } from '../_models/candidate.model';
import { CandidateDataentryComponent } from './candidates/candidate-dataentry/candidate-dataentry.component';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.css']
})
export class BrochureComponent implements OnInit {
  profileData : CandidateModel = {
    course: 'Management',
    name: 'shri ram',
    rank: 'cpl',
    service: 'iaf',
    experience: 'development',
    qualification: 'msc',
    gender: 'Male',
    phone_no: '9801279214',
    email: 'shriram@gmail.com',
    linkedIn: 'linkked@link.in',
    introduction: 'hard worker !',
    //image_url: ,
  }
  constructor(
    private dialog : MatDialog,
  ) { }

  ngOnInit(): void {
    console.log(this.profileData);
  }

  onOpenCandidateDetails(){
    this.dialog.open(CandidateDataentryComponent, {
      width : '80%',
      height : '80%',
    });
  }

}
