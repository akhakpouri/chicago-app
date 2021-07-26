import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../modules/material.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class ItemsModule { }
