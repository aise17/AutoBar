import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { Security } from '../../providers/security';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '', email: '' };
  submitted = false;

  constructor(
    public router: Router,
    public security: Security
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {

      
      this.security.registerRequest(this.signup).subscribe(res => {
        
        console.log(res);

        this.security.signup(this.signup.username, this.signup.password);
       

        this.security.loginRequest(this.signup).subscribe(res => {
          console.log(res['datos']['username']);

          this.security.tokenRequest(this.signup.username, this.signup.password).subscribe(res => {
            console.log('Respuesta de Token ->'  + res);
            this.security.setToken(res['access_token']);
            this.router.navigateByUrl('/app/tabs/schedule');
          });
        });
      });


    }
  }
}
