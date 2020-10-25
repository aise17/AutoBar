import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/app/interface/direccion';
import { InventaryService } from "../../providers/inventary.service";
import { SecurityService } from "../../providers/security.service";
import { IonList, LoadingController, ModalController, ToastController,Config } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.page.html',
  styleUrls: ['./direcciones.page.scss'],
})
export class DireccionesPage implements OnInit {

  ios: boolean;
  list_addresses: Direccion[];

  constructor(
    public inventaryService: InventaryService,
    public securityService: SecurityService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public config: Config,
    public router: Router,
    ) { }

  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';
    this.getAddresses();
  }


  goMap(){
    this.router
    .navigateByUrl('/app/tab/mapa', { replaceUrl: true });
  }


  async getAddresses(){
    if(this.securityService.isLoggedIn()){
       
      this.inventaryService.getAddress(
        await this.securityService.getIdUsername()
        .then(x => x.valueOf()))
        .subscribe(res => {
          if(res['ok']){
            console.log(res['datos'])
            this.list_addresses = res['datos'];
          }
        });
    }else{

    }
  }

}
