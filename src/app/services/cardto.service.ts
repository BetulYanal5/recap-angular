import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardtoResponseModel } from '../models/cardtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardtoService {
  apiUrl='https://localhost:44382/api/cars/getcardetails'
  constructor(private httpClient:HttpClient) { }
  
  getCarDetails():Observable<CardtoResponseModel>{
    return this.httpClient.get<CardtoResponseModel>(this.apiUrl);
  }

}
 