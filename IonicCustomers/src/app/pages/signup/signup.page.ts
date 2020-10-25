import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserOptions } from '../../interface/user-options';
import { SecurityService } from '../../providers/security.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage  {
  signup: UserOptions = { username: '', password: '', email: '', ok: '', error: ''  };
  submitted = false;
  loading: any;

  constructor(
    public router: Router,
    public security: SecurityService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) {}

  async onSignup(form: NgForm) {
    this.submitted = true;

    this.loading = await this.loadingCtrl.create({
      message: "Espera por favor..."
    });
  
    // Presentamos el componente creado en el paso anterior
    await this.loading.present();

    if (form.valid) {

      
      this.security.registerRequest(this.signup).subscribe(res => {
        
        console.log(res);

        this.security.signup(this.signup.username, this.signup.password,res['datos']['id']);
       

        this.security.loginRequest(this.signup).subscribe(async res => {
          console.log(res['datos']['username']);

          this.security.tokenRequest(this.signup.username, this.signup.password).subscribe(async res => {
            console.log('Respuesta de Token ->'  + res);
            const toast = this.createToast('Register Successful!', 'success');
            await (await toast).present();
            this.security.setToken(res['access_token']);
            this.router.navigateByUrl('/app/tab/inicio');
          });
        });
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



}
