import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


import { TeamComponent } from './pages/team/team.component';
import { ArticleComponent } from './pages/article/article.component';
import { AnkitComponent } from './pages/ankit/ankit.component';
import { SachinComponent } from './pages/sachin/sachin.component';
import { NitinComponent } from './pages/nitin/nitin.component';
import { AuditComponent } from './pages/audit/audit.component';
import { TaxationComponent } from './pages/taxation/taxation.component';
import { ManagementComponent } from './pages/management/management.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { StartupComponent } from './pages/startup/startup.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { IndustriesComponent } from './pages/industries/industries.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  
  {path:'article',component:ArticleComponent},
  {path:'team',component:TeamComponent}, 
  
  {path:'ankit',component:AnkitComponent},
  {path:'sachin',component:SachinComponent},
  {path:'nitin',component:NitinComponent},
  {path:'audit',component:AuditComponent},
  {path:'taxation',component:TaxationComponent},
  {path:'management',component:ManagementComponent},
  {path:'corporate',component:CorporateComponent},
  {path:'startup',component:StartupComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'industry',component:IndustriesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
