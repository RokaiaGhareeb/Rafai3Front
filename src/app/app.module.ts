import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromotionCardComponent } from './components/promotion-card/promotion-card.component';
import { PromotionDetailsComponent } from './components/promotion-details/promotion-details.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductCategoryComponent } from './components/product/product-category/product-category.component';
import { CategoryMenuComponent } from './components/product/category-menu/category-menu.component';
import { ProductHeaderComponent } from './components/product/product-header/product-header.component';
import { OrderService } from 'src/services/order/order.service';
import { UserService } from 'src/services/user/user.service';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';


const appRoutes : Routes = [
  {path:'', redirectTo:'product/kitchen', pathMatch:'full'},
  {
    path:'product',
    component: ProductCategoryComponent,
    children: [
      {path: ':filter', component:ProductCardComponent},
    ],

  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromotionCardComponent,
    PromotionDetailsComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    CartItemComponent,
    CartComponent,
    LoginFormComponent,
    SignFormComponent,
    HomeComponent,
    ProfileComponent,
    ProductCategoryComponent,
    CategoryMenuComponent,
    ProductHeaderComponent,
    AdminLoginComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [OrderService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
