import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpetComponent } from './addpet/addpet.component';
import { PetlistComponent } from './petlist/petlist.component';
import { EditpetComponent } from './editpet/editpet.component';
import { ViewpetComponent } from './viewpet/viewpet.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
//import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpetComponent,
    PetlistComponent,
    EditpetComponent,
    ViewpetComponent,
    //PetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
