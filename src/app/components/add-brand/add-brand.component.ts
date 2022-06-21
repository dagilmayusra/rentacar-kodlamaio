import { Brand } from 'src/app/models/brand';
import { BrandListService } from 'src/app/services/brand-list.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
})
export class AddBrandComponent implements OnInit {
  brandAddForm: FormGroup;
  brand: Brand;

  constructor(
    private formBuilder: FormBuilder,
    private brandListService: BrandListService
  ) {}

  ngOnInit(): void {
    //this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  add() {
    if (this.brandAddForm.valid) {
      this.brand = Object.assign({}, this.brandAddForm.value);
    }
    this.brandListService.addBrand(this.brand).subscribe((data) => {
      console.log(data);
      alert(data.name + ' succesfully added');
      location.reload();
    });
  }
}
