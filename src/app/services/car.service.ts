import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44382/api/';
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"/cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
    };

    getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
   
  }
 
