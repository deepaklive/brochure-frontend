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
  candidate!: CandidateModel;
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.getCandidates("afp25deepak_k%40mdi.ac.in");
  }

  getCandidates(email: string) {
    this.isLoading = true;
    this.candidateService.getbySearch("candidateId", email).subscribe(
      (res) => {
        const temp: CandidateModel[] = <CandidateModel[]>res;
        this.candidate = temp[0];
        console.log(res);
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  onOpenCandidateDetails() {
    this.dialog.open(CandidateDataentryComponent, {
      width: "80%",
      height: "90%",
    });
  }
}
