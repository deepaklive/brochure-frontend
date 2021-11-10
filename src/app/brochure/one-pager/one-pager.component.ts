import { Component, OnInit } from '@angular/core';
import { CandidateModel } from 'src/app/_models/candidate.model';
import { CandidateService } from 'src/app/_services/candidate.service';

@Component({
  selector: 'app-one-pager',
  templateUrl: './one-pager.component.html',
  styleUrls: ['./one-pager.component.css']
})
export class OnePagerComponent implements OnInit {

  candidate!: CandidateModel;
  isLoading=false;

  constructor(
    private candidateService: CandidateService
  ) { }

  ngOnInit(): void {
    this.getCandidates('afp25deepak_k%40mdi.ac.in');
  }

  getCandidates(email: string) {
    this.isLoading = true;
    this.candidateService.getbySearch('candidateId',email)
    .subscribe(
      (res) => {
        const temp: CandidateModel[] =<CandidateModel[]>res;
        this.candidate = temp[0];;
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
