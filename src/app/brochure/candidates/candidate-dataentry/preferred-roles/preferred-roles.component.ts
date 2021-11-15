import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CandidateModel } from 'src/app/_models/candidate.model';
import { CandidateService } from 'src/app/_services/candidate.service';

@Component({
  selector: 'app-preferred-roles',
  templateUrl: './preferred-roles.component.html',
  styleUrls: ['./preferred-roles.component.css']
})
export class PreferredRolesComponent implements OnInit {
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

  roleObj : any;
  
  @Output() userRole = new EventEmitter();

  constructor(
    private candidateService : CandidateService,
  ) { }

  ngOnInit(): void {
    this.createObj();
  }
  createObj(){
    this.candidate = {
      id : this.candidate.id,
      name: this.candidate.name,
      rank: this.candidate.rank,
      service: this.candidate.service,
      experience: this.candidate.experience,
      qualification: this.candidate.qualification,
      gender: this.candidate.gender,
      phone_no: this.candidate.phone_no,
      email: this.candidate.email,
      linkedIn: this.candidate.linkedIn,
      introduction: this.candidate.introduction,

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
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onScm(){
    this.scm_role = !this.scm_role;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onOperation(){
    this.operation_role = !this.operation_role;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onProject(){
    this.project_role = !this.project_role;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onSecurity(){
    this.security_role = !this.security_role;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onAdmin(){
    this.admin_role = !this.admin_role;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onIt(){
    this.it_role = !this.it_role;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onAviation(){
    this.aviation_role = !this.aviation_role;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onHospitalAdmin(){
    this.hospital_admin = !this.hospital_admin;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onQaQc(){
    this.qc_qa = !this.qc_qa;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onFinance(){
    this.finance = !this.finance;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onEducation(){
    this.education_org = !this.education_org;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onStrategy(){
    this.strategy = !this.strategy;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onTechnical(){
    this.technical_writing = !this.technical_writing;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onBlockChain(){
    this.block_chain = !this.block_chain;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }
  onLegal(){
    this.legal_compliance = !this.legal_compliance;
    this.createObj();
    this.userRole.emit(this.roleObj);
  }


  onSubmit(){
    this.candidateService.patch(this.candidate).subscribe(res=>{
      console.log(res);
    })
  }
}
