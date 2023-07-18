import { Component, OnInit } from '@angular/core';
import { MaterialsService } from '../materialspage/materials.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-CSEnotes',
  templateUrl: './CSEnotes.component.html',
  styleUrls: ['./CSEnotes.component.css']
})
export class CSEnotesComponent implements OnInit {
  getMaterials:any;
  constructor(private service:MaterialsService,private route:Router,private http:HttpClient) {
    this.http.get<any>("http://localhost:3000/Materails").subscribe((data)=>{
    this.getMaterials=data;
    })
   }

 getUser:any;
 ngOnInit() {
  const data = sessionStorage.getItem('loginUser');
  if (data) {
    this.getUser = JSON.parse(data);
  }
  this.searchResponse().subscribe(data=>{
    this.getMaterials=data;
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

video=this.service.video;
notes=this.service.notes;
question=this.service.question;
syllabus=this.service.syllabus;
subject=this.service.subject;
}

  //   if(this.service.materials=="Professionalethicsvideo"){
  //     this.PEv=true;
  //   }
  //   else if(this.service.materials=="Professionalethicsnotes"){
  //     this.PEn=true;
  //   }
  //   else if(this.service.materials=="Professionalethicsqp"){
  //     this.PEq=true;
  //   }
  //   else if(this.service.materials=="Professionalethicssb"){
  //     this.PEs=true;
  //   }






