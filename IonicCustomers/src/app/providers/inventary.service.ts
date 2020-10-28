import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../interface/user-options';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Category } from '../interface/category';
import { PurchaseOrder } from '../interface/purchase-order';
import { Direccion } from '../interface/direccion';
import { DireccionesPage } from '../pages/direcciones/direcciones.page';



@Injectable({
  providedIn: 'root'
})
export class InventaryService {



  private cartaUrl = 'http://lacentro.autobar.tk:8080/inventary/product_list?format=json'
  private ordenPedidoURL = 'http://lacentro.autobar.tk:8080/inventary/create_orders'
  private AddressesURL = 'http://lacentro.autobar.tk:8080/inventary/address'
  private AddressDeleteURL = 'http://lacentro.autobar.tk:8080/inventary/address/delete'
  private orderActiveURL = 'http:/lacentro.autobar.tk:8080/inventary/order/active'
  private orderHistoryURL = 'http://lacentro.autobar.tk:8080/inventary/order/history'



  constructor(
    public http: HttpClient,
    public storage: Storage
  ) { }


  public enviarOrdenPedido(ordenCompra: PurchaseOrder){


    return this.http.post<PurchaseOrder>(this.ordenPedidoURL, ordenCompra ).pipe(
      tap((res) => this.log(`Pedido=${res.ok}`)),
      catchError(this.handleError<PurchaseOrder>('envio de pedido'))
    );

  }


  public getCarta (): Observable<Category[]> {
    

    return this.http.get<Category[]>(this.cartaUrl ).pipe(
      tap((res) => this.log(`get carta=${res['access_token']}`)),
      catchError(this.handleError<Category[]>('get carta'))
    );
}

  public getAddress(id:number): Observable<Direccion[]>{

    let params = new HttpParams().set('id', id.toString());

    return this.http.get<Direccion[]>(this.AddressesURL, { params: params }).pipe(
      tap((res) => this.log(`get address=${res}`)),
      catchError(this.handleError<Direccion[]>('get direccion'))
    );
  }

  public setAddress(adrress: Direccion){


    return this.http.post<Direccion>(this.AddressesURL, adrress ).pipe(
      tap((res) => this.log(`set address=${res}`)),
      catchError(this.handleError<Direccion>('set address'))
    );

  }

  public deleteAddress(id:number){

    let params = new HttpParams().set('id', id.toString());   

    return this.http.get<Direccion[]>(this.AddressDeleteURL, { params: params }).pipe(
      tap((res) => this.log(`delete address=${res}`)),
      catchError(this.handleError<Direccion[]>('delete direccion'))
    );

  }

  public getOrderActive(id:number): Observable<any>{

    let params = new HttpParams().set('id', id.toString());   

    return this.http.get<any>(this.orderActiveURL, { params: params }).pipe(
      tap((res) => this.log(`get order active=${res}`)),
      catchError(this.handleError<any>('order active'))
    );

  }

  public getOrderHistory(id:number): Observable<any> {

    let params = new HttpParams().set('id', id.toString());   

    return this.http.get<PurchaseOrder[]>(this.orderHistoryURL, { params: params }).pipe(
      tap((res) => this.log(`get oder history=${res}`)),
      catchError(this.handleError<PurchaseOrder[]>('order history'))
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
