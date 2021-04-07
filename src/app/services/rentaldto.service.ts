import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentaldtoResponseModel } from '../models/rentaldtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentaldtoService {

  apiUrl='https://localhost:44382/api/rentals/getrentaldetails';
  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<RentaldtoResponseModel>{
    return this.httpClient.get<RentaldtoResponseModel>(this.apiUrl);
  }
}
