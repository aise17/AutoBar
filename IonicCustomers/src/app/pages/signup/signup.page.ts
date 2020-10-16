import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserOptions } from '../../interface/user-options';
import { SecurityService } from '../../providers/security.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage  {
  signup: UserOptions = { username: '', password: '', email: '', ok: '', error: ''  };
  submitted = false;

  constructor(
    public router: Router,
    public security: SecurityService
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {

      
      this.security.registerRequest(this.signup).subscribe(res => {
        
        console.log(res);

        this.security.signup(this.signup.username, this.signup.password,res['datos']['id']);
       

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
