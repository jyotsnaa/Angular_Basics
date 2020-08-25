import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../loginauth.service';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: any;
  sucessMessage: any;

  constructor(private loginSerive: LoginauthService) { }

  ngOnInit() {
  }

  login(value: NgForm){
  }

  regist(data: NgForm){
    console.log("login data " );
    this.loginSerive.doRegister(data).then(res => {
      console.log(res);
      this.errorMessage = "";
      this.sucessMessage = "Your Account has been created!";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.sucessMessage = "";
    })

  }

}
