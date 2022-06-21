import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/car.service';
import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  colors:Color[];

  constructor(
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getColorName();
  }
  
  getColorName(){
    this.colorService.getColors().subscribe(data=>{
      this.colors=data;
    })
  }
  deleteColorName(val:number){
    if(confirm("Are you sure want to delete")){
      this.colorService.deleteColor(val).subscribe()
      location.reload();
    }
  }
  getColorId(color: Color){
    window.location.href=`colors/colorId/${color.id}`
  }
  
}
