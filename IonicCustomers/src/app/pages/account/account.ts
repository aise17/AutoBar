import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';
import { Security } from '../../providers/security';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  username: string;
  fileToUpload: File = null;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    public security: Security

  ) { }

  ngAfterViewInit() {
    this.getUsername();
  }

  cambiar( event){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
    };

    
  }

  async updatePicture() {
    console.log('Clicked to update picture');
    const alert = await this.alertCtrl.create({
      header: 'pepe',
      message: '<ion-input value={text} placeholder="Enter Input" ></ion-input>',
      buttons: [
        {
          text: 'Cancel',
          handler: (data:any) => {
          console.log(data);
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
   
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites


          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.security.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }

  getUsername() {
    this.security.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.security.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}
