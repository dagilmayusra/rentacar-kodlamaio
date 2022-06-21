import { ColorService } from './../../services/color.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  colorAddForm:FormGroup;
  color:Color;

  constructor(
    private formBuilder:FormBuilder,
    private colorService:ColorService
  ) { }

  ngOnInit(): void {
  }

  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
      colorName: ['',Validators.required],
      Image:['',Validators.required]
    })
  }
  add(){
    if(this.colorAddForm.valid){
      this.color=Object.assign({}, this.colorAddForm.value);
    }
    this.colorService.addColor(this.color).subscribe((data)=>{
      console.log(data);
      alert(data.colorName+'succesfully added');
      location.reload();
    })
  }

}
