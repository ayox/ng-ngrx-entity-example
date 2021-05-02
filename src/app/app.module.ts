import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './users/users.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users/users.effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    ClientsComponent,
    OrdersComponent,
    ProductsCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(
      {
        users: usersReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([UsersEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
