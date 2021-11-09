import { Component, OnChanges, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  user: SocialUser;
  loggedIn: boolean;

  constructor(private socialAuthService: SocialAuthService) { }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }
  ngOnInit(): void {
    console.log('test');
    this.socialAuthService.authState.subscribe(user => {
      this.user = user;
      console.log('test2: '+this.user);
      this.loggedIn = (user != null);
    });
  }

  ngOnChanges(){
    this.socialAuthService.authState.subscribe(user => {
      this.user = user;
    });
  }


  refreshGoogleToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
