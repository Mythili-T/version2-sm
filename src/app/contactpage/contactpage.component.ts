import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterpageService } from '../registerpage.service';
import { Router } from '@angular/router';
import { contactPage } from 'src/environments/environment.development';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

  environmentfile:any=contactPage;

  constructor(private fb: FormBuilder, private register: RegisterpageService, private route: Router) { }

  ngOnInit() {
  }


  registerForm = this.fb.group({
    namevalue: [,[ Validators.required,Validators.pattern('^(?!.*([a-zA-Z])\\1\\1)[a-zA-Z ]+$')]],
    emailvalue: [,[ Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\.com$')]],
    mobilevalue: [,[ Validators.required,Validators.pattern('^[6-9](?!.*(\\d)\\1{4})\\d{9}$')]],
    textvalue: [, Validators.required]
  });


  submitForm(){
    this.register.contactus(this.registerForm.value).subscribe(data=>{
      alert("Contact Form Submit");
      this.registerForm.reset();
    })
}
}
