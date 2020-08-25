import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrductDetailsComponent } from './prduct-details/prduct-details.component';
import { PrductComponent } from './prduct/prduct.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PipesComponent } from './pipes/pipes.component';

import { CustPipesComponent } from './customPipes.pipe';
import { FilterPipesComponent } from './filterPipes.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { DirectiveCustomDirective } from './directives/directive-custom.directive';
import { DirectiveCustomAttribute } from './directives/directive-CustomAttribute.directive';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { DropdownDirective } from './dropdown.directive';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';

@NgModule({
  declarations: [
    AppComponent,
    PrductDetailsComponent,
    PrductComponent,
    CalculatorComponent,
    PipesComponent,
    CustPipesComponent,
    FilterPipesComponent,
    DirectivesComponent,
    DirectiveCustomDirective,
    DirectiveCustomAttribute,
    LoginComponent,
    UserComponent,
    OrderComponent,
    DropdownDirective,
    ComponentCommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
