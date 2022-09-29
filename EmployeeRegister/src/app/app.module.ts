import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUsersComponent } from './add-users/add-users.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ListUsersComponent } from './list-users/list-users.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    AddUsersComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
