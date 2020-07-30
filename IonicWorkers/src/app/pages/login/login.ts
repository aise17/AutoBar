import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { Security } from '../../providers/security';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '', email: '' };
  submitted = false;

  constructor(
    public router: Router,
    public security: Security
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    

    if (form.valid) {
      this.security.login(this.login.username, this.login.password);

      this.security.loginRequest(this.login).subscribe(res => {
        console.log(res['datos']['username']);
        this.security.tokenRequest(this.login.username, this.login.password).subscribe(res => {
          console.log('Respuesta de Token ->'  + res);
          this.security.setToken(res['access_token'])
        });
      });
      //this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
