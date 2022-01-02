import { Component } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
// import { StaticDataService } from 'src/app/_services/static.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
constructor(
  private socialauth : SocialAuthService,
  private authService : AuthService
){}

logout(){
  this.socialauth.signOut();
  this.authService.logout();
}

}
