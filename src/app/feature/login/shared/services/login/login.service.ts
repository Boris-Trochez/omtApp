import { environment } from './../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from "rxjs/operators";
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) {}

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login( email:string, password: string ) {
    let isValid = false;
    return this.http.post( `${ environment.API }/login`, { email, password } )
      .pipe(
        tap( ({ token }: any) => {
          if( token != '') {
            console.log("TOKEN SUCCESS ", token);
            localStorage.setItem("token", token);
            isValid = true;
          }
        }),
        map( token => isValid),
        catchError( err => of(err.error.msg))
      )
  }
}
