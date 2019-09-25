import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ 
                  BrowserModule,
                  AngularFireModule.initializeApp(environment.firebaseConfig),
                  AngularFirestoreModule,
                  FormsModule,
                  BrowserAnimationsModule,
                  ToastrModule.forRoot()
                ],
  declarations: [ 
                  AppComponent, 
                  HelloComponent,       
                  EmployeesComponent,
                  EmployeeComponent,
                  EmployeeListComponent 
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
