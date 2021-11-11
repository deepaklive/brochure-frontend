import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CandidateModel } from 'src/app/_models/candidate.model';
import { CandidateService } from 'src/app/_services/candidate.service';

@Component({
  selector: 'app-candidate-dataentry',
  templateUrl: './candidate-dataentry.component.html',
  styleUrls: ['./candidate-dataentry.component.css']
})
export class CandidateDataentryComponent implements OnInit {
  dataEntry : FormGroup | undefined;
  isLoading= false;
  
  selectedUserRole: any;
  constructor(
    private fb : FormBuilder,
    private dialogRef : MatDialogRef<any>,
    private candidateService: CandidateService
  ) { }
 
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.dataEntry = this.fb.group({
      id_email : ['deepak@gmail.com', [Validators.required]],
      service : ['', [Validators.required]],
      rank : ['', [Validators.required]],
      name : ['' ,[Validators.required]],
      gender : ['' ,[Validators.required]],
      phone_no : ['', [Validators.required]],
      qualification : ['',[Validators.required]],
      experience : ['', [Validators.required]],
      linkedIn : ['', [Validators.required]],
      email : ['', [Validators.required]],
      image_url : ['test', [Validators.required]],
      introduction : ['', [Validators.required]]
    });
  }

  userRole(role: any){
    this.selectedUserRole = role;
    console.log(this.selectedUserRole);
  }

  onSubmit(){
    console.log(this.dataEntry?.getRawValue());
    this.createParticipant(this.dataEntry);
  }

  onClose(){
    this.dialogRef.close('nothing');
  }
 


  
    
 

  createParticipant(obj: any) {
    this.isLoading = true;
    this.candidateService.create(obj)
    .subscribe(
      (res) => {
        // this.candidate = <CandidateModel>res;
        console.log(res);
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

}
