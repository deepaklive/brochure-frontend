import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateDataentryComponent } from './candidates/candidate-dataentry/candidate-dataentry.component';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.css']
})
export class BrochureComponent implements OnInit {

  constructor(
    private dialog : MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onOpenCandidateDetails(){
    this.dialog.open(CandidateDataentryComponent, {
      width : '80%',
      height : '80%',
    });
  }

}
