import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './components/product/product.component';
import {CategoryComponent} from './components/category/category.component';
import {NaviComponent} from './components/navi/navi.component';
import {VatAddedPipe} from './pipes/vat-added.pipe';
import {FilterPipePipe} from './pipes/filter-pipe.pipe';

import {ToastrModule} from 'ngx-toastr';
import {CartSummaryComponent} from './components/cart-summary/cart-summary.component';
import {ProductAddComponent} from './components/product-add/product-add.component';
import {UserRegistrationComponent} from './components/auth/user-registration/user-registration.component';
import { UserLoginComponent } from './components/auth/user-login/user-login.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
