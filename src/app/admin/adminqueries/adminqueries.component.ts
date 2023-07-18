import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterpageService } from 'src/app/registerpage.service';

@Component({
  selector: 'app-adminqueries',
  templateUrl: './adminqueries.component.html',
  styleUrls: ['./adminqueries.component.css']
})
export class AdminqueriesComponent implements OnInit {

  constructor(private register: RegisterpageService, private fb: FormBuilder) { }
  query: any;
  userReg: any;
  ngOnInit() {
    this.register.getQueries().subscribe(data => {
      this.query = data;
    })
  }
  descriptionForm = this.fb.group({
    description: [, Validators.required]
  })
  update(user: any) {
    const update1: any = document.querySelector(".body");
    update1.showModal();
    this.userReg = user;

  }
  close() {
    const update1: any = document.querySelector(".body");
    update1.close();
  }
  send() {
    var body = {
      "RegisterNumber": this.userReg.RegisterNumber,
      "Response": this.descriptionForm.value.description,
      "Description":this.userReg.Description

    }
    this.register.adminresponse(body).subscribe(()=>{
      alert("Response Successfully");
      this.descriptionForm.reset();
    })
  }

  userData(user: any) {

  }
}
