import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



import { UserOptions } from '../../interface/user-options';
import { SecurityService } from '../../providers/security.service';
import { MenuController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: UserOptions = { username: '', password: '', email: '' };
  submitted = false;

  constructor(
    public router: Router,
    public security: SecurityService,
    private toastCtrl: ToastController,
    public menu: MenuController
  ) { }

  ngOnInit(){
    this.menu.enable(false);
  }

   async onLogin(form: NgForm) {
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

      const toast = await this.toastCtrl.create({
        message: 'Login successful!',
        color: 'success',
        position: 'bottom',
        duration: 3000,
      });

      await toast.present();

      
      this.router.navigateByUrl('/tutorial');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

}
