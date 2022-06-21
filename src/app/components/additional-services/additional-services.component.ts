import { AdditionalServices } from './../../models/additionalServices';
import { AdditionalServicesService } from './../../services/additional-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.css']
})
export class AdditionalServicesComponent implements OnInit {

  additionalServices:AdditionalServices[];

  constructor(private additionalServicesService:AdditionalServicesService) { }

  ngOnInit(): void {
    this.getAdditionalServices();
  }

  getAdditionalServices(){
    this.additionalServicesService.getAdditioanalService().subscribe(data=>{
      this.additionalServices=data;
    })
  }

}
