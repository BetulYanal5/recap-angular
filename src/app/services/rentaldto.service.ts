import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rentaldto } from '../models/rentaldto';


@Injectable({
  providedIn: 'root'
})
export class RentaldtoService {

  apiUrl='https://localhost:44382/api/rentals/getrentaldetails';
  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<Rentaldto>>{
    return this.httpClient.get<ListResponseModel<Rentaldto>>(this.apiUrl);
  }
}
