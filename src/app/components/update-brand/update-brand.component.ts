import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrandListService } from '../../services/brand-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css'],
})
export class UpdateBrandComponent implements OnInit {
  updateBrandForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(
    private brandListService: BrandListService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBrandById();
  }

  getBrandById() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.brandListService.getBrandById(params['id']).subscribe((data) => {
          this.updateBrandForm.controls['id'].setValue(data.id);
          this.updateBrandForm.controls['name'].setValue(data.name);
          this.updateBrandForm.controls['image'].setValue(data.image);
        });
    });
  }

  update() {
    if (this.updateBrandForm.valid) {
      this.brandListService
      .updateBrand(this.updateBrandForm.value)
      .subscribe((data) => {
        alert('güncellendi');
        window.location.reload();
      });
    }
  }
}
