import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/app/interface/direccion';
import { InventaryService } from "../../providers/inventary.service";
import { SecurityService } from "../../providers/security.service";
import { IonList, LoadingController, ModalController, ToastController,Config, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.page.html',
  styleUrls: ['./direcciones.page.scss'],
})
export class DireccionesPage implements OnInit {

  ios: boolean;
  list_addresses: Direccion[];
  loading: any;

  constructor(
    public inventaryService: InventaryService,
    public securityService: SecurityService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public config: Config,
    public router: Router,
    public loadingCtrl: LoadingController,
    private nativePageTransitions: NativePageTransitions
    ) { }

  async ngOnInit() {    

    this.ios = this.config.get('mode') === 'ios';
    this.getAddresses();

  }

  


  goMap(){
    this.router.navigateByUrl('/mapa', { replaceUrl: true });
  }


  async getAddresses(){
    this.loading = await this.loadingCtrl.create({
      message: "Cargando mis direcciones ..."
    });
      await this.loading.present();

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
    this.loading.dismiss();
  }

  slidePage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options);
    this.goMap();
  }
 
  flipPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
 
    this.nativePageTransitions.flip(options);
    this.goMap();
  }
 
  fadePage() {
    this.nativePageTransitions.fade(null);
    this.goMap();
  }
 
  curlPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
    this.nativePageTransitions.curl(options);
    this.goMap();
  }




}
