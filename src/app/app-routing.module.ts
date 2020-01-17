import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrductComponent } from './prduct/prduct.component';
import { CalculatorComponent } from './calculator/calculator.component'
import { PipesComponent } from './pipes/pipes.component';


const routes: Routes = [
  {path: 'product', component: PrductComponent},
 //{path: './product', redirectTo: 'product', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'pipes', component: PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
