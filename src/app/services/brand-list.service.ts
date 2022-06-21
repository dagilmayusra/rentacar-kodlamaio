import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandListService {

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>(" http://localhost:3000/brands");
  }
  deleteBrand(val: number):Observable<Brand>{
    return this.httpClient.delete<Brand>(" http://localhost:3000/brands/"+val);
  }
  addBrand(brand):Observable<Brand>{
    return this.httpClient.post<Brand>(" http://localhost:3000/brands/",brand);
  }
  updateBrand(brand):Observable<Brand>{
    return this.httpClient.put<Brand>("http://localhost:3000/brands/"+brand.id,brand)
  }
  getBrandById(brandId:number):Observable<Brand>{
    return this.httpClient.get<Brand>("http://localhost:3000/brands/"+brandId)
  }
}
