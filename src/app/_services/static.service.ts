import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SocialUser } from "angularx-social-login";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: "root",
})

export class StaticDataService {
  
  //user: SocialUser;
  loggedIn:boolean=false; 
  candidateId: string='';

  //private tempUser= new BehaviorSubject<SocialUser>(this.user);
  //loggedInUser  = this.tempUser.asObservable();

  private tempLoggedIn= new BehaviorSubject<boolean>(this.loggedIn);
  isLoggedIn  = this.tempLoggedIn.asObservable();

  private tempCandidateId= new BehaviorSubject<string>(this.candidateId);
  loggedInCandidateId = this.tempCandidateId.asObservable();

  constructor(http: HttpClient) {}

  //updateUser(newUser: SocialUser){
  //  this.tempUser.next(newUser);
 // }

  updateLoggedInStatus(newState: boolean){
    this.tempLoggedIn.next(newState);
  }

  updateLoggedInStatuCandidate(newCandidateId: string){
    this.tempCandidateId.next(newCandidateId);
  }



}
