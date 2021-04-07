
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Cardto } from 'src/app/models/cardto';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';
import { CardtoService } from 'src/app/services/cardto.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  cardtos:Cardto[]=[];
  dataLoaded=false;
  constructor(private carService:CarService,private cardtoService:CardtoService) {}

  ngOnInit(): void {
    //this.getCars();
    this.getCarDetails();
  }
  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  
  getCarDetails(){
    this.cardtoService.getCarDetails().subscribe(response=>{
      this.cardtos=response.data;
      this.dataLoaded=true;
    })
  }
  
}
