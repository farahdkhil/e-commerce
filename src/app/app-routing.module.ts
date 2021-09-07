import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
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
import { ClientGuard } from './guards/client.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent,
    
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'product-list',
    component:ProductListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'client-management',
    component:ClientManagementComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'orders-management',
    component:OrdersManagementComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'category-list',
    component:CategoryListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'category-add',
    component:CategoryAddComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'category-update/:id',
    component:CategoryUpdateComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'orders-details',
    component:OrdersDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'product-add',
    component:ProductAddComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'product-update/:id',
    component:ProductUpdateComponent,
    canActivate:[AdminGuard]
  },

  {
    path:'my-orders',
    component:MyOrdersComponent,
    canActivate:[ClientGuard]
  },
  {
    path:'my-orders-details',
    component:MyOrdersDetailsComponent,
    canActivate:[ClientGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
