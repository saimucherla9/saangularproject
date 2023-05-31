import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {path: 'login', component: LoginpageComponent},
  {path: 'mainpage', component: MainPageComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
