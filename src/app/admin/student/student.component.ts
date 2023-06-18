import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterpageService } from 'src/app/registerpage.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
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

  update() {
    const update1: any = document.querySelector(".body");
    update1.showModal();

  }
  close() {
    const update1: any = document.querySelector(".body");
    update1.close();
  }

  updateProfile(){
    this.register.addUser(this.registerForm.value).subscribe(data=>{
      alert("Registeration Form Submit");
      this.registerForm.reset();
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

  deleteData(id:any) {
    console.log(id)
    this.register.deleteUser(id).subscribe((data) => {
      alert('sucessfully deleted');
      window.location.reload();
    });
    }

}
