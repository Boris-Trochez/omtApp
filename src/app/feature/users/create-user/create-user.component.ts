import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from './shared/services/users/users.service';
import { NewUser } from './shared/classes/new-user.class';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  myForm: FormGroup;
  newUser: NewUser = new NewUser();

  constructor(
    private readonly router: Router,
    private fb: FormBuilder,
    private userService: UsersService
  ) {
  }
  ngOnInit(): void {
    this.buildForm();
  
  }

  buildForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]]
    });
  }

  ngSubmit() {
    this.newUser.name = this.myForm.value.name;
    this.newUser.job = this.myForm.value.job;
    this.userService.createUser( this.newUser )
      .subscribe( res => {
        console.log("new_user ", res);
        this.redirectToListUsers();
      }); 
  }

  isEmpty( field: string) {
    return this.myForm.value[ field ] === '' ? true : false;
  }
  
  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
