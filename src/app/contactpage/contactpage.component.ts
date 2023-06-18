import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterpageService } from '../registerpage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

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
