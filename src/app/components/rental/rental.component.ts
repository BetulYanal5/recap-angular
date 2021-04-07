import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { Rentaldto } from 'src/app/models/rentaldto';
import { RentalService } from 'src/app/services/rental.service';
import { RentaldtoService } from 'src/app/services/rentaldto.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[]=[];
  rentaldtos:Rentaldto[]=[];
  constructor(private rentalService:RentalService,private rentaldtoService:RentaldtoService) { }

  ngOnInit(): void {
    this.getRentals();
    this.getRentalDetails();
  }
   
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
    })
  }
  getRentalDetails(){
    this.rentaldtoService.getRentalDetails().subscribe(response=>{
      this.rentaldtos=response.data;
    })
  }
}


  