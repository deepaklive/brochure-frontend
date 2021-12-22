import { Component, OnInit } from '@angular/core';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  // faLock = faLock;
  resetform : FormGroup;
  constructor(
    private fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.resetform = this.fb.group({
      email:['', Validators.required]
    });
  }

  onreset() {

  }
}
