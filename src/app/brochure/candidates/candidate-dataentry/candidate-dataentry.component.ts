import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate-dataentry',
  templateUrl: './candidate-dataentry.component.html',
  styleUrls: ['./candidate-dataentry.component.css']
})
export class CandidateDataentryComponent implements OnInit {
  dataEntry : FormGroup | undefined;
  selectedUserRole: any;
  constructor(
    private fb : FormBuilder,
  ) { }
 
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.dataEntry = this.fb.group({
      service : ['', [Validators.required]],
      rank : ['', [Validators.required]],
      name : ['' ,[Validators.required]],
      gender : ['' ,[Validators.required]],
      phone_no : ['', [Validators.required]],
      qualification : ['',[Validators.required]],
      experience : ['', [Validators.required]],
      linkedIn : ['', [Validators.required]],
      email : ['', [Validators.required]],
      image_url : ['', [Validators.required]],
      introduction : ['', [Validators.required]]
    });
  }

  userRole(role: any){
    this.selectedUserRole = role;
    console.log(this.selectedUserRole);
  }

  onSubmit(){
    console.log(this.dataEntry?.getRawValue());
  }
 
}
