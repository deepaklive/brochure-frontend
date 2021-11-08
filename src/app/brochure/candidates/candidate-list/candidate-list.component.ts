import { Component, OnInit } from '@angular/core';
import { CandidateModel } from 'src/app/_models/candidate.model';
import { CandidateService } from 'src/app/_services/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: CandidateModel[]=[];
  isLoading=false;

  constructor(
    private candidateService: CandidateService
  ) { }

  ngOnInit(): void {
    this.getallCandidates();
  }

  getallCandidates() {
    this.isLoading = true;
    this.candidateService.getAll().subscribe(
      (res) => {
        this.candidates = <CandidateModel[]>res;
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
