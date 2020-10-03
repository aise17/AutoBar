import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../interface/user-options';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ApiToken } from '../interface/api-token';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  HAS_LOGGED_IN = 'hasLoggedIn';
    HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

    private loginUrl = 'http://my-domain.com:8080/users/loginApi/';
    private registerUrl = 'http://my-domain.com:8080/users/register';
    private createApiTokenUrl = 'http://my-domain.com:8080/users/o/token/';
    private cartaUrl = 'http://lacentro.my-domain.com:8080/inventary/product_list?format=json'

    constructor(
        public http: HttpClient,
        public storage: Storage
    ) { }


    public loginRequest(user: UserOptions): Observable<UserOptions> {


      

        const headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('responseType', 'application/json');
    
        return this.http.post<UserOptions>(this.loginUrl, user, {headers: headers}  ).pipe(
          tap((res: UserOptions) => this.log(`reusltad0 =${res['ok']}  usuario recivido=${res['salida']} `)),
          catchError(this.handleError<UserOptions>('error de envio de usuario'))
        );
    }   
    
    public registerRequest(user: UserOptions): Observable<UserOptions> {  
        const headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('responseType', 'application/json');
    
        return this.http.post<UserOptions>(this.registerUrl, user, {headers: headers}  ).pipe(
          tap((res: UserOptions) => this.log(`reusltad0 =${res['ok']}  usuario recivido=${res['salida']} `)),
          catchError(this.handleError<UserOptions>('error de envio de usuario'))
        );
    }
    
    public tokenRequest (usuario: string, pass: string): Observable<ApiToken> {
    
        let token = new ApiToken(usuario.toString(), pass.toString());

    
        return this.http.post<ApiToken>(this.createApiTokenUrl, token ).pipe(
          tap((res) => this.log(`get token=${res['access_token']}`)),
          catchError(this.handleError<ApiToken>('getToken'))
        );
    }


    public getCarta (): Observable<Response> {
    

      return this.http.get<Response>(this.cartaUrl ).pipe(
        tap((res) => this.log(`get token=${res['access_token']}`)),
        catchError(this.handleError<Response>('getToken'))
      );
  }
    
  public  login(username: string, password: string): Promise<any> {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
          this.setUsername(username);
          this.setPassword(password);
          return window.dispatchEvent(new CustomEvent('user:login'));
        });
    }
    
    signup(username: string, password: string): Promise<any> {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
          this.setUsername(username);
          this.setPassword(password);
          return window.dispatchEvent(new CustomEvent('user:signup'));
        });
    }
    
    public logout(): Promise<any> {
        return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
          this.storage.remove('username');
          this.storage.remove('password');
          this.storage.remove('token');
        }).then(() => {
          window.dispatchEvent(new CustomEvent('user:logout'));
        });
    }
    
    public setUsername(username: string): Promise<any> {
        return this.storage.set('username', username);
    }
    
    
    public getUsername(): Promise<string> {
        return this.storage.get('username').then((value) => {
          return value;
        });
    }
    
    public setPassword(password: string): Promise<any> {
        return this.storage.set('password', password);
    }
    
    
    public getPassword(): Promise<string> {
        return this.storage.get('password').then((value) => {
          return value;
        });
    }
    
    public setToken(password: string): Promise<any> {
        return this.storage.set('token', password);
    }
    
    
    public getToken(): Promise<string> {
        return this.storage.get('token').then((value) => {
          return value;
        });
    }
    
    public isLoggedIn(): Promise<boolean> {
        return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
          return value === true;
        });
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
