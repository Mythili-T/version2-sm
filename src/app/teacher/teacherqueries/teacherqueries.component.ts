import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterpageService } from 'src/app/registerpage.service';

@Component({
  selector: 'app-teacherqueries',
  templateUrl: './teacherqueries.component.html',
  styleUrls: ['./teacherqueries.component.css']
})
export class TeacherqueriesComponent implements OnInit {

  constructor(private fb: FormBuilder, private register: RegisterpageService, private route: Router) { }

  registerForm = this.fb.group({
    namevalue: [, Validators.required],
    textvalue:[,Validators.required]
  });
  loggedTeacher:any;
  query:any;
  ngOnInit() {
    let sessionUser = sessionStorage.getItem('loginUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedTeacher = JSON.parse(sessionUser);
      // this.refresh(sessionUser);
    }
    this.register.getQueries().subscribe(data=>{
      this.query=data;
    })
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
