import { environment } from './../../../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {}


  getUsers(): any {
    return this.http.get( `${ environment.API }/users?page=2` );
  }

  createUser( newUser: any ) {
    return this.http.post(`${ environment.API }/users`, newUser); 
  }

  deleteUserForIndex(index: number): any {
    return this.http.delete(`${ environment.API }/users/${ index }`);
  }
}
