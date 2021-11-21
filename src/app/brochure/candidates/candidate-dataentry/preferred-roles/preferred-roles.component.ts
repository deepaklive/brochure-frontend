import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidateModel } from 'src/app/_models/candidate.model';
import { CandidateService } from 'src/app/_services/candidate.service';

@Component({
  selector: 'app-preferred-roles',
  templateUrl: './preferred-roles.component.html',
  styleUrls: ['./preferred-roles.component.css']
})
export class PreferredRolesComponent implements OnInit, OnChanges {

  @Input() candidate : CandidateModel | undefined;

  hrm_role: boolean = false;
  scm_role: boolean = false;
  operation_role: boolean = false;
  project_role: boolean = false;
  security_role: boolean = false;
  admin_role: boolean = false;
  it_role: boolean = false;
  aviation_role: boolean = false;
  hospital_admin: boolean = false;
  qc_qa: boolean = false;
  finance: boolean = false;
  education_org: boolean = false;
  strategy: boolean = false;
  technical_writing: boolean = false;
  block_chain : boolean = false;
  legal_compliance: boolean = false;

  candidateRole !: FormGroup;
  @Output() userRoleUpdated = new EventEmitter();
  isLoadingUpdate = false;
  constructor(
    private candidateService : CandidateService,
    private fb : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.candidateRole = this.fb.group({
      hrm_role: [this.candidate?.hrm_role],
      scm_role: [this.candidate?.scm_role],
      operation_role: [this.candidate?.operation_role],
      project_role: [this.candidate?.security_role],
      security_role: [this.candidate?.security_role],
      admin_role: [this.candidate?.admin_role],
      it_role: [this.candidate?.it_role],
      aviation_role: [this.candidate?.aviation_role],
      hospital_admin: [this.candidate?.hospital_admin],
      qc_qa: [this.candidate?.qc_qa],
      finance: [this.candidate?.finance],
      education_org: [this.candidate?.education_org],
      strategy: [this.candidate?.strategy],
      technical_writing: [this.candidate?.technical_writing],
      block_chain :[this.candidate?.block_chain],
      legal_compliance: [this.candidate?.legal_compliance],
    });
  }

  ngOnChanges(){
    if(this.candidate){
      this.buildForm();
      this.setRoleValuesAsPerCandidateModel();
    }
  }

  setRoleValuesAsPerCandidateModel(){
    this.hrm_role = this.candidate?.hrm_role ? this.candidate?.hrm_role : false,
    this.scm_role = this.candidate?.scm_role ? this.candidate?.scm_role : false,
    this.operation_role = this.candidate?.operation_role ? this.candidate?.operation_role : false,
    this.project_role = this.candidate?.project_role ? this.candidate?.project_role : false,
    this.security_role = this.candidate?.security_role ? this.candidate?.security_role : false,
    this.admin_role = this.candidate?.admin_role ? this.candidate?.admin_role : false,
    this.it_role = this.candidate?.it_role ? this.candidate?.it_role : false,
    this.aviation_role = this.candidate?.aviation_role ? this.candidate?.aviation_role : false,
    this.hospital_admin = this.candidate?.hospital_admin ? this.candidate?.hospital_admin : false,
    this.qc_qa = this.candidate?.qc_qa ? this.candidate?.qc_qa : false,
    this.finance = this.candidate?.finance ? this.candidate?.finance : false,
    this.education_org = this.candidate?.education_org ? this.candidate?.education_org : false,
    this.strategy = this.candidate?.strategy ? this.candidate?.strategy : false,
    this.technical_writing = this.candidate?.technical_writing ? this.candidate?.technical_writing : false,
    this.block_chain = this.candidate?.block_chain ? this.candidate?.block_chain : false,
    this.legal_compliance = this.candidate?.legal_compliance ? this.candidate?.legal_compliance : false
  }

  createObj(){
    this.candidate = {
      id : this.candidate?.id,
      name: this.candidate ? this.candidate?.name : 'null',
      rank: this.candidate ? this.candidate?.rank : 'null',
      service: this.candidate ? this.candidate?.service : 'null',
      experience: this.candidate ? this.candidate?.experience : 'null',
      qualification: this.candidate ? this.candidate?.qualification : 'null',
      gender: this.candidate ? this.candidate?.gender : 'null',
      phone_no: this.candidate ? this.candidate?.phone_no : 'null',
      email: this.candidate ? this.candidate?.email : 'null',
      linkedIn: this.candidate ? this.candidate?.linkedIn : 'null',
      introduction: this.candidate ? this.candidate?.introduction : 'null',

      hrm_role: this.hrm_role,
      scm_role: this.scm_role,
      operation_role: this.operation_role,
      project_role: this.project_role,
      security_role: this.security_role,
      admin_role: this.admin_role,
      it_role: this.it_role,
      aviation_role: this.aviation_role,
      hospital_admin: this.hospital_admin,
      qc_qa: this.qc_qa,
      finance: this.finance,
      education_org: this.education_org,
      strategy: this.strategy,
      technical_writing: this.technical_writing,
      block_chain : this.block_chain,
      legal_compliance: this.legal_compliance,
    }
  }


  onHrm(){
    this.hrm_role = !this.hrm_role;
  }
  onScm(){
    this.scm_role = !this.scm_role;
  }
  onOperation(){
    this.operation_role = !this.operation_role;
  }
  onProject(){
    this.project_role = !this.project_role;
  }
  onSecurity(){
    this.security_role = !this.security_role;
  }
  onAdmin(){
    this.admin_role = !this.admin_role;
  }
  onIt(){
    this.it_role = !this.it_role;
  }
  onAviation(){
    this.aviation_role = !this.aviation_role;
  }
  onHospitalAdmin(){
    this.hospital_admin = !this.hospital_admin;
  }
  onQaQc(){
    this.qc_qa = !this.qc_qa;
  }
  onFinance(){
    this.finance = !this.finance;
  }
  onEducation(){
    this.education_org = !this.education_org;
  }
  onStrategy(){
    this.strategy = !this.strategy;
  }
  onTechnical(){
    this.technical_writing = !this.technical_writing;
  }
  onBlockChain(){
    this.block_chain = !this.block_chain;
  }
  onLegal(){
    this.legal_compliance = !this.legal_compliance;
  }


  onSubmit(){
    this.isLoadingUpdate = true;
    this.createObj();
    this.candidateService.update(this.candidate).subscribe(res=>{
      if(res){
        this.userRoleUpdated.emit(true);
        this.isLoadingUpdate = false;
      }
    }, err=>{
      window.alert(err);
      this.isLoadingUpdate = false;
    });
  }
}
