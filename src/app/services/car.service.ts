import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<Car[]>{
    return this.httpClient.get<Car[]>(" http://localhost:3000/cars");
  }
  deleteCar(val:number):Observable<Car>{
    return this.httpClient.delete<Car>("http://localhost:3000/cars/"+val);
  }
  addCar(car):Observable<Car>{
    return this.httpClient.post<Car>(" http://localhost:3000/cars",car);
  }
  updateCar(car):Observable<Car>{
    return this.httpClient.put<Car>("http://localhost:3000/cars/"+car.id,car);
  }
  getCarById(carId:number):Observable<Car>{
    return this.httpClient.get<Car>("http://localhost:3000/cars/"+carId)
  }
  getCarByBrand(val:number):Observable<Car[]>{
    let newPath = "http://localhost:3000/cars" + ("?brandId=") + val
    return this.httpClient.get<Car[]>(newPath)
  }
  addRent(car):Observable<Car>{
    return this.httpClient.post<Car>(" http://localhost:3000/cars/",car);
  }
  getCarRent(val:number):Observable<Car[]>{
    let newPath = "http://localhost:3000/cars/" + ("?carId=") + val //car.Id
    return this.httpClient.get<Car[]>(newPath)
  }

}
