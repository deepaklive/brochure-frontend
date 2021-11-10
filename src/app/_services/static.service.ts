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

  //private tempUser= new BehaviorSubject<SocialUser>(this.user);
  //loggedInUser  = this.tempUser.asObservable();

  private tempLoggedIn= new BehaviorSubject<boolean>(this.loggedIn);
  isLoggedIn  = this.tempLoggedIn.asObservable();

  constructor(http: HttpClient) {}

  //updateUser(newUser: SocialUser){
  //  this.tempUser.next(newUser);
 // }

  updateLoggedInStatus(newState: boolean){
    this.tempLoggedIn.next(newState);
  }

}
