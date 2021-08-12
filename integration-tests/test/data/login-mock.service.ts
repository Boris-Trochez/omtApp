import { of } from "rxjs"

export class LoginMockService {
  login(user) {
    return of({ token: 'QpwL5tke4Pnpja7X4' });
  }

  getToken() {

  } 
  
}
