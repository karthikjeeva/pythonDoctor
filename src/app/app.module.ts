import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../app/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from '@app/angularmaterial/angularmaterial.module';
import { FormsModule } from '@angular/forms';
import { AngularroutingModule } from '@app/angularrouting/angularrouting.module';
import { NewdiseaseComponent } from './newdisease/newdisease.component';
import { AlldiseasesComponent } from './alldiseases/alldiseases.component';
import { EditdiseaseComponent } from './editdisease/editdisease.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    FormsModule,
    AngularroutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NewdiseaseComponent,
    AlldiseasesComponent,
    EditdiseaseComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/