import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private _snackBar : MatSnackBar, private htttClient : HttpClient) { }

  showMenssage(msg : string){
    this._snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product : Product) : Observable<Product>{
    return this.htttClient.post<Product>(this.baseUrl, product);
  } 

  read() : Observable<Product[]>{
    return this.htttClient.get<Product[]>(this.baseUrl);
  }

  readById(id : string) : Observable<Product>{
    const url = this.baseUrl + "/" + id;
    return this.htttClient.get<Product>(url);
  }

  update(product : Product) : Observable<Product>{
    const url =  this.baseUrl + "/" + product.id;
    return this.htttClient.put<Product>(url, product);
  }

  delete(id : string) : Observable<Product>{
    const url =  this.baseUrl + "/" + id;
    return this.htttClient.delete<Product>(url);
  }
}
