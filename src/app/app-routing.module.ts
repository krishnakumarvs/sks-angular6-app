import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { AddNewOrderComponent } from './add-new-order/add-new-order.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: 'dashboard',
    component: DashboardMainComponent
  },
  {
    path: 'new-order',
    component: AddNewOrderComponent
  },
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full'
  }]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
  
 }
