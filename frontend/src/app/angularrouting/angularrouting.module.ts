import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';
import { NewdiseaseComponent } from '@app/newdisease/newdisease.component';
import { AlldiseasesComponent } from '@app/alldiseases/alldiseases.component';
import { EditdiseaseComponent } from '@app/editdisease/editdisease.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newDisease', component: NewdiseaseComponent },
  { path: 'allDiseases', component: AlldiseasesComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AngularroutingModule { }
