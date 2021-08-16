import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  myForm: FormGroup = this.fb.group({
    email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
    password: ['cityslicka', [Validators.required, Validators.minLength(8)]]
  });

  //eve.holt@reqres.in
 // cityslicka
  constructor(
    private readonly router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  login() {
    if( this.myForm.valid ) {
      console.log(this.myForm.value);
    const { email, password } = this.myForm.value;
    this.loginService.login( email, password )
      .subscribe( ( valid: any ) => {
        
        if( valid === true ) {
          console.log( valid );
          this.redirectUsers();
        } else {
          Swal.fire('Email or password are invalid', valid, 'error'); //Main title, Message to show, icon
        }
      }); 
    }  
  }

  isInvalid( field: string ) {
    return this.myForm.controls[ field ].invalid 
            && this.myForm.controls[ field ].touched
  }

  isEmpty( field: string) {
    return this.myForm.value[ field ] === '' ? true : false;
  }
  
  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

}
