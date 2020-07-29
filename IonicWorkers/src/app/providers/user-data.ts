import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../interfaces/user-options';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ApiToken } from '../interfaces/api-token';


@Injectable({
  providedIn: 'root'
})
export class UserData {
  favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';


  private loginUrl = 'http://tenant.my-domain.com:8000/users/loginApi/';
  private registerUrl = 'http://tenant.my-domain.com:8000/users/register';
  private createApiTokenUrl = 'http://tenant.my-domain.com:8000/users/o/token/';

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) { }

  hasFavorite(sessionName: string): boolean {
    return (this.favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName: string): void {
    this.favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this.favorites.indexOf(sessionName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

  loginRequest(user: UserOptions): Observable<UserOptions> {

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

  registerRequest(user: UserOptions): Observable<UserOptions> {

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

  getToken (usuario: string, pass: string): Observable<Response> {

    var token = new ApiToken(usuario, pass.toString());

    console.log(token)

    const fd = new FormData();
    fd.append('grant_type', token.grant_type);
    fd.append('username', token.usuario);
    fd.append('password', token.pass);
    fd.append('client_id', token.client_id);
    fd.append('client_secret', token.client_secret);
  

  

    console.log(fd);
    return this.http.post<Response>(this.createApiTokenUrl, fd ).pipe(
      tap((res: Response) => this.log(`get token w/ token=${res}`)),
      catchError(this.handleError<Response>('getToken'))
    );
  }


  login(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }

  signup(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }

  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('username');
    }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
    });
  }

  setUsername(username: string): Promise<any> {
    return this.storage.set('username', username);
  }

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
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
