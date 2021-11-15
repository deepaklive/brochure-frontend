import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CandidateModel } from "../_models/candidate.model";
import { CandidateService } from "../_services/candidate.service";
import { CandidateDataentryComponent } from "./candidates/candidate-dataentry/candidate-dataentry.component";

@Component({
  selector: "app-brochure",
  templateUrl: "./brochure.component.html",
  styleUrls: ["./brochure.component.css"],
})
export class BrochureComponent implements OnInit {
  // candidate : CandidateModel = {
  //   course: 'Management',
  //   name: 'shri ram',
  //   rank: 'cpl',
  //   service: 'iaf',
  //   experience: 'development',
  //   qualification: 'msc',
  //   gender: 'Male',
  //   phone_no: '9801279214',
  //   email: 'shriram@gmail.com',
  //   linkedIn: 'linkked@link.in',
  //   introduction: 'hard worker !',
  //   //image_url: ,
  // }
  candidate : CandidateModel | undefined;
  isLoading = false;
  isLoadingDelete = false;
  default_email = 'afp25deepak_k%40mdi.ac.in';
  constructor(
    private dialog: MatDialog,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.getCandidates(this.default_email);
  }

  getCandidates(email: string) {
    this.isLoading = true;
    this.candidateService.getbySearch("candidateId", email).subscribe(
      (res) => {
        const temp: CandidateModel[] = <CandidateModel[]>res;
        this.candidate = temp[0];
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        window.alert(error);
        this.isLoading = false;
      });
  }

  onOpenCandidateDetails(candidate: CandidateModel) {
    this.dialog.open(CandidateDataentryComponent, {
      width: "80%",
      height: "90%",
      data : this.candidate,
    }).afterClosed().subscribe(res=>{
      if(res === 'success'){
        this.getCandidates(this.default_email);
      }
    },err=>{
      window.alert(err);
    });
  }

  onDeleteDetails(candidate : CandidateModel){
    console.log(candidate);
    var conf = confirm("Do You Want To Delete The Record ?");
    if(conf == true){
      this.isLoadingDelete = true;
      this.candidateService.delete(candidate.id).subscribe(res=>{
      if(res){
        window.alert('User Profile Data Deleted Successfully.');
        this.getCandidates(this.default_email);
      }
    },err=>{
      window.alert(err);
    });
    } else {
      window.alert('Record Not Deleted !');
    }
  }
  
}
