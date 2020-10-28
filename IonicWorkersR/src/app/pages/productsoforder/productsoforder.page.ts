import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
 

@Component({
  selector: 'app-productsoforder',
  templateUrl: './productsoforder.page.html',
  styleUrls: ['./productsoforder.page.scss'],
})
export class ProductsoforderPage implements OnInit {

  private products: Product[];

  constructor(
    public router: Router,
    public route: ActivatedRoute


  ) {
      this.route.queryParams.subscribe(params => {
        if(this.router.getCurrentNavigation().extras.state){
          this.products = this.router.getCurrentNavigation().extras.state.address;
          console.log(this.products);
      }
    });
  }


  ngOnInit() {
  
  }

  barraAccepted(){
    
  }


  
}
