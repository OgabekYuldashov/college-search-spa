import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollegesComponent} from './components/colleges/colleges.component';


const routes: Routes = [
  {path: '', component: CollegesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
