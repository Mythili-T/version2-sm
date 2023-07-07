import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterpageService } from 'src/app/registerpage.service';

@Component({
  selector: 'app-teacher-contactpage',
  templateUrl: './teacher-contactpage.component.html',
  styleUrls: ['./teacher-contactpage.component.css']
})
export class TeacherContactpageComponent implements OnInit {

  constructor(private fb: FormBuilder, private register: RegisterpageService, private route: Router) { }

  ngOnInit() {
  }


  registerForm = this.fb.group({
    namevalue: [, Validators.required],
    emailvalue: [, Validators.required],
    mobilevalue: [, Validators.required],
    textvalue: [, Validators.required]
  });


  submitForm(){
    this.register.contactus(this.registerForm.value).subscribe(data=>{
      alert("Contact Form Submit");
      this.registerForm.reset();
    })
}
}
