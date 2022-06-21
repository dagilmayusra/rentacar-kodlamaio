import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdditionalServices } from '../models/additionalServices';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServicesService {

  constructor(private httpClient:HttpClient) { }

  getAdditioanalService():Observable<AdditionalServices[]>{
    return this.httpClient.get<AdditionalServices[]>("http://localhost:3000/additionalServices")
  }
}
