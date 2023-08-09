import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterpageService } from '../registerpage.service';
import { HomepageService } from '../homepage.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { NGXLogger } from 'ngx-logger';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  registerno:any="";
  password:any="";
  retUrl:any="";
  adminreg:any;
  adminpassword:any;
  constructor(private fb:FormBuilder,private http:HttpClient,private login:HomepageService,private route:Router,
    private logservice:HomepageService,private router:ActivatedRoute,private authenticationService:HomepageService,private logger: NGXLogger) { }

    loginForm=this.fb.group({
      registernovalue:[,Validators .required],
      passwordvalue:[,Validators .required],

    })
  ngOnInit() {
  }

  errors:any=false;

  submitLoginForm(reg:any){
    // console.log();
    sessionStorage.setItem('Registerno',reg);
   this.student();
   this.teacher();
   this.admin();
  if(this.errors){
    alert("Check your data");
    this.refresh();
  }
  }


student(){

  this.http.get<any>(environment. studentDataBaseLink).subscribe(res=>
  {
    const user=res.find((a:any)=>{
     return a.registernovalue===this.loginForm.value.registernovalue && a.passwordvalue===this.loginForm.value.passwordvalue
    });
    if(user){
      alert("Login successfully");
      this.logger.error("Your log message goes here");
      this.logger.warn("Multiple", "Argument", "support");
      sessionStorage.setItem('loginUser',JSON.stringify(user));
      sessionStorage.setItem('usersuccess','true');
        this.authenticationService.userlogin=true;
      this.route.navigate(['/Homepage'])
    }
    else{
      this.errors=true;
    }
  });
}

refresh():void{
  window.location.reload();
}

teacher(){
  this.http.get<any>(environment.teacherDataBaseLink).subscribe(res=>{
    const user=res.find((a:any)=>{
   return   a.registernovalue===this.loginForm.value.registernovalue && a.passwordvalue===this.loginForm.value.passwordvalue
    });
    if(user){
      alert("Login successfully");
      sessionStorage.setItem('loginUser',JSON.stringify(user));
      sessionStorage.setItem('usersuccess','true');
        this.authenticationService.userlogin=true;
      this.route.navigate(['/Teacher-Homepage'])
    }
    else{
      this.errors=true;
    }
  });
}

admin(){

  this.http.get<any>(environment.AdminDataBaseLink).subscribe(res=>{
    const user=res.find((a:any)=>{
    return  a.registernovalue===this.loginForm.value.registernovalue && a.passwordvalue===this.loginForm.value.passwordvalue
    });
    if(user){
      alert("Login successfully");
      sessionStorage.setItem('loginUser',JSON.stringify(user));
      sessionStorage.setItem('usersuccess','true');
        this.authenticationService.userlogin=true;
      this.route.navigate(['/Admin-Homepage'])
    }
    else{
      this.errors=true;
    }
  });
}

loggedIn(){
  this.logservice. userloggedin(this.registerno,this.password);
  if(this.retUrl!=null)
  this.route.navigate([this.retUrl]);
}

}
