import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// import {Pet} from "./pet";

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchPetListFromRemote():Observable<any> {
    return this._http.get<any>("http://localhost:8080/getpetlist");
  }

  // addPetToRemote(pet: Pet): Observable<any>{
  //   return this._http.post<any>('http://localhost:8080/addpet',pet);
  // }
}
