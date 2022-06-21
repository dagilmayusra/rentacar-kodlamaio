import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandListService } from 'src/app/services/brand-list.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands:Brand[];

  constructor(private brandListService:BrandListService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandListService.getBrands().subscribe(data=>{
      this.brands=data;
    })
  }
  
  deleteBrands(val:number){
    if(confirm("Are you sure want to delete?")){
      this.brandListService.deleteBrand(val).subscribe()
      location.reload()
    }
  }
  getBrandId(brand:Brand){
    window.location.href=`brands/brandId/${brand.id}`
  }

}
