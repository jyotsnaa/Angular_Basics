import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrductDetailsComponent } from './prduct-details/prduct-details.component';
import { PrductComponent } from './prduct/prduct.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PipesComponent } from './pipes/pipes.component';

import { CustPipesComponent } from './customPipes.pipe';
import { FilterPipesComponent } from './filterPipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrductDetailsComponent,
    PrductComponent,
    CalculatorComponent,
    PipesComponent,
    CustPipesComponent,
    FilterPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
