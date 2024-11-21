import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEnComponent } from './home-en.component';

const routes: Routes = [
  {
    path: "",
    component: HomeEnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
