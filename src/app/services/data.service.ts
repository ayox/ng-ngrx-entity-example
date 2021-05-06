import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client, data, Order, Product, ProductCategory, User } from '../models';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public getUsers$(): Observable<User[]> {
    return of(data.users).pipe(delay(300));
  }
  public addUser$(id: number): Observable<User[]> {
    data.users.push({
      id: id.toString(),
      username: 'hello added' + id,
    });
    return of(data.users).pipe(delay(300));
  }

  public getProduct$(): Observable<Product[]> {
    return of(data.product).pipe(delay(300));
  }

  public getProductType$(): Observable<ProductCategory[]> {
    return of(data.productCategory).pipe(delay(300));
  }

  public getOrder$(): Observable<Order[]> {
    return of(data.order).pipe(delay(300));
  }

  public getClient$(): Observable<Client[]> {
    return of(data.client).pipe(delay(300));
  }
}
