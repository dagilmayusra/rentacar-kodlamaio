import { AdditionalServicesService } from './../../services/additional-services.service';
import { AdditionalServices } from './../../models/additionalServices';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/car.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  rentAddForm:FormGroup;
  car:Car
  selectedId: number;
  additionalServices:AdditionalServices[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private carService:CarService,
    private additionalServicesService:AdditionalServicesService
  ) { }

  ngOnInit(): void {
    this.getCarsByBrandId();
    this.getAdditionalServices();
  }
  
  getCarsByBrandId(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedId=params['id'];
    })
    this.carService.getCarById(this.selectedId).subscribe(data=>{
      this.car=data;
    })
  }

  getAdditionalServices(){
    this.additionalServicesService.getAdditioanalService().subscribe(data=>{
      this.additionalServices=data;
    })
  }

}
