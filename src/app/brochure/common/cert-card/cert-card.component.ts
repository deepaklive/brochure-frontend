import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateModel } from 'src/app/_models/candidate.model';
import { CertificationModel } from 'src/app/_models/certification.model';
import { CandidateCertificateComponent } from '../../candidates/candidate-certificate/candidate-certificate.component';

@Component({
  selector: 'app-cert-card',
  templateUrl: './cert-card.component.html',
  styleUrls: ['./cert-card.component.css']
})
export class CertCardComponent implements OnInit {
@Input() certifications!:CertificationModel;
@Input() candidate !: CandidateModel;

@Output() certificateUpdated = new EventEmitter();

  constructor(
    private dialog : MatDialog,
  ) { }

  ngOnInit(): void {
  }
  onAddCertificate(){
    this.dialog.open(CandidateCertificateComponent, {
      width : '60%',
      height : '50%',
      data : {
        candidate : this.candidate,
        certifications : this.certifications,
        operation : 'add',
      }
    }).afterClosed().subscribe(res=>{
      if(res === 'success'){
        this.certificateUpdated.emit('certificate updated');
      }
    });
  }

  onUpdateCertificate(){
    this.dialog.open(CandidateCertificateComponent, {
      width : '60%',
      height : '50%',
      data : {
        candidate : this.candidate,
        certifications : this.certifications,
        operation : 'update',
      }
    }).afterClosed().subscribe(res=>{
      if(res === 'success'){
        this.certificateUpdated.emit('certificate updated');
      }
    });
  }

}
