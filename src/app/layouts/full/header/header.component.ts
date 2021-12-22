import { Component } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
constructor(
  private authService : AuthService
){}

logout(){
  this.authService.logout();
}

}
