import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from './sidebar/sidebar.module';
import { CounterStoreComponent } from './counter-store/counter-store.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './stores/counter/counter.reducer';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { authReducer } from './stores/auth/app-auth.reducer';
import { reducers } from './app.reducers';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CounterStoreComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
