import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { MyOrdersComponent } from './components/private/clients/my-orders/my-orders.component';
import { MyOrdersDetailsComponent } from './components/private/clients/my-orders-details/my-orders-details.component';
import { CategoryListComponent } from './components/private/admin/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { OrdersDetailsComponent } from './components/private/admin/orders/orders-details/orders-details.component';
import { OrdersManagementComponent } from './components/private/admin/orders/orders-management/orders-management.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductListComponent } from './components/private/admin/product/product-list/product-list.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { ClientManagementComponent } from './components/private/admin/client-management/client-management.component';
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    MyOrdersComponent,
    OrdersDetailsComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    MyOrdersDetailsComponent,
    OrdersManagementComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ClientManagementComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule ,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
