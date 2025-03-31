import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { State_user } from './state/State_user';


@Injectable({
  providedIn: 'root'})
export class guardaRuta implements CanActivate {

  constructor(private state:State_user, private router: Router){}
  canActivate(
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot
  ): Observable<boolean| UrlTree> | Promise<boolean | UrlTree>| boolean  |UrlTree{

    let email = "";
    let password = "";
    this.state.emailuser$.subscribe((value) => email = value);
    this.state.password$.subscribe((value) => password = value);


    if(email == "abadom54@gmail.com" || password == "admin1"){
      return true;
    }else{
      return this.router.parseUrl("/login");
    }

  }
}
