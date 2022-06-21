import { Color } from './../../models/color';
import { ColorService } from './../../services/color.service';
import { BrandListService } from './../../services/brand-list.service';
import { CarService } from './../../services/car.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carAddForm:FormGroup;
  car:Car;
  brands:Brand[];
  colors:Color[];

  constructor(
    private FormBuilder:FormBuilder,
    private carService:CarService,
    private brandListService:BrandListService,
    private colorService:ColorService,
  ) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrand();
    this.getColor()
  }

  createCarAddForm(){
    this.carAddForm=this.FormBuilder.group({
      colorId: ['', Validators.required],
      brandId: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      brandName: [''],
      colorName: [''],
      description: ['', Validators.required],
    });
  }
  add(){
    let selectedCategory =this.brands.find(element=>element.id==this.carAddForm.value.categoryId);
    let selectedColor =this.colors.find(element=> element.id ==this.carAddForm.value.colorId);
    this.carAddForm.value.categoryId=parseInt(this.carAddForm.value.categoryId)
    this.carAddForm.value.colorId=parseInt(this.carAddForm.value.colorId)
    this.carAddForm.value.categoryName=selectedCategory.name;
    this.car=Object.assign({}, this.carAddForm.value)
    this.carService.addCar(this.car).subscribe((data)=>{
      console.log(data),
      alert('succesfully added')
    })
  }
  getBrand(){
    this.brandListService.getBrands().subscribe(data=>{
      this.brands=data
    })
  }
  getColor(){
    this.colorService.getColors().subscribe(data=>{
      this.colors=data
    })
  }

}

