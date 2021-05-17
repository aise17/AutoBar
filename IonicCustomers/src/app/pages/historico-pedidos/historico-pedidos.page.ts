import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from 'src/app/interface/purchase-order';
import { InventaryService } from "../../providers/inventary.service";
import { SecurityService } from "../../providers/security.service";

@Component({
  selector: 'app-historico-pedidos',
  templateUrl: './historico-pedidos.page.html',
  styleUrls: ['./historico-pedidos.page.scss'],
})
export class HistoricoPedidosPage implements OnInit {

  public list_order_active: PurchaseOrder[];
  public list_order_history: PurchaseOrder[];
  show_product = false;


  constructor(
    private inventariService: InventaryService,
    private securityService: SecurityService
    ) {  }


  ngOnInit() {
    this.getOrdersActives();
    this.getOrdersHisory();
  }


  async getOrdersActives(){

    if(this.securityService.isLoggedIn()){
       
      this.inventariService.getOrderActive(
        await this.securityService.getIdUsername().then(x => x.valueOf()))
        .subscribe(res => {
          if(res){
            this.list_order_active = res;
            console.log(this.list_order_active);
            
          }
        });
    }else{

    }
  }


  async getOrdersHisory(){

    if(this.securityService.isLoggedIn()){
       
      this.inventariService.getOrderHistory(
        await this.securityService.getIdUsername().then(x => x.valueOf()))
        .subscribe(res => {
          if(res){
            this.list_order_history = res;
            
          }
        });
    }else{

    }
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.getOrdersActives();
      this.getOrdersHisory();
    }, 2000);
  }


  showProducts(){
    if (this.show_product == false) this.show_product = true
    else this.show_product = false
  }

  
}
