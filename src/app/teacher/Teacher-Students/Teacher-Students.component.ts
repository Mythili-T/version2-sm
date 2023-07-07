import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { RegisterpageService } from 'src/app/registerpage.service';

@Component({
  selector: 'app-Teacher-Students',
  templateUrl: './Teacher-Students.component.html',
  styleUrls: ['./Teacher-Students.component.css']
})
export class TeacherStudentsComponent implements OnInit {

  getUser: any = "";
  registerForm: FormGroup;
  constructor(private adminservice: AdminServiceService, private fb: FormBuilder, private register: RegisterpageService) {
    this.registerForm = this.fb.group({
      namevalue: [, Validators.required],
      registernovalue: [, Validators.required],
      emailvalue: [, Validators.required],
      mobilevalue: [, Validators.required],
      passwordvalue: [, Validators.required],
      confirmpasswordvalue: [, Validators.required],
      department: [, Validators.required],
      year: [, Validators.required],


    })
  }


  ngOnInit() {
    this.getUserList();
  }
  getUserList() {
    this.adminservice.getUserList().subscribe((response) => {
      this.getUser = response;
    })
  }
}
