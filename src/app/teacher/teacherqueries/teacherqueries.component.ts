import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { RegisterpageService } from 'src/app/registerpage.service';

@Component({
  selector: 'app-teacherqueries',
  templateUrl: './teacherqueries.component.html',
  styleUrls: ['./teacherqueries.component.css']
})
export class TeacherqueriesComponent implements OnInit {

  constructor(private fb: FormBuilder, private register: RegisterpageService, private route: Router,private http:HttpClient) { }

  registerForm = this.fb.group({
    namevalue: [, Validators.required],
    textvalue:[,Validators.required]
  });
  loggedTeacher:any;
  query:any;
  response:any;
  ngOnInit() {
    let sessionUser = sessionStorage.getItem('loginUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedTeacher = JSON.parse(sessionUser);
      // this.refresh(sessionUser);
    }
    this.register.getQueries().subscribe(data=>{
      this.query=data;
    })

    // this.http.get<any>("http://localhost:3000/Adminresponse").subscribe(value=>{
    //   const adminresponse=value.find((a:any)=>{
    //     return a.RegisterNumber===this.loggedTeacher.registernovalue;
    //   });
    //   if(adminresponse){
    //     this.response=adminresponse;
    //   }
    // })

    this.searchResponse().subscribe(data=>{
      this.response=data
    })
  }

  searchResponse(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/Adminresponse").pipe(
      map((data) => {
        return data.filter(
          (item:any) =>
            item.RegisterNumber=== this.loggedTeacher.registernovalue
        );
      })
    );
  }

  submitForm(){
    var student={
      "Name":this.loggedTeacher.namevalue,
      "RegisterNumber":this.loggedTeacher.registernovalue,
      "Phone":this.loggedTeacher.mobilevalue,
      "QueryTitle":this.registerForm.value.namevalue,
      "Description":this.registerForm.value.textvalue

    }
    this.register.Queries(student).subscribe(data=>{
      alert("Queries Form Submit");
      this.registerForm.reset();
    })
}
}
