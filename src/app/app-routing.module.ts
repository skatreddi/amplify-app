import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AboutVoiceMRComponent } from './aboutvoicemr/aboutvoicemr.component';
import { VoicemrgoalComponent } from './voicemrgoal/voicemrgoal.component';

// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'signin',
    component: SigninComponent,
  },
  {
    path:'aboutvoicemr',
    component: AboutVoiceMRComponent,
  },
  {
    path:'voicemrgoal',
    component: VoicemrgoalComponent,
  },
  {
    path: 'vehicle/:id',
    component: VehicleComponent,
  },
  {
    path: 'vehicle',
    component: VehicleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // declarations: [ HeaderComponent,FooterComponent ],
})
export class AppRoutingModule { }