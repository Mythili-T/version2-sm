import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterpageService } from 'src/app/registerpage.service';

@Component({
  selector: 'app-admin-Teacher',
  templateUrl: './admin-Teacher.component.html',
  styleUrls: ['./admin-Teacher.component.css']
})
export class AdminTeacherComponent implements OnInit {

  registerForm: FormGroup;
  getTeacher: any="";
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
    this.register.addTeacher(this.registerForm.value).subscribe(data=>{
      alert("Registeration Form Submit");
      this.registerForm.reset();
    })
  }

  ngOnInit() {
    this.getTeacherList();
  }
  getTeacherList() {
    this.adminservice.getTeacherList().subscribe((response) => {
      this.getTeacher = response;
    })
  }

  deleteTeacher(id:any) {
    console.log(id)
    this.register.deleteTeacher(id).subscribe((data) => {
      alert('sucessfully deleted');
      window.location.reload();
    });
    }

}
