import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{NavComponent} from './nav/nav.component';
import{ContactUsComponent} from './contact-us/contact-us.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import{NotFoundComponent} from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AuthenticateGuard } from './authenticate.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {RequestComponent} from './request/request.component'


const routes: Routes = [
  
{path:'',component:HomeComponent},
{path:'',component: NavComponent},
{path:'contact-us',component:ContactUsComponent},
{path:'users',component:UsersComponent},
{path:'sign-in',component:SignInComponent},
{path:'sign-up',component:SignUpComponent},
{path:'wallet/:i',component:WalletComponent},
{path:'request',component:RequestComponent},
{path:'details/:i',component:DetailsComponent},
{path:'dashboard',component:DashboardComponent, canActivate:[AuthenticateGuard], children:[
  {path:'wallet',component:WalletComponent},
  {path:'users',component:UsersComponent},
  {path:'transaction',component:TransactionComponent},
]},
{path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
