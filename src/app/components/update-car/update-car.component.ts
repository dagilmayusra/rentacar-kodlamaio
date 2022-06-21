import { ColorService } from './../../services/color.service';
import { BrandListService } from './../../services/brand-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  brands:Brand[];
  colors:Color[];
  cars:Car[];

  updateCarForm= new FormGroup({
    id: new FormControl(0, [Validators.required]),
    img: new FormControl("", [Validators.required]),
    colorId: new FormControl(0),
    brandId: new FormControl(0),
    dailyPrice: new FormControl(0, [Validators.required]),
    brandName: new FormControl('', [Validators.required]),
    colorName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private brandListService:BrandListService,
    private colorService:ColorService
  ) { }

  ngOnInit(): void {
    this.getCarById();
    this.getBrand();
    this.getcolor();
  }

  getCarById(){
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id'])
        this.carService.getCarById(params['id']).subscribe((data)=>{
          this.updateCarForm.controls['id'].setValue(data.id);
          this.updateCarForm.controls['img'].setValue(data.img);
          this.updateCarForm.controls['brandId'].setValue(data.brandId);
          this.updateCarForm.controls['colorId'].setValue(data.colorId);
          this.updateCarForm.controls['dailyPrice'].setValue(data.dailyPrice);
          this.updateCarForm.controls['brandName'].setValue(data.brandName);
          this.updateCarForm.controls['colorName'].setValue(data.colorName);
          this.updateCarForm.controls['description'].setValue(data.description);
        })
    })
  }
  update(){
    if(this.updateCarForm.valid){
      this.carService
      .updateCar(this.updateCarForm.value)
      .subscribe((data)=>{
        alert('güncellendi');
        window.location.reload();
      })
    }
  }
  getBrand(){
    this.brandListService.getBrands().subscribe(data=>{
      this.brands=data;
    })
  }
  getcolor(){
    this.colorService.getColors().subscribe(data=>{
      this.colors=data
    })
  }

}