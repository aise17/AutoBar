import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';


import { ConferenceData } from '../../providers/conference-data';
import { UserService } from '../../providers/user.service';
import {MenuController} from '@ionic/angular';
import { SecurityService } from '../../providers/security.service';
import { InventaryService } from "../../providers/inventary.service";
import { Product } from 'src/app/interface/product';
import { Category } from 'src/app/interface/category';

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

 confDate: string;
 showSearchbar: boolean;

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
   public inventary: InventaryService
 ) { 
   //this.menu.enable(false);
 }

 ngOnInit() {
   this.updateSchedule();
   
   this.ios = this.config.get('mode') === 'ios';

   this.getCarta();
   
 }



 updateSchedule() {
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
   if (this.hasCarro( product)) {

     // Prompt to remove favorite
     //this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
     

   } else {
     // Add as a favorite
     console.log('producto: ' + product)
     this.carro.push(product)

     // Close the open item
     slidingItem.close();

     // Create a toast
     const toast = await this.toastCtrl.create({
       header: 'was successfully added as a favorite.',
       duration: 3000,
       buttons: [{
         text: 'Close',
         role: 'cancel'
       }]
     });

     // Present the toast at the bottom of the page
     await toast.present();
   }

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
          //delete this.carro[index];
          this.carro.splice(index);


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


}
