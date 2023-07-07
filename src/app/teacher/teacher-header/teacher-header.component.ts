import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/homepage.service';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.css']
})
export class TeacherHeaderComponent {
  usersuccess1=false;
  constructor(private route:Router,private homepageservice:HomepageService) {
    this.usersuccess1=Boolean(sessionStorage.getItem("usersuccess"))||this.homepageservice.userlogin
   }
  ngOnInit() {
  }
  logout(){
    this.homepageservice.userlogin=false;
    this.usersuccess1=false;
    sessionStorage.clear();
    this.route.navigate(['Indexpage'])
}
}
