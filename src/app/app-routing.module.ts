import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './components/vehicle/vehicle.component';



const routes: Routes = [
  {
    path: 'vehicle/:id',
    component: VehicleComponent,
  },
  {
    path: 'newvehicle',
    component: VehicleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }