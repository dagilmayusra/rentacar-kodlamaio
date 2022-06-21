import { ActivatedRoute } from '@angular/router';
import { ColorService } from './../../services/color.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-color',
  templateUrl: './update-color.component.html',
  styleUrls: ['./update-color.component.css']
})
export class UpdateColorComponent implements OnInit {

  updateColorForm=new FormGroup({
    id:new FormControl(0, [Validators.required]),
    colorName: new FormControl('',[Validators.required]),
    image: new FormControl('', [Validators.required])
  });

  constructor(
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  getColorById(){
    this.activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.colorService.getColorById(params['id']).subscribe((data) => {
          this.updateColorForm.controls['id'].setValue(data.id);
          this.updateColorForm.controls['colorName'].setValue(data.colorName);
          this.updateColorForm.controls['image'].setValue(data.image);
        })
    })
  }

  update(){
    if(this.updateColorForm.valid){
      this.colorService.updateColor(this.updateColorForm.value).subscribe((data)=>{
        alert('güncellendi');
        window.location.reload();
      })
    }
  }

}
