import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailProdukComponent } from './detail-produk/detail-produk.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { PembayaranComponent } from './pembayaran/pembayaran.component';

@NgModule({
  declarations: [
    DetailProdukComponent,
    MainPageComponent,
    AppComponent,
    NavbarComponent,
    CartComponent,
    PembayaranComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
