import { Component, OnInit } from '@angular/core';
import {NgserviceService} from "../ngservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit{
  constructor(private _service: NgserviceService, private _route:Router ) {

  }

  ngOnInit() {
    this._service.fetchPetListFromRemote().subscribe(
      data=>console.log("response received"),
      error=>console.log("exception occurred")
    )
  }

  goToAddPet(){
    this._route.navigate(['/addpet']);
  }

}
