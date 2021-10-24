import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import {MatMenuModule} from '@angular/material/menu'; 
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AppsyncService } from './appsync.service';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AboutVoiceMRComponent } from './aboutvoicemr/aboutvoicemr.component';
import { SigninComponent } from './signin/signin.component';
import { VoicemrgoalComponent } from './voicemrgoal/voicemrgoal.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'aboutvoicemr',
    component: AboutVoiceMRComponent,
  },
  {
    path:'signin',
    component: SigninComponent,
  },
  {
    path: 'vehicle/:id',
    component: VehicleComponent,
  },
  {
    path: 'newvehicle',
    component: VehicleComponent,
  }
];

/* Configure Amplify resources */

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    VehicleComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutVoiceMRComponent,
    SigninComponent,
    VoicemrgoalComponent,
    TopnavComponent,
  ],
  imports: [
    // Angular
    RouterModule.forRoot(routes),
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    HttpClientModule,
  ],
  providers: [
    AppsyncService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }