import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';



import { UserOptions } from '../../interface/user-options';
import { SecurityService } from '../../providers/security.service';
import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: UserOptions = { username: '', password: '', email: '', ok: '', error: '' };
  submitted = false;
  loading: any;
  
  constructor(
    public router: Router,
    public security: SecurityService,
    private toastCtrl: ToastController,
    public menu: MenuController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit(){
    //this.menu.enable(false);
    // if(this.security.isLoggedIn()){
    //   this.router.navigateByUrl('/app/tab/inicio', { replaceUrl: true });
    // }
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

    this.loading = await this.loadingCtrl.create({
      message: "Espera por favor..."
    });

    // Presentamos el componente creado en el paso anterior
    await this.loading.present();

    if (form.valid) {

      this.security.loginRequest(this.login).subscribe(async res => {
        if(res){
          if(res.ok){
            console.log(res['datos']['id']);
            this.security.login(this.login.username, this.login.password, res['datos']['id']);

            const toast = this.createToast('Login Successful!', 'success');
            await (await toast).present();

            this.security.tokenRequest(this.login.username, this.login.password).subscribe(async res => {

              if(!res.error){
                const toast = this.createToast('Get token Successful!', 'success');
                await (await toast).present();
                this.security.setToken(res.access_token);

                this.storage.get('ion_did_tutorial').then(res => {
                  if (res === true) {
                    this.router.navigateByUrl('/app/tab/inicio', { replaceUrl: true });
                  }else{
                    this.router.navigateByUrl('/tutorial', { replaceUrl: true });
                  }
                });


                //this.router.navigateByUrl('/tutorial');

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
          this.storage.get('ion_did_tutorial').then(res => {
            if (res === true) {
              this.router.navigateByUrl('/app/tab/inicio', { replaceUrl: true });
            }else{
              this.router.navigateByUrl('/tutorial', { replaceUrl: true });
            }
          });
          //this.router.navigateByUrl('/tutorial');
        }
      });
    }
  }

  async createToast(message: string, color: string){
    const toast = await this.toastCtrl.create({
      message: message,
      color: color,
      position: 'bottom',
      duration: 1000,
    });
    return toast
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

}
