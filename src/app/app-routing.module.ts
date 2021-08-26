import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryListComponent } from './components/private/admin/category/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { ClientManagementComponent } from './components/private/admin/client-management/client-management.component';
import { OrdersDetailsComponent } from './components/private/admin/orders/orders-details/orders-details.component';
import { OrdersManagementComponent } from './components/private/admin/orders/orders-management/orders-management.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductListComponent } from './components/private/admin/product/product-list/product-list.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';
import { MyOrdersDetailsComponent } from './components/private/clients/my-orders-details/my-orders-details.component';
import { MyOrdersComponent } from './components/private/clients/my-orders/my-orders.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'product-list',
    component:ProductListComponent
  },
  {
    path:'client-management',
    component:ClientManagementComponent
  },
  {
    path:'orders-management',
    component:OrdersManagementComponent
  },
  {
    path:'category-list',
    component:CategoryListComponent
  },
  {
    path:'category-add',
    component:CategoryAddComponent
  },
  {
    path:'category-update',
    component:CategoryUpdateComponent
  },
  {
    path:'orders-details',
    component:OrdersDetailsComponent
  },
  {
    path:'product-add',
    component:ProductAddComponent
  },
  {
    path:'product-update',
    component:ProductUpdateComponent
  },
  {
    path:'my-orders',
    component:MyOrdersComponent
  },
  {
    path:'my-orders-details',
    component:MyOrdersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
