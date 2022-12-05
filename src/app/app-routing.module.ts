import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
  ,
  {
    path:'form',
    component:FormComponent,
  }
  ,
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'t-form',
    component:TemplateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
