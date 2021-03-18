import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromotionCardComponent } from './components/promotion-card/promotion-card.component';
import { PromotionDetailsComponent } from './components/promotion-details/promotion-details.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';

import{HttpClientModule} from '@angular/common/http'
import { OrderService } from 'src/services/order/order.service';
import { OrdersComponent } from './components/orders-Components/user-orders/orders.component';
import { MakeOrderComponent } from './components/orders-Components/make-order/make-order.component';
import { AdminControlOrdersComponent } from './components/orders/orders-admin-control/admin-control-orders/admin-control-orders.component';
import { UserViewOrdersComponent } from './components/orders/user-view-orders/user-view-orders/user-view-orders.component';
import { AdminControlOrdersSubComponentComponent } from './components/orders/orders-admin-control/admin-control-orders-sub-component/admin-control-orders-sub-component.component';
import { UserViewOrdersSubComponentComponent } from './components/orders/user-view-orders/user-view-orders-sub-component/user-view-orders-sub-component.component';



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
    OrdersComponent,
    MakeOrderComponent,
    AdminControlOrdersComponent,
    UserViewOrdersComponent,
    AdminControlOrdersSubComponentComponent,
    UserViewOrdersSubComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
