import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthServices } from './auth-services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-services/auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { AppService } from './auth-services/app.service';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ChildRouteComponent } from './child-route/child-route.component';
import { ImageComponent } from './image/image.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    BooksComponent,
    CartListComponent,
    EmptyCartComponent,
    ThankYouComponent,
    ChildRouteComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [AuthServices,AuthGuardService,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
