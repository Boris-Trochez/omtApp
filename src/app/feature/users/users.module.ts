import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SharedModule } from '../../shared/shared.module';
import { FilterUserByNamePipe } from '../../shared/pipes/filter-user-by-name/filter-user-by-name.pipe';

@NgModule({
    declarations: [
        ListUsersComponent,
        CreateUserComponent,
        HomeUserComponent,
        NavBarComponent
    ],
    imports: [
        UsersRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        SharedModule,
        FormsModule,
        CommonModule
    ]
})
export class UsersModule {
}
