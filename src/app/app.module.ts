import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromotionCardComponent } from './components/promotion-card/promotion-card.component';
import { PromotionDetailsComponent } from './components/promotion-details/promotion-details.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductCategoryComponent } from './components/product/product-category/product-category.component';
import { CategoryMenuComponent } from './components/product/category-menu/category-menu.component';
import { ProductHeaderComponent } from './components/product/product-header/product-header.component';
import { AdminProductComponent } from './components/adminProduct/admin-product/admin-product.component';
import { AdminProductItemComponent } from './components/adminProduct/admin-product-item/admin-product-item.component';
import { SearchBoxComponent } from './components/adminProduct/search-box/search-box.component';


import { OrderService } from 'src/services/order/order.service';
import { UserService } from 'src/services/user/user.service';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { AuthenticationFailedComponent } from './components/authentication-failed/authentication-failed/authentication-failed.component';
import { UserViewOrdersComponent } from './components/orders/user-view-orders/user-view-orders/user-view-orders.component';
import { UserViewOrdersSubComponentComponent } from './components/orders/user-view-orders/user-view-orders-sub-component/user-view-orders-sub-component.component';
import { AdminControlOrdersComponent } from './components/orders/orders-admin-control/admin-control-orders/admin-control-orders.component';
import { AdminControlOrdersSubComponentComponent } from './components/orders/orders-admin-control/admin-control-orders-sub-component/admin-control-orders-sub-component.component';
import { EditPasswordComponent } from './components/user-edit-details/edit-password/edit-password.component';
import { EditUserDetailsComponent } from './components/user-edit-details/edit-user-details/edit-user-details.component';


const appRoutes : Routes = [
  {path:'', redirectTo:'product/kitchen', pathMatch:'full'},
  {
    path:'product',
    component: ProductCategoryComponent,
    children: [
      {path: ':filter', component:ProductCardComponent},
    ],
  },
  {path:'user/login',pathMatch:'full',component:LoginFormComponent},
  {path:'user/register',pathMatch:'full',component:SignFormComponent},
  {path:'user/profile',pathMatch:'full',component:ProfileComponent},
  {path:'authenticationFailed',pathMatch:'full',component:AuthenticationFailedComponent},
  {path:'user/cart',pathMatch:'full',component:CartComponent},
  {path:'user/order',pathMatch:'full',component:UserViewOrdersComponent},
  {path:'user/order/:id',pathMatch:'full',component:OrderDetailsComponent},
  {path:'user/profile/edit',pathMatch:'full',component:EditUserDetailsComponent},
  {path:'user/password',pathMatch:'full',component:EditPasswordComponent},
  {path:'admin/order',pathMatch:'full',component:AdminControlOrdersComponent},
  {path:'admin/order/:id',pathMatch:'full',component:OrderDetailsComponent},
  {path:'admin/order/:id',component:OrderDetailsComponent},
  {path:'admin/login',pathMatch:'full',component:AdminLoginComponent}

<<<<<<< HEAD
  },
  {path:'admin/product', component:AdminProductComponent}
=======
>>>>>>> 46a8fa5f7be69d6633fe4da6e83790fe724b75b6
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromotionCardComponent,
    PromotionDetailsComponent,
    ProductCardComponent,
    CartItemComponent,
    CartComponent,
    LoginFormComponent,
    SignFormComponent,
    HomeComponent,
    ProfileComponent,
    ProductCategoryComponent,
    CategoryMenuComponent,
    ProductHeaderComponent,
<<<<<<< HEAD
    AdminProductComponent,
    AdminProductItemComponent,
    SearchBoxComponent
=======
    AdminLoginComponent,
    OrderDetailsComponent,
    AuthenticationFailedComponent,
    UserViewOrdersComponent,
    UserViewOrdersSubComponentComponent,
    AdminControlOrdersComponent,
    AdminControlOrdersSubComponentComponent,
    EditPasswordComponent,
    EditUserDetailsComponent
>>>>>>> 46a8fa5f7be69d6633fe4da6e83790fe724b75b6
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [OrderService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
