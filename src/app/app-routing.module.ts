import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './composants/header/header.component';
import { ProductsComponent } from './composants/products/products.component';
import { PanierComponent } from './composants/panier/panier.component';
import { HomeComponent } from './composants/home/home.component';

const routes: Routes = [
  { path:'header',component : HeaderComponent},
  {path: 'home',component : HomeComponent},

  {path: 'products',component : ProductsComponent},
  {path: 'panier',component : PanierComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
