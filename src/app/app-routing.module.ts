import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrductComponent } from './prduct/prduct.component';
import { CalculatorComponent } from './calculator/calculator.component'
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component'
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';


const routes: Routes = [
  {path: 'product', component: PrductComponent},
 //{path: './product', redirectTo: 'product', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'directive', component: DirectivesComponent },
  {path: 'componentCommunication', component : ComponentCommunicationComponent },
  {path: 'login', component : LoginComponent },
  //, canActivate: [AuthGuard]
  {path: 'user', component : UserComponent }
  //, resolve: {data: UserResolver}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
