import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../interface/user-options';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Category } from '../interface/category';


@Injectable({
  providedIn: 'root'
})
export class InventaryService {



  private cartaUrl = 'http://lacentro.my-domain.com:8080/inventary/product_list?format=json'


  constructor(
    public http: HttpClient,
    public storage: Storage
  ) { }


  public getCarta (): Observable<Category[]> {
    

    return this.http.get<Category[]>(this.cartaUrl ).pipe(
      tap((res) => this.log(`get token=${res['access_token']}`)),
      catchError(this.handleError<Category[]>('getToken'))
    );
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


  private log(entrada: string) {
    console.log(entrada);
  }


}
