import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { GoogleMapsModule } from '@angular/google-maps';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    LoginPageComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
