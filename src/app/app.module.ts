import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule}from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EReceiptsComponent } from './e-receipts/e-receipts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ThousandPipe } from './thousand.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';
import { ExOneComponent } from './ex-one/ex-one.component';
import { ExTwoComponent } from './ex-two/ex-two.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RequestComponent } from './request/request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactUsComponent,
    NotFoundComponent,
    EReceiptsComponent,
    UsersComponent,
    DetailsComponent,
    DashboardComponent,
    WalletComponent,
    TransactionComponent,
    ThousandPipe,
    TwoComponent,
    OneComponent,
    ExOneComponent,
    ExTwoComponent,
    SignInComponent,
    SignUpComponent,
    RequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
