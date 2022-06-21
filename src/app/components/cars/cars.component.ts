import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  selectedBrandId:number
  cars:Car[];

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.getCarsByBrandId()
  }

  getCarList(){
    this.carService.getCars().subscribe(data=>{
      this.cars=data;
    })
  }
  deleteCars(val:number){
    if(confirm("are you sure want to delete?")){
      this.carService.deleteCar(val).subscribe()
      location.reload()
    }
  }
  getCarsByBrandId(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedBrandId=params['id'];
    })
    if(this.selectedBrandId==undefined){
      this.carService.getCars().subscribe(data => {
        this.cars = data;
      })
    }
    else{
      this.carService.getCarByBrand(this.selectedBrandId).subscribe(data =>{
        this.cars = data
        console.log(this.selectedBrandId)
      })
    }
  }
  getCarByColorId(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedBrandId=params['id'];
    })
    if(this.selectedBrandId==undefined){
      this.carService.getCars().subscribe(data => {
        this.cars = data;
      })
    }
    else{
      this.carService.getCarByBrand(this.selectedBrandId).subscribe(data =>{
        this.cars = data
        console.log(this.selectedBrandId)
      })
    }
  }
  goToRent(car){
    this.carService.getCars().subscribe(data=>{
      this.cars=data;
    })
  }
  addToCart(car:Car){
    this.cartService.addToCart(car);
  }
}


