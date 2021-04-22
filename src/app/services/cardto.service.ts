import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

import { Cardto } from '../models/cardto';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardtoService {
  apiUrl='https://localhost:44382/api/';
  constructor(private httpClient:HttpClient) { }
  
  getCarDetails():Observable<ListResponseModel<Cardto>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Cardto>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Cardto>>{
    let newPath=this.apiUrl+"cars/getcarsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Cardto>>(newPath);
  }}
 