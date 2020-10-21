import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage  {
  public scanSub: any;
  public qrText: string;
  public isScannerOn:boolean;

  constructor(
    private qrScanner: QRScanner,
    private platform: Platform,
    public router: Router,
    ) {
      this.platform.backButton.subscribeWithPriority(0, () => {
        //document.getElementsByTagName('body')[0].style.opacity = '1';
        this.qrScanner.hide();
        this.scanSub.unsubscribe();
        this.qrScanner.destroy();
      });

      this.isScannerOn = false;
  }


  goToCarta(){
    this.router
    .navigateByUrl('/app/tab/carta/'+ this.qrText, { replaceUrl: true });
  }


  ionViewWillLeave() {
    this.closeScanner();
  }


  startScanning() {
    // Optionally request the permission early
    this.qrScanner.prepare().
      then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.isScannerOn = true;
          //this.qrScanner.show();
          this.scanSub = this.qrScanner.scan()
            .subscribe((textFound: string) => {
              
              this.closeScanner();

              this.qrText = textFound;
              this.isScannerOn = false;
            }, (err) => {
              alert(JSON.stringify(err));
            });

        } else if (status.denied) {
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  closeScanner() {
    this.isScannerOn = false;
    this.qrScanner.hide();

    this.qrScanner.destroy();
  }

}
