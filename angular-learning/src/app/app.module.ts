import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyModuleModule } from './my-module/my-module.module';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    CartComponent,
    ProductComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyModuleModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
