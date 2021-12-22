import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform :  FormGroup;
  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadform();
  }

  loadform() {
    this.signupform = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeat_password: ['', [Validators.required, Validators.minLength(8)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', [Validators.required]],
    });
  }

  signup(){
    this.authservice.create(this.signupform.value).subscribe( res => {
      if (res){
        this.router.navigate(['login']);
      }
      else {
        alert("Sorry, Something went wromg, please try again");
        this.router.navigate(['login']);
      }
    })
  }

  onGenderSelcet(value:string){

  }

}
