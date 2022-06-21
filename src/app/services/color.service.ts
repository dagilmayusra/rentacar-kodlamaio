import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<Color[]>{
    return this.httpClient.get<Color[]>(" http://localhost:3000/colors");
  }
  deleteColor(val:number):Observable<Color>{
    return this.httpClient.delete<Color>("http://localhost:3000/colors/"+val);
  }
  addColor(color):Observable<Color>{
    return this.httpClient.post<Color>("http://localhost:3000/colors/",color);
  }
  updateColor(color):Observable<Color>{
    return this.httpClient.put<Color>("http://localhost:3000/colors/"+color.id,color);
  }
  getColorById(colorId:number):Observable<Color>{
    return this.httpClient.get<Color>("http://localhost:3000/brands/"+colorId)
  }
  getColorByBrand(val:number):Observable<Color[]>{
    let newPath= "http://localhost:3000/colors" + ("?brandId=") + val
    return this.httpClient.get<Color[]>(newPath)
  }
}
