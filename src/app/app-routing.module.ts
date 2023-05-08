import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetlistComponent} from "./petlist/petlist.component";
import {AddpetComponent} from "./addpet/addpet.component";
import {EditpetComponent} from "./editpet/editpet.component";
import {ViewpetComponent} from "./viewpet/viewpet.component";

const routes: Routes = [
  {path: '', component: PetlistComponent},
  {path: 'addpet', component:AddpetComponent},
  {path: 'editpet', component:EditpetComponent},
  {path: 'viewpet', component:ViewpetComponent},
  {path: 'petlist', component:PetlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
