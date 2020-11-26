import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { OrdenesService } from 'src/app/providers/ordenes.service';
 

@Component({
  selector: 'app-productsoforder',
  templateUrl: './productsoforder.page.html',
  styleUrls: ['./productsoforder.page.scss'],
})
export class ProductsoforderPage implements OnInit {

  private products: Product[];
  private id_order;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public ordersService: OrdenesService


  ) {
      this.route.queryParams.subscribe(params => {
        if(this.router.getCurrentNavigation().extras.state){
          this.products = this.router.getCurrentNavigation().extras.state.address;
          this.id_order = this.router.getCurrentNavigation().extras.state.id;
          console.log(this.products);
          
      }
    });
  }


  ngOnInit() {
  
  } 

  barraAccepted(){
    this.ordersService.toPutOrderBarra(this.id_order);
  }
}
