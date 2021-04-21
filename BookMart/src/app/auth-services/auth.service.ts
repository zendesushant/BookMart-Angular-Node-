        import { HttpClient, HttpParams } from "@angular/common/http";
        import { Injectable } from "@angular/core";
        import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { Subject } from "rxjs";

        interface serverTokenResponse
        {
            token:string
            expiresIn:number
        }

        interface imageResponse
{
    id:string,
    title:string,
    imagePath:string
}
        @Injectable()
        export class AuthServices
        {
            isAuthenticated=false;
            spinnerStatus=new Subject<boolean>();

            constructor(private spinner:NgxSpinnerService,private route:ActivatedRoute,private router:Router, private http:HttpClient){

            }

           
            redirectToHomePage()
            {
                 this.router.navigate(['/home']);

            }


            redirectToLogin()
            {
                this.router.navigate(['/login']);
            }


            redirectToSignup()
            {
                
                this.router.navigate(['/signup'])
            }



            validateUserName(userName:string)
             {
                let queryParams=new HttpParams();
                queryParams=queryParams.append('username',userName)
                return this.http.get("http://localhost:3000/validateusername",{params:queryParams})
             }



            onLogin(loginCredentials:{username:string,password:string})
            {
                this.http.post<serverTokenResponse>("http://localhost:3000/login",loginCredentials).subscribe((loginInResponse)=>{

                    const now=new Date();
                    let expiresIn=now.getTime()+(loginInResponse.expiresIn*1000)
                    this.saveAuthData(loginInResponse.token,new Date(expiresIn))
                    this.router.navigate(['/home']);
                    this.setTimer(loginInResponse.expiresIn);
                    },
                    
                    error=>{
                        alert(error.error.errorMessage)
                    });;
            }

        

            onSignUp(signupCredentials:{username:string,password:string,mobile:string})
            {
                this.spinnerStatus.next(true);
                console.log(signupCredentials);
                setTimeout(()=>{

                    this.http.post<serverTokenResponse>("http://localhost:3000/signup",signupCredentials).subscribe((signUpResponse)=>{
                        this.isAuthenticated=true
                        const now=new Date();
                        
                        let expiresIn=now.getTime()+(signUpResponse.expiresIn*1000)
                        this.saveAuthData(signUpResponse.token,new Date(expiresIn))
                        this.spinnerStatus.next(true);
                        this.router.navigate(['/home']);
                        this.setTimer(expiresIn*1000);
                        
                        },
                        
                        error=>{
                            this.spinner.hide()
                            alert(error.error.errorMessage)
                        });


                },3000)
                
                }


            
            AutoLogin()
            {
                const token=this.getAuthDataFromLocalStorage();
                if(!token)
                {
                    this.redirectToLogin();
                }
                
                const now=new Date();
                const remainingTimeToExpire = token.expiresIn.getTime()-now.getTime();
                if(remainingTimeToExpire>0)
                {
                    this.isAuthenticated = true;
                    this.setTimer(remainingTimeToExpire/1000);
                }
                else
                {
                    this.isAuthenticated=false
                    this.removeAuthDataFromLocalStorage();
                    this.router.navigate(['/login']);
                    
                }
            }



            AutoLogout()
            {

                this.removeAuthDataFromLocalStorage();
                this.isAuthenticated=false;
                this.router.navigate(['/login']);
            }



            setTimer(expiresIn:number)
            {
                expiresIn=expiresIn*1000;
            console.log(expiresIn)
                setTimeout(()=>{
                    console.log("in "+expiresIn)
                this.AutoLogout();
                },expiresIn)
            }



            removeAuthDataFromLocalStorage()
            {
                localStorage.removeItem("token");
                localStorage.removeItem("expiresIn")
            }



            getAuthDataFromLocalStorage()
            {
                const token=localStorage.getItem("token");
                const expiresIn=localStorage.getItem("expiresIn");
                if(!token || !expiresIn)
                    return null;
                else
                    return {token:token,expiresIn:new Date(expiresIn)};
            }




            saveAuthData(token:string,expTime:Date)
            {
                this.isAuthenticated=true
                localStorage.setItem("token",token)
                localStorage.setItem("expiresIn",expTime.toISOString())
            }


            
            logout()
            {
                this.isAuthenticated=false
                this.removeAuthDataFromLocalStorage();
                this.redirectToLogin();
            }

            onPostImage(title:string,image:File)
            {
                console.log({title, image})
                const postData=new FormData()
                postData.append("title",title);
                postData.append("image",image, title);

                return this.http.post<imageResponse>('http://localhost:3000/PostImage',postData)
            }
        
}

