import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonNav, IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SecurityService } from './providers/security.service'
import { MapsService } from './providers/maps.service'
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';

import { GoogleMaps } from '@ionic-native/google-maps';
import { CheckTutorialService } from './providers/check-tutorial.service';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
    
  ],
  providers: [
    QRScanner,
    Storage,
    CheckTutorialService,
    GoogleMaps,
    NativeGeocoder,
    NativePageTransitions,
    MapsService,
    StatusBar,
    SecurityService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
