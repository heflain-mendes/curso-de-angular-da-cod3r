import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';

import { HomeComponent } from "./view/home/home.component"
import { ProductCrudComponent } from "./view/product-crud/product-crud.component"


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "products",
    component: ProductCrudComponent
  },{
    path: "products/create",
    component: ProductCreateComponent
  },{
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
