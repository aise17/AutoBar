import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) { }

 

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }

  private log(entrada: string) {
    console.log(entrada);
  }
}
