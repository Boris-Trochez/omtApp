import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from '../create-user/shared/services/users/users.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'avatar', 'first_name', 'last_name', 'email', 'options'];
  dataSource: any[] = [];
  mainDataSource: any[];
  inputValue: string = '';
  getUserListSubscription: Subscription;

  @ViewChild('myForm') myForm: NgForm;

  constructor(
    private userService: UsersService
  ) {}

  ngOnInit(){
    this.getUsersList();
  }

  getUsersList() {
   this.getUserListSubscription = this.userService.getUsers()
      .subscribe( ({ data }) => {
        console.log( data );
        this.dataSource = data;
        this.mainDataSource = data;
      })
  }

  deleteUserForIndex( id ) {

    this.mainDataSource = this.mainDataSource.filter( (item: any) => item.id != id);
    this.dataSource = this.mainDataSource;
    console.log( "Datasource", this.mainDataSource)
    // this.userService.deleteUserForIndex( id ) 
    //   .subscribe( res => {
    //     console.log("DELETE_RESP ", res);
    //   });
  }


  isInvalid(): boolean {
    return  this.myForm?.controls.searcher?.invalid 
           // && this.myForm?.controls.searcher?.touched //if the input has been touched
  }


  /**
   * @description: This method let unsubscribe from different stream observable connections,
   * improving the performance of the application.
   */
  ngOnDestroy() {
    this.getUserListSubscription.unsubscribe();
    console.log("getUserList Unsubscribed");
  }
}
