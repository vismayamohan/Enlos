import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj:any = {};
  signin:any = {};
  email:any;
  password: any;
  hide: boolean;
  constructor(public router: Router) { }
  
  ngOnInit(): void {
    this.signin.hide = true;
    this.loginObj.email = '';
    this.loginObj.password = '';
  }

  onSubmit(ngForm) {
    if(ngForm.form.value) {
      if(this.loginObj.password == '') {
        this.password = true;
      }
      if(this.loginObj.email == '') {
        this.email = true;
      }else{
        console.log(this.loginObj);
        this.router.navigateByUrl('/dashboard');
      } 
    }
  }
}
