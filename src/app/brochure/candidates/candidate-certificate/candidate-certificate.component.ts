import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidateModel } from 'src/app/_models/candidate.model';
import { CertificationModel } from 'src/app/_models/certification.model';
import { CertificationService } from 'src/app/_services/certification.service';

@Component({
  selector: 'app-candidate-certificate',
  templateUrl: './candidate-certificate.component.html',
  styleUrls: ['./candidate-certificate.component.css']
})
export class CandidateCertificateComponent implements OnInit {
  certificateForm !: FormGroup;
  certificate !: CertificationModel;
  candidate !: CandidateModel; 
  operation !: string;
  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private dialogRef : MatDialogRef<CandidateCertificateComponent>,
    private certificateService : CertificationService,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.certificate = this.data.certifications[0],
    console.log(this.certificate);
    this.candidate = this.data.candidate,
    this.operation = this.data.operation,
    this.buildForm();
  }

  buildForm(){
    this.certificateForm = this.fb.group({
      certificate : [this.certificate?.certificate, [Validators.required]],
      institute : [this.certificate?.institute, [Validators.required]],
      valid_upto : [this.certificate?.valid_upto, [Validators.required]]
    });
  }

  onCancel(){
    this.dialogRef.close('nothing');
  }

  onSubmit(){
    if(this.operation === 'update'){
      this.certificate = {
        id : this.certificate.id,
        candidate : this.certificate.candidate,
        certificate: this.certificateForm.get('certificate')?.value,
        institute: this.certificateForm.get('institute')?.value,
        valid_upto: this.certificateForm.get('valid_upto')?.value,
      }
      this.certificateService.update(this.certificate).subscribe(res=>{
        if(res){
          window.alert('Certificate Information Updated Successfully.');
          this.dialogRef.close('success');
        }
      }, err=>{
        window.alert(err);
      });
    } else {
      this.certificate = {
        candidate : this.candidate?.id!,
        certificate: this.certificateForm.get('certificate')?.value,
        institute: this.certificateForm.get('institute')?.value,
        valid_upto: this.certificateForm.get('valid_upto')?.value,
      }
      this.certificateService.create(this.certificate).subscribe(res=>{
        if(res){
          window.alert('Certificate Information Added Successfully.');
          this.dialogRef.close('success');
        }
      }, err=>{
        window.alert(err);
      });
    }
   
  }

}