import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { StaticDataService } from 'src/app/_services/static.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // faLock = faLock;
  user: SocialUser;
  loggedIn: boolean;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private auth: AuthService, 
    private router: Router,
    private socialAuthService: SocialAuthService,
    private staticDataService: StaticDataService
    ) {}

  ngOnInit(): void {

    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/brochure']);
    }

    this.socialAuthService.authState.subscribe(user => {
      this.user = user;

      // Update Static Data Service
      // this.staticDataService.updateUser(user);
      this.staticDataService.updateLoggedInStatus(true);
      
      console.log('test2: '+this.user);
      this.loggedIn = (user != null);
      this.router.navigate(['/brochure']);
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

  signInWithGoogle(): void {
    const gc =
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(gc, "##############################################")
    // localStorage.setItem('googleUserName', this.user.name);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
    this.auth.logout();
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
