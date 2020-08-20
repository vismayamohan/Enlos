import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  siginin: FormGroup;
  ngOnInit(): void {
  }

  signin = new FormGroup ({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(6)])
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }

  onSubmit() {
    console.log(this.signin.value);
  }
}
