import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  public folder: string;
  public scanSub: any;
  public qrText: string;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private qrScanner: QRScanner,
    private platform: Platform,
    public router: Router,
    ) {
      this.platform.backButton.subscribeWithPriority(0, () => {
        document.getElementsByTagName('body')[0].style.opacity = '1';
        this.qrScanner.hide();
        this.scanSub.unsubscribe();
        this.qrScanner.destroy();
      });
     }

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id');

  }

  goToCarta(){
    this.router
    .navigateByUrl('/carta', { replaceUrl: true });
  }


  ionViewWillLeave() {
    this.closeScanner();
  }

  

  startScanning() {
    // Optionally request the permission early
    

    
    this.qrScanner.prepare().
      then((status: QRScannerStatus) => {
        if (status.authorized) {

          this.qrScanner.show();
          this.scanSub = document.getElementsByTagName('body')[0].style.opacity = '0';
          
          this.scanSub = this.qrScanner.scan()
            .subscribe((textFound: string) => {
              document.getElementsByTagName('body')[0].style.opacity = '1';
              this.qrScanner.hide();
              this.scanSub.unsubscribe();

              this.qrText = textFound;
            }, (err) => {
              alert(JSON.stringify(err));
            });

        } else if (status.denied) {
        } else {

        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  closeScanner() {
    document.getElementsByTagName('body')[0].style.opacity = '1';
    this.qrScanner.hide();

    this.qrScanner.destroy();
  }

}
