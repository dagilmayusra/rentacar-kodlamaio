import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { RentComponent } from './components/rent/rent.component';
import { ColorsComponent } from './common/colors/colors.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { UpdateColorComponent } from './components/update-color/update-color.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { CarsComponent } from './components/cars/cars.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { UpdateBrandComponent } from './components/update-brand/update-brand.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { LoginGuard } from './guards/login.guard';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageBackGuard } from './guards/page-back.guard';

const routes: Routes = [
  {path:"", pathMatch:'full',component:CarsComponent},
  {path:"addBrand",component:AddBrandComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard]},
  {path:"updateBrand/:id", component:UpdateBrandComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard]},
  {path:"addColor", component:AddColorComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard]},
  {path:"updateColor/:id", component:UpdateColorComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard]},
  {path:"addCar", component:AddCarComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard]},
  {path:"updateCar/:id",component:UpdateCarComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard]},
  {path:"cars/carId/:id", component:CarsComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard]},
  {path:"colors/colorId/:id", component:CarsComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard]},
  {path:"cars/rent/:id", component:RentComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard]},
  {path:"login", component:LoginPageComponent},
  {path:"register", component:RegisterComponent},
  {path:"contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
