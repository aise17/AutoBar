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
 ) { 
   //this.menu.enable(false);
 }

 async ngOnInit() {

  this.loading = await this.loadingCtrl.create({
    message: "Espera por favor..."
  });

  // Presentamos el componente creado en el paso anterior
  await this.loading.present();

   this.updateCarta();
   
   this.ios = this.config.get('mode') === 'ios';

   this.getCarta();
   
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
       header: 'was successfully added as a favorite.',
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
     message: 'Would you like to remove this session from your favorites?',
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

            this.ordenCompra = {
              user: id,
              product: [],
              mesa: this.mesaId
              
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
      message: "Espera por favor..."
    });
  
    // Presentamos el componente creado en el paso anterior
    await this.loading.present();
    this.inventary.enviarOrdenPedido(this.ordenCompra).subscribe(res => {
      if(res){
        if(res.ok){
          console.log("Peticion enviada -> " + res.ok)
        }else if(res.error){
          console.log("Error -> " + res.error);
        }
      }else{
        console.log("Fallo de conexion");
      }
    });
  }

}
