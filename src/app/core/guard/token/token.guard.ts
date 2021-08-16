import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router
  ) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("canActivate", localStorage.getItem("token"));
    if( localStorage.getItem("token") === null ) {
      console.log('NO hay token');
      this.router.navigateByUrl('/login');
    }
    return true;
  
  }

  canLoad(): Observable<boolean> | boolean {
    if( localStorage.getItem("token") === null ) {
      console.log('NO hay token');
      this.router.navigateByUrl('/login');
    }

    return true;
  }
  
  
  
}
