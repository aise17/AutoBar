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



  constructor(
    public http: HttpClient,
    public storage: Storage
  ) { }


  public enviarOrdenPedido(ordenCompra: PurchaseOrder){


    return this.http.post<PurchaseOrder>(this.ordenPedidoURL, ordenCompra ).pipe(
      tap((res) => this.log(`Pedido=${res.ok}`)),
      catchError(this.handleError<PurchaseOrder>('getToken'))
    );

  }


  public getCarta (): Observable<Category[]> {
    

    return this.http.get<Category[]>(this.cartaUrl ).pipe(
      tap((res) => this.log(`get carta=${res['access_token']}`)),
      catchError(this.handleError<Category[]>('getCarta'))
    );
}

  public getAddress(id:number): Observable<Direccion[]>{

    let params = new HttpParams().set('id', id.toString());

    return this.http.get<Direccion[]>(this.AddressesURL, { params: params }).pipe(
      tap((res) => this.log(`get address=${res}`)),
      catchError(this.handleError<Direccion[]>('direccion'))
    );
  }

  public setAddress(adrress: Direccion){


    return this.http.post<Direccion>(this.AddressesURL, adrress ).pipe(
      tap((res) => this.log(`Pedido=${res}`)),
      catchError(this.handleError<Direccion>('getToken'))
    );

  }

  public deleteAddress(id:number){

    let httpParams = new HttpParams().set('id', id.toString());   
    let options = { params: httpParams };

    var datos = {
      id:id
    }

    return this.http.delete<Direccion>(this.AddressesURL, options ).pipe(
      tap((res) => this.log(`Pedido=${res}`)),
      catchError(this.handleError<Direccion>('getToken'))
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
