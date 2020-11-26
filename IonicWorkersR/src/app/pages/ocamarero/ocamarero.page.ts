import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../providers/ordenes.service';
import { Orders } from 'src/app/interface/orders';
import { NavigationExtras } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-ocamarero',
  templateUrl: './ocamarero.page.html',
  styleUrls: ['./ocamarero.page.scss'],
})
export class OcamareroPage implements OnInit {
  ordenesfinal: Orders[];
  
  constructor(
    private ordenesService: OrdenesService,
    public navCtrl: NavController
    ) { }

  ngOnInit() {
    this.getOrders();
    
  }

  getOrders(){
    //esta funcion devuelve un tipo promesa. te tienes que susbcribir y cuando llegue va a ordenes
    this.ordenesService.getOrders().subscribe(ordenes => {
      if(ordenes){
        ordenes.forEach(element => {
            if(element.orders_status_barra==false){
              this.ordenesfinal = ordenes; 
            }else{
              
            }
        });
          
        console.log(ordenes);
      }
    });
    
    

  }

  isEmpty(){
    if(this.ordenesfinal){
      return true;
    }else{
      return false;
    }
  }

  goToProducts(products,id){
    console.log(products);
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
        address : products
      }
    };
    this.navCtrl.navigateRoot(['productsoforder'], navigationExtras);
  }



}
