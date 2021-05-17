import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';


import { ConferenceData } from '../../providers/conference-data';
import { UserService } from '../../providers/user.service';
import {MenuController} from '@ionic/angular';
import { SecurityService } from '../../providers/security.service';
import { InventaryService } from "../../providers/inventary.service";
import { Product } from 'src/app/interface/product';
import { Category } from 'src/app/interface/category';
import { PurchaseOrder } from "../../interface/purchase-order";
import { Direccion } from 'src/app/interface/direccion';
import { ActionSheetController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';



@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {

 // Gets a reference to the list element
 @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

 ios: boolean;
 dayIndex = 0;
 queryText = '';
 segment = 'all';
 excludeTracks: any = [];
 shownSessions: any = [];
 products: Category[] = [];
 carro: Product[] = [];
 total_price: number = 0.0;

 confDate: string;
 showSearchbar: boolean;
 ordenCompra: PurchaseOrder ;

 public mesaId: number = null;

 public direccion:Direccion = null;
 loading:any;

 options: NativeTransitionOptions = {
  direction: 'up',
  duration: 400,
  slowdownfactor: -1,
  iosdelay: 50
 };

 constructor(
   public alertCtrl: AlertController,
   public confData: ConferenceData,
   public loadingCtrl: LoadingController,
   public modalCtrl: ModalController,
   public router: Router,
   public routerOutlet: IonRouterOutlet,
   public toastCtrl: ToastController,
   public user: UserService,
   public config: Config,
   private menu: MenuController,
   public security: SecurityService,
   public inventary: InventaryService,
   public userService: UserService,
   private route: ActivatedRoute,
   private actionSheetController: ActionSheetController,
   private nativePageTransitions: NativePageTransitions
   

 ) { 
   //this.menu.enable(false);
   this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.direccion = this.router.getCurrentNavigation().extras.state.address;
    }
  });
 }

 async ngOnInit() {

  this.loading = await this.loadingCtrl.create({
    message: "Espera por favor..."
  });
  this.carro.length

  // Presentamos el componente creado en el paso anterior
   await this.loading.present();

   this.updateCarta();
   
   this.ios = this.config.get('mode') === 'ios';

   //this.getCarta();

   this.loading.dismiss();
   
 }

 ionViewWillEnter() {

  this.mesaId = parseInt(this.route.snapshot.paramMap.get('mesaId'));
  console.log('Mesa Seleccionada -> ' + this.mesaId);




}



 updateCarta() {
   // Close any open sliding items when the schedule updates
   if (this.scheduleList) {
     this.scheduleList.closeSlidingItems();
   }

   this.getCarta();
   
 }

 async presentFilter() {
   
 }
 

 hasCarro( prodect: Product){
  return  this.carro.filter( x => x.id === prodect.id).length != 0 ? true : false; 
 }


 async addFavorite(slidingItem: HTMLIonItemSlidingElement, product: Product) {
   slidingItem.close();

     // Add as a favorite
     console.log('producto: ' + product)
     this.carro.push(product)
    this.total_price += parseFloat(product.price) ;
     // Close the open item
     slidingItem.close();

     // Create a toast
     const toast = await this.toastCtrl.create({
       header: 'Producto añadido al pedido',
       duration: 1000,
       buttons: [{
         text: 'Close',
         role: 'cancel'
       }]
     });

     // Present the toast at the bottom of the page
     await toast.present();
   

 }

 async removeFavorite(slidingItem: HTMLIonItemSlidingElement, product: Product) {
   const alert = await this.alertCtrl.create({
     header: product.name,
     message: 'Producto eliminado de la lista de pedidos?',
     buttons: [
       {
         text: 'Cancel',
         handler: () => {
           // they clicked the cancel button, do not remove the session
           // close the sliding item and hide the option buttons
           slidingItem.close();
         }
       },
       {
         text: 'Remove',
         handler: () => {
           // they want to remove this session from their favorites
           
           const index =this.carro.findIndex(x => x.id === product.id);
           this.total_price -= parseFloat(product.price);
          //delete this.carro[index];
          this.carro.splice(index, 1);
          console.log(index);


           // close the sliding item and hide the option buttons
           slidingItem.close();
         }
       }
     ]
   });
   // now present the alert on top of all other content
   await alert.present();
 }

 async openSocial(network: string, fab: HTMLIonFabElement) {
   const loading = await this.loadingCtrl.create({
     message: `Posting to ${network}`,
     duration: (Math.random() * 1000) + 500
   });
   await loading.present();
   await loading.onWillDismiss();
   fab.close();
 }

async getCarta(){

 this.inventary.getCarta().subscribe(res => {

   console.log(res);

   this.products =  res;
   
 });


}

  async crearPedido(){

    const alert = await this.alertCtrl.create({
      header: 'Confiramcion de pedido',
      message: '¿Realizar pedido actual?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
   
          }
        },
        {
          text: 'Seguir',
          handler: async () => {
            const id = parseInt( await this.security.getIdUsername().then(x => x.toString()));

            if(this.mesaId){
            this.ordenCompra = {
              user: id,
              product: [],
              mesa: this.mesaId
            }
          }else if(this.direccion){
            this.ordenCompra = {
              user: id,
              product: [],
              address: this.direccion
            }
          }
            this.carro.forEach(x  =>{
              this.ordenCompra.product.push(x);
            })

            console.log(this.ordenCompra);
            // they want to remove this session from their favorites
            this.carro.splice(0);
            this.total_price = 0;

            this.enviarOrdenCompra();

          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();

  }


  async enviarOrdenCompra(){
    this.loading = await this.loadingCtrl.create({
      message: "Enviando pedido..."
    });
  
    // Presentamos el componente creado en el paso anterior
    await this.loading.present();
    this.inventary.enviarOrdenPedido(this.ordenCompra).subscribe(async res => {
      if(res){
        if(res.ok){
          console.log("Peticion enviada -> " + res.ok)
          await this.loading.dismiss();
          
        }else if(res.error){
          console.log("Error -> " + res.error);
          await this.loading.dismiss();
        }
      }else{
        console.log("Fallo de conexion");
        await this.loading.dismiss();
      }
    });
    
  }

  goDireccion(){
    this.nativePageTransitions.curl(this.options);
    this.router.navigateByUrl('/app/tab/direcciones', { replaceUrl: true });
  }

  goScanner(){
    this.nativePageTransitions.slide(this.options);
    this.router.navigateByUrl('/app/tab/scanner', { replaceUrl: true });
  }


  async presentChoseSite() {
    

    const actionSheet = await this.actionSheetController.create({
      header: 'Lugares de entrega:',
      cssClass: 'my-custom-class',
      buttons: [ 
      {
        text: 'Tomar en el bar',
        icon: 'cafe',
        handler: () => {
          console.log('Share clicked');
          actionSheet.dismiss();
         

          this.goScanner();

        }
      }, {
        text: 'Entrega en el domicilio',
        icon: 'car',
        handler: () => {
          console.log('Favorite clicked');
          actionSheet.dismiss();
       //TODO  REVISAR PORQUE ESTO ROMPE MAPA
          this.goDireccion();

        }
      }]
    });
    await actionSheet.present();
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.getCarta()
    }, 2000);
  }


}










// docker run -d --name=bind --dns=127.0.0.1 --publish=127.0.0.1:53:53/udp --publish=127.0.0.1:10000:10000 --volume=/srv/docker/bind:/data --env='ROOT_PASSWORD=SecretPassword' sameersbn/bind:latest
