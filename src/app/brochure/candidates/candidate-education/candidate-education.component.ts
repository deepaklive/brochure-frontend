import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidateModel } from 'src/app/_models/candidate.model';
import { EducationModel } from 'src/app/_models/education.model';
import { EducationService } from 'src/app/_services/education.service';

@Component({
  selector: 'app-candidate-education',
  templateUrl: './candidate-education.component.html',
  styleUrls: ['./candidate-education.component.css']
})
export class CandidateEducationComponent implements OnInit {
  educationForm !: FormGroup;
  education !: EducationModel;
  candidate !: CandidateModel; 
  operation !: string;
  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private dialogRef : MatDialogRef<CandidateEducationComponent>,
    private educationService : EducationService,
  ) { }

  ngOnInit(): void {
    this.education = this.data.education,
    this.candidate = this.data.candidate,
    this.operation = this.data.operation,
    this.buildForm();
  }

  buildForm(){
    this.educationForm = this.fb.group({
      qualification : [this.education?.qualification, [Validators.required]],
      institute : [this.education?.institute, [Validators.required]],
      year : [this.education?.year, [Validators.required]]
    });
  }

  onCancel(){
    this.dialogRef.close('nothing');
  }

  onSubmit(){
    if(this.operation === 'update'){
      this.education = {
        id : this.education.id,
        candidate : this.education.candidate,
        qualification: this.educationForm.get('qualification')?.value,
        institute: this.educationForm.get('institute')?.value,
        year: this.educationForm.get('year')?.value,
      }
      this.educationService.update(this.education).subscribe(res=>{
        if(res){
          window.alert('Education Information Updated Successfully.');
          this.dialogRef.close('success');
        }
      }, err=>{
        window.alert(err);
      });
    } else {
      this.education = {
        candidate : this.candidate?.id!,
        qualification: this.educationForm.get('qualification')?.value,
        institute: this.educationForm.get('institute')?.value,
        year: this.educationForm.get('year')?.value,
      }
      this.educationService.create(this.education).subscribe(res=>{
        if(res){
          window.alert('Education Information Added Successfully.');
          this.dialogRef.close('success');
        }
      }, err=>{
        window.alert(err);
      });
    }
   
  }

}
