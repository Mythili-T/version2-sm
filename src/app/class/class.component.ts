import { Component, OnInit } from '@angular/core';
import { MaterialsService } from '../materialspage/materials.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { RegisterpageService } from '../registerpage.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  getMaterials:any;
  Advisor:any;
  constructor(private service:MaterialsService,private route:Router,private http:HttpClient) {
    this.http.get<any>("http://localhost:3000/Materails").subscribe((data)=>{
    this.getMaterials=data;
    })
   }

 getUser:any;
 getAdvisor:any;
 ngOnInit() {
  const data = sessionStorage.getItem('loginUser');
  if (data) {
    this.getUser = JSON.parse(data);
  }
  this.searchResponse().subscribe(data=>{
    this.getMaterials=data;
  })

  this.searchAdvisor().subscribe(data1=>{
    this.getAdvisor=data1;
  })
}
searchResponse(): Observable<any> {
  return this.http.get<any>("http://localhost:3000/Materails").pipe(
    map((data: any[]) => {
      return data.filter(
        (item:any) =>
        item.DepartmentName===this.getUser.department && item.SubjectYear===this.getUser.year
      );
    })
  );


}

searchAdvisor(): Observable<any> {
  return this.http.get<any>("http://localhost:3000/Advisor").pipe(
    map((data: any[]) => {
      return data.filter(
        (item:any) =>
        item.department===this.getUser.department && item.year===this.getUser.year
      );
    })
  );

}
}


