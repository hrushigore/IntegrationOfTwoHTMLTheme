import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { Routes,RouterModule } from '@angular/router';
import { MasterComponent } from './theme-master/master.component';
import { HomeComponent } from './theme-master/home/home.component';
import { BusinessListingComponent } from './theme-master/business-listing/business-listing.component';
import { PricingComponent } from './theme-master/pricing/pricing.component';
import { FaqComponent } from './theme-master/faq/faq.component';
import { ContactComponent } from './theme-master/contact/contact.component'
import { DefaultComponent } from './admin/default/default.component';
import { AtjoinLoginComponent } from './theme-master/atjoin-login/atjoin-login.component';
import { AtjoinRegisterComponent } from './theme-master/atjoin-register/atjoin-register.component';
import { BlackComponent } from './admin/black/black.component';

const routes: Routes=[
 
  
  {
    path:'',
    component:MasterComponent,
    children: [
      { path:'',  component:HomeComponent,},
      {path:'home',component:HomeComponent}, 
      {path:'business-listing', component:BusinessListingComponent},
      {path:'pricing',component:PricingComponent}, 
      {path:'faq',component:FaqComponent}, 
      {path:'contact',component:ContactComponent}, 
      {path:'register',component:AtjoinRegisterComponent}, 
      {path:'atjoin-login',component:AtjoinLoginComponent}, 
     
    ]
  },
  { path:'login',  component:LoginComponent,  },
 
  {
    path:'',
    component:AdminComponent,
    children: [
      { path:'dash',  component:DefaultComponent,  },
      { path:'login',  component:LoginComponent,  },
      { path:'default',  component:DefaultComponent, },
      { path:'black',  component:DefaultComponent, }
     
    ]
  },
  {
    path:'**',
    component:MasterComponent,
    children: [
      {path:'**' , component:HomeComponent}
     
    ]
  },
  
  
]



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    MasterComponent,
    HomeComponent,
    BusinessListingComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    DefaultComponent,
    AtjoinLoginComponent,
    AtjoinRegisterComponent,
    BlackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
