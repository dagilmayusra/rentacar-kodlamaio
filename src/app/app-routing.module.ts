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

const routes: Routes = [
  {path:"", pathMatch:'full',component:CarsComponent},
  {path:"addBrand",component:AddBrandComponent},
  {path:"updateBrand/:id", component:UpdateBrandComponent},
  {path:"addColor", component:AddColorComponent},
  {path:"updateColor/:id", component:UpdateColorComponent},
  {path:"addCar", component:AddCarComponent, canActivate:[LoginGuard]},
  {path:"updateCar/:id",component:UpdateCarComponent},
  {path:"cars/carId/:id", component:CarsComponent},
  {path:"colors/colorId/:id", component:CarsComponent},
  {path:"cars/rent/:id", component:RentComponent},
  {path:"login", component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
