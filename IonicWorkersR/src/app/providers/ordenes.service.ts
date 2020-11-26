import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Orders } from '../interface/orders';
import { tap, catchError } from 'rxjs/operators';
import { Mesas } from '../interface/mesas';


@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  private orderslist = 'http://lacentro.my-domain.com:8080/inventary/order/bar';
  private productupdatelist = 'http://lacentro.my-domain.com:8080/inventary/order/barra/status';
  private listables = 'http://lacentro.my-domain.com:8080/inventary/order/mesaList';
  
  constructor(
    public http: HttpClient
    ) { }

  //una clase se puede serializar con Observable
  public getOrders (): Observable<Orders[]> {
    
    return this.http.get<Orders[]>(this.orderslist).pipe(
      tap((res) => this.log(`get orders=${res['access_token']}`)),
      catchError(this.handleError<Orders[]>('get orders'))
    );
  }

  public getTables (): Observable<Mesas[]> {
    
    return this.http.get<Mesas[]>(this.listables).pipe(
      tap((res) => this.log(`get mesas=${res['access_token']}`)),
      catchError(this.handleError<Mesas[]>('get mesas'))
    );
  }

  public toPutOrderBarra(id: any) {

    return this.http.put(this.productupdatelist, { id: id}).subscribe(
      res => console.log(res.toString()));
    
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
