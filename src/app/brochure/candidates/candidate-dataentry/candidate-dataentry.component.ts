import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  candidateData : CandidateModel | undefined;
  selectedUserRole: any;
  constructor(
    private fb : FormBuilder,
    private dialogRef : MatDialogRef<any>,
    private candidateService: CandidateService,
    @Inject(MAT_DIALOG_DATA) public candidate : CandidateModel,
  ) { }
 
  ngOnInit(): void {
    console.log(this.candidate);
    this.buildForm();
  }

  buildForm(){
    this.dataEntry = this.fb.group({
      id_email : ['deepak@gmail.com', [Validators.required]],
      service : [this.candidate?.service, [Validators.required]],
      rank : [this.candidate?.rank, [Validators.required]],
      name : [this.candidate?.name ,[Validators.required]],
      gender : [this.candidate?.gender ,[Validators.required]],
      phone_no : [this.candidate?.phone_no, [Validators.required]],
      qualification : [this.candidate?.qualification,[Validators.required]],
      experience : [this.candidate?.experience, [Validators.required]],
      linkedIn : [this.candidate?.linkedIn, [Validators.required]],
      email : [this.candidate?.email, [Validators.required]],
      image_url : ['', [Validators.required]],
      introduction : [this.candidate?.introduction, [Validators.required]]
    });
  }

  userRole(role: any){
    this.selectedUserRole = role;
    console.log(this.selectedUserRole);
  }

  onSubmit(){
    this.candidateData = {
      id: this.candidate ? this.candidate.id : 0,
      id_email : this.dataEntry?.get('id_email')?.value,
      service : this.dataEntry?.get('service')?.value,
      rank : this.dataEntry?.get('rank')?.value,
      name : this.dataEntry?.get('name')?.value,
      gender : this.dataEntry?.get('gender')?.value,
      phone_no : this.dataEntry?.get('phone_no')?.value,
      qualification : this.dataEntry?.get('qualification')?.value,
      experience : this.dataEntry?.get('experience')?.value,
      linkedIn : this.dataEntry?.get('linkedIn')?.value,
      email : this.dataEntry?.get('email')?.value,
      introduction : this.dataEntry?.get('introduction')?.value,
    }
    console.log(this.candidateData);
    if(this.candidate.id){
      this.updateParticipant(this.candidateData);
    } else {
      this.createParticipant(this.candidateData);
    }
  }

  onClose(){
    this.dialogRef.close('nothing');
  }

  createParticipant(obj: CandidateModel) {
    console.log(obj);
    this.isLoading = true;
    this.candidateService.create(obj)
    .subscribe(
      (res) => {
        window.alert('Record Updated Successfully !');
        this.isLoading = false;
        this.dialogRef.close('success');
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
  updateParticipant(obj: CandidateModel){
    this.isLoading = true;
    this.candidateService.patch(obj).subscribe(res=>{
      if(res){
        window.alert('Data Updated Succesfully');
        this.dialogRef.close('success');
      }
     })
  }

}
