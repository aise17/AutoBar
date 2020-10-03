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

  login: UserOptions = { username: '', password: '', email: '', ok: '', error: '' };
  submitted = false;

  constructor(
    public router: Router,
    public security: SecurityService,
    private toastCtrl: ToastController,
    public menu: MenuController
  ) { }

  ngOnInit(){
    //this.menu.enable(false);
  }

  ionViewWillEnter() {

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

   async onLogin(form: NgForm) {
    this.submitted = true;


    

    if (form.valid) {
      this.security.login(this.login.username, this.login.password);

      this.security.loginRequest(this.login).subscribe(async res => {
        if(res){
          if(res.ok){
            console.log(res['datos']['username']);
            const toast = this.createToast('Login Successful!', 'success');
            await (await toast).present();

            this.security.tokenRequest(this.login.username, this.login.password).subscribe(async res => {

              if(!res.error){
                const toast = this.createToast('Get token Successful!', 'success');
                await (await toast).present();
                this.security.setToken(res.access_token);
                this.router.navigateByUrl('/app/tab/scanner');

                }else{
                  const toast = this.createToast('Get token Error! ' + res.error , 'danger');
                  await (await toast).present();
                }
            });
          }else{
            const toast = this.createToast('Login Error! ' + res.error, 'danger');
            await (await toast).present();
          }
        }else{
          const toast = this.createToast('Sin Conexion', 'danger');
          await (await toast).present();
          this.router.navigateByUrl('/app/tab/scanner');
        }
      });
    }
  }

  async createToast(message: string, color: string){
    const toast = await this.toastCtrl.create({
      message: message,
      color: color,
      position: 'bottom',
      duration: 3000,
    });
    return toast
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

}
