import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule  } from '@angular/material/input';
import {  MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class AngularmaterialModule { }
