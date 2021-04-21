import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-services/auth-guard.service';
import { CartListComponent } from './cart-list/cart-list.component';
import { ChildRouteComponent } from './child-route/child-route.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'posts',component:ImageComponent,canActivate:[AuthGuardService]},
  {path:'home/cart',component:CartListComponent,canActivate:[AuthGuardService]},
  {path:'page-not-found',component:PageNotFoundComponent},
  {path:"",component:LoginComponent},
  {path:'**',redirectTo:'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
