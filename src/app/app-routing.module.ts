import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProdukComponent } from './detail-produk/detail-produk.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CartComponent } from './cart/cart.component';
import { PembayaranComponent } from './pembayaran/pembayaran.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'detail', component: DetailProdukComponent},
  {path: 'cart', component: CartComponent},
  {path: 'buy', component: PembayaranComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
