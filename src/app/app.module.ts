import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import { BrandListComponent } from './common/navi/sidebar/brand-list/brand-list.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { ColorsComponent } from './common/colors/colors.component';
import { CarsComponent } from './components/cars/cars.component';
import { UpdateBrandComponent } from './components/update-brand/update-brand.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { UpdateColorComponent } from './components/update-color/update-color.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { RentComponent } from './components/rent/rent.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { AdditionalServicesComponent } from './components/additional-services/additional-services.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandListComponent,
    AddBrandComponent,
    ColorsComponent,
    CarsComponent,
    UpdateBrandComponent,
    AddColorComponent,
    UpdateColorComponent,
    UpdateCarComponent,
    AddCarComponent,
    RentComponent,
    CartSummaryComponent,
    AdditionalServicesComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
