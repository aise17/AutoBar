import { Component, OnInit } from '@angular/core';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

 

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  goToCarta(){
    this.router
    .navigateByUrl('/app/tab/carta/', { replaceUrl: true });
  }

  goToScanner(){
    this.router
    .navigateByUrl('/app/tab/scanner', { replaceUrl: true });
  }
  


}
