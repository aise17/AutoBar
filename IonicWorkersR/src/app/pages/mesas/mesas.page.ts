import { Component, OnInit } from '@angular/core';
import { Mesas } from 'src/app/interface/mesas';
import { OrdenesService } from 'src/app/providers/ordenes.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit {

  listtables: Mesas[];

  constructor( 
    private ordenesService: OrdenesService,
    ){
   
   }

  ngOnInit() {
    this.getTables();
  }

  getTables(){
    //esta funcion devuelve un tipo promesa. te tienes que susbcribir y cuando llegue va a ordenes
    this.ordenesService.getTables().subscribe(tables => {
      if(tables){
        this.listtables = tables;   
        console.log(this.listtables);
      }
    });

  }
    



}
