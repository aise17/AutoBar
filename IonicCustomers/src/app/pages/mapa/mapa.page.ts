import { Component, OnInit } from "@angular/core";

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  Geocoder
} from "@ionic-native/google-maps";

import { Platform, LoadingController, ToastController, AlertController } from "@ionic/angular";
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Direccion } from "../../interface/direccion";
import { InventaryService } from 'src/app/providers/inventary.service';
import { SecurityService } from 'src/app/providers/security.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  direccion: Direccion = {user:0, name:'', calle:'', longitud: '', latitud: '', localidad:'', piso: 0, portal:0,  puerta:'', numero:0};

  map: GoogleMap;
  loading: any;

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
};


  calle: string = '';
  latitud:string = '';
  longitud: string = '';

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,
    public router: Router,
    public inventaryService: InventaryService,
    public securityService: SecurityService,
    private nativeGeocoder: NativeGeocoder,
    public alertCtrl: AlertController,
    private nativePageTransitions: NativePageTransitions,
  ) {}
  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
    this.localizar();  
  }


  async ionViewWillEnter() {}

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.map.destroy();
    
  }

  loadMap() {

    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: {
          lat: -2.1537488,
          lng: -79.8883037
        },
        zoom: 18,
        tilt: 30
      }
    });
  }

  async sendDireccion(){
    const alert = await this.alertCtrl.create({
      header: 'Confiramcion de direccion',
      message: '¿Guardar direcion?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
   
          }
        },
        {
          text: 'Confirmar',
          handler: async () => {
           
            console.log("direccion a enviar ->")
            console.log(this.direccion)
        
            this.direccion.user = await this.securityService.getIdUsername()
        
            this.inventaryService.setAddress(this.direccion).subscribe(res => {
              console.log(res)
            });
            this.router.navigateByUrl('/app/tab/direcciones', { replaceUrl: true });
            
  
          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
    
  }


  getAddressFromCoords( lat: number, long: number) {
    console.log('traduciendo direccion...')
    this.nativeGeocoder.reverseGeocode(lat, long, this.options)
    .then((result: NativeGeocoderResult[]) => {

      console.log('Direccion ' + JSON.stringify(result[0]))
      this.direccion.calle = result[0]['thoroughfare'];
      this.direccion.numero = parseInt(result[0]['subThoroughfare']);
      this.direccion.localidad = result[0]['locality']
      
    })
    .catch((error: any) => console.log('direccion error ' +error));

  }


  async localizar() {
    // Limpiamos todos los elementos de nuestro mapa
    this.map.clear();
    this.loading = await this.loadingCtrl.create({
      message: "Espera por favor..."
    });

    // Presentamos el componente creado en el paso anterior
    await this.loading.present();

    this.map
      .getMyLocation()
      .then((location: MyLocation) => {
        // Una vez obtenida la ubicación cerramos el mensaje de diálogo
        this.loading.dismiss();
        this.direccion.latitud = '' + location.latLng.lat;
        this.direccion.longitud = '' + location.latLng.lng;
        this.getAddressFromCoords(location.latLng.lat, location.latLng.lng);

        // Movemos la camara a nuestra ubicación con una pequeña animación
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        });



        // Agregamos un nuevo marcador
        let marker: Marker = this.map.addMarkerSync({
          title: "Estoy aquí!",
          snippet: this.direccion.calle,
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });

        // Mostramos un InfoWindow
        marker.showInfoWindow();

        // Podemos configurar un evento que se ejecute cuando
        // se haya dado clic
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast("clicked!");
        });
      })
      .catch(error => {
        // En caso de que haya un problema en obtener la
        // ubicación
        this.loading.dismiss();
        this.showToast(error.error_message);
      });
      
  }


  goToCarta(){
    this.router
    .navigateByUrl('/app/tab/carta/'+ this.direccion.localidad + '/' + 
    this.direccion.calle + '/' + this.direccion.numero + '/' +
     this.direccion.piso + '/' + this.direccion.portal + '/' +
     this.direccion.puerta, { replaceUrl: true });
  }

  // Función que muestra un Toast en la parte inferior
  // de la pantalla
  async showToast(mensaje) {
    let toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1000,
      position: "bottom"
    });

    toast.present();
  }

  back(){
    this.fadePage();
  }

  fadePage() {
    let options: NativeTransitionOptions = {
        direction: 'down',
        duration: 400,
        slowdownfactor: -1,
        iosdelay: 50
      }
    this.nativePageTransitions.slide(options);
    this.goDirecciones();
  }
  goDirecciones() {
    this.router
    this.router.navigateByUrl('/app/tab/direcciones', { replaceUrl: true });
  }
 










}