import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { TeamComponent } from './pages/team/team.component';
import { ArticleComponent } from './pages/article/article.component';
import { AnkitComponent } from './pages/ankit/ankit.component';
import { SachinComponent } from './pages/sachin/sachin.component';
import { NitinComponent } from './pages/nitin/nitin.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { AuditComponent } from './pages/audit/audit.component';
import { TaxationComponent } from './pages/taxation/taxation.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { ManagementComponent } from './pages/management/management.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { StartupComponent } from './pages/startup/startup.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    TeamComponent,
    ArticleComponent,
    AnkitComponent,
    SachinComponent,
    NitinComponent,
    IndustriesComponent,
    AuditComponent,
    TaxationComponent,
    CorporateComponent,
    ManagementComponent,
    AccountsComponent,
    StartupComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
