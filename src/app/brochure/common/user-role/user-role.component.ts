import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  hrm_role: boolean = false;
  scm_role: boolean = false;
  operation_role: boolean = false;
  project_role: boolean = false;
  security_role: boolean = false;
  admin_role: boolean = false;
  it_role: boolean = false;
  aviation_role: boolean = false;

  roleObj : any;
  @Output() userRole = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.createObj();
  }
  createObj(){
    this.roleObj = {
      hrm_role: this.hrm_role,
      scm_role: this.scm_role,
      operation_role: this.operation_role,
      project_role: this.project_role,
      security_role: this.security_role,
      admin_role: this.admin_role,
      it_role: this.it_role,
      aviation_role: this.aviation_role,
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

}
