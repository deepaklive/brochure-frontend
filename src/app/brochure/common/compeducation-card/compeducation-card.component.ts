import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateModel } from 'src/app/_models/candidate.model';
import { EducationModel } from 'src/app/_models/education.model';
import { CandidateEducationComponent } from '../../candidates/candidate-education/candidate-education.component';

@Component({
  selector: 'app-compeducation-card',
  templateUrl: './compeducation-card.component.html',
  styleUrls: ['./compeducation-card.component.css']
})
export class CompeducationCardComponent implements OnInit {
@Input() education!: EducationModel;
@Input() candidate!: CandidateModel;
@Output() educationUpdated = new EventEmitter();
  constructor(
    private dialog : MatDialog,
  ) { }

  ngOnInit(): void {
    console.log(this.candidate);
  }

  addEducation(education: EducationModel){
    this.dialog.open(CandidateEducationComponent, {
      width : '60%',
      height : '60%',
      data: {
        candidate : this.candidate,
        operation : 'add',
      },
    }).afterClosed().subscribe(res=>{
      if(res === 'success'){
        this.educationUpdated.emit('education updated');
      }
    });
  }

  onUpdate(edu : EducationModel){
    this.dialog.open(CandidateEducationComponent, {
      width : '60%',
      height : '60%',
      data: {
        education :  edu,
        candidate : this.candidate,
        operation : 'update',
      },
    }).afterClosed().subscribe(res=>{
      if(res === 'success'){
        this.educationUpdated.emit('education updated');
      }
    });
  }

}
