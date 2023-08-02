import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { MaterialsService } from 'src/app/materialspage/materials.service';
import { RegisterpageService } from 'src/app/registerpage.service';

@Component({
  selector: 'app-Advisor',
  templateUrl: './Advisor.component.html',
  styleUrls: ['./Advisor.component.css']
})
export class AdvisorComponent implements OnInit {

  getAdvisor:any;
  registerForm: any;
  constructor(private service:MaterialsService,private route:Router,private http:HttpClient,private fb: FormBuilder,private register:RegisterpageService) {
    this.http.get<any>("http://localhost:3000/Advisor").subscribe((data)=>{
    this.getAdvisor=data;
    })
    this.registerForm = this.fb.group({
      namevalue: [,[ Validators.required,Validators.pattern('^(?!.*([a-zA-Z])\\1\\1)[a-zA-Z ]+$ ')]],
      registernovalue: [, Validators.required],
      emailvalue: [,[ Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\.com$')]],
      mobilevalue:[,[ Validators.required,Validators.pattern('^[6-9](?!.*(\\d)\\1{4})\\d{9}$')]],
      section:[,[Validators.required,Validators.pattern('^[A-Z1-9]{0,2}$')]],
      department: [, Validators.required],
      year: [, Validators.required],

    })
   }

 getUser:any;
 ngOnInit() {
  const data = sessionStorage.getItem('loginUser');
  if (data) {
    this.getUser = JSON.parse(data);
  }
  this.searchResponse().subscribe((data: any)=>{
    this.getAdvisor=data;
  })
}
searchResponse(): Observable<any> {
  return this.http.get<any>("http://localhost:3000/Advisor").pipe(
    map((data: any[]) => {
      return data.filter(
        (item:any) =>
        item.DepartmentName===this.getUser.department && item.SubjectYear===this.getUser.year
      );
    })
  );
}
update() {
  const update1: any = document.querySelector(".body");
  update1.showModal();

}
close() {
  const update1: any = document.querySelector(".body");
  update1.close();
}

deleteAdvisor(id:any) {
  console.log(id)
  this.register.deleteAdvisor(id).subscribe((data) => {
    alert('sucessfully deleted');
    window.location.reload();
  });
  }
updateProfile(){
  this.register.addAdvisor(this.registerForm.value).subscribe(data=>{
    alert("Advisor is added");
    this.registerForm.reset();
  })
}
}
