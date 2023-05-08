import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgserviceService} from "../ngservice.service";
import {NgForm} from "@angular/forms";
// import {Pet} from "../pet";

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit{
  // pet = new Pet();

  constructor(private _route:Router, private _service:NgserviceService) { }
  ngOnInit() {
  }

  // addPetformsubmit()
  // {
  //   this._service.addPetToRemote(this.pet).subscribe
  //   (
  //     data =>{
  //       console.log("Data added successfully");
  //       this._route.navigate(['petlist']);
  //     },
  //     error =>console.log("Error")
  //   )
  // }


  gotolist() {
    this._route.navigate(['petlist']);
  }

}
