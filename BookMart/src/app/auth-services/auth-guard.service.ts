import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthServices } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate
{
    constructor(private router:Router,private authService:AuthServices){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
    {
        if(this.authService.isAuthenticated)
        return true;
        else
        this.router.navigate(['/login']);
        
    }
}