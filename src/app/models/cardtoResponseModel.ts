import { ResponseModel } from "./responseModel";
import { Cardto } from "./cardto";
export interface CardtoResponseModel extends ResponseModel{
    data:Cardto[]
}