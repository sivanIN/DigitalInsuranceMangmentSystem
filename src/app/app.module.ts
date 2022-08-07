import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { HomeComponent } from './components/home/home.component';
import { HealthComponent } from './components/health/health.component';
import { Healthpolicy } from './healthpolicy';
import {FormsModule} from  '@angular/forms'
import { HealthpolicydetailsComponent } from './components/healthpolicydetails/healthpolicydetails.component';
import { UserpolicypageComponent } from './components/userpolicypage/userpolicypage.component';
import { AdminpolicylistComponent } from './components/adminpolicylist/adminpolicylist.component';
import { LoginComponent } from './components/login/login.component';
import { AdminstatusformComponent } from './components/adminstatusform/adminstatusform.component';
import { AuthGuard } from './auth.guard';
import { PolicydetailsforadminComponent } from './components/policydetailsforadmin/policydetailsforadmin.component';
import { HomepolicydetailsComponent } from './components/homepolicydetails/homepolicydetails.component';
import { HomepolicyFormComponent } from './components/homepolicy-form/homepolicy-form.component';
import { HealthPolicyFormComponent } from './components/health-policy-form/health-policy-form.component';


const route:Routes=[
  {path:"",component:WelcomeComponent},
  {path:"hospital",component:HospitalComponent},
  {path:"homepoliciy",component:HomeComponent},
  {path:"healthpoliciy",component:HealthComponent},
  {path:"healthpolicy/:policyid",canActivate :[AuthGuard], component:HealthpolicydetailsComponent},
  {path:"mypolicy",canActivate :[AuthGuard],component:UserpolicypageComponent},
  {path:"admin",component:AdminpolicylistComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  // {path:"adminstatus/:id",component:AdminstatusformComponent},
  {path:"adminpolicydetails",component:PolicydetailsforadminComponent},
  {path:"homepolicydetails/:policyid",canActivate :[AuthGuard],component:HomepolicydetailsComponent},
  {path:"newhealthpolicy",component:HealthPolicyFormComponent},
  {path:"newhomepolicy",component:HomepolicyFormComponent},
  {path:"newhomepolicy/:id",component:HomepolicyFormComponent},
  {path:"newhealthpolicy/:id",component:HealthPolicyFormComponent},
  

  
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    WelcomeComponent,
    HospitalComponent,
    HomeComponent,
    HealthComponent,
    HealthpolicydetailsComponent,
    UserpolicypageComponent,
    AdminpolicylistComponent,
    LoginComponent,
    AdminstatusformComponent,
    PolicydetailsforadminComponent,
    HomepolicydetailsComponent,
    HomepolicyFormComponent,
    HealthPolicyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
