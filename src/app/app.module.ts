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

const appRoutes : Routes = [
  {path:'', redirectTo:'product/kitchen', pathMatch:'full'},
  {
    path:'product',
    component: ProductCategoryComponent,
    children: [
      {path: ':filter', component:ProductCardComponent},
    ],

  },
  {path:'admin/product', component:AdminProductComponent}
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
    AdminProductComponent,
    AdminProductItemComponent,
    SearchBoxComponent
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
