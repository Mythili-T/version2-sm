import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { MaterialsService } from 'src/app/materialspage/materials.service';

@Component({
  selector: 'app-teacher-subjectsview',
  templateUrl: './teacher-subjectsview.component.html',
  styleUrls: ['./teacher-subjectsview.component.css']
})
export class TeacherSubjectsviewComponent implements OnInit {

  getMaterials: any;
  constructor(private service: MaterialsService, private route: Router, private http: HttpClient) {

  }
  getUser: any = '';
  ngOnInit() {
    const data = sessionStorage.getItem('loginUser');
    if (data) {
      this.getUser = JSON.parse(data);
    }


    this.searchResponse().subscribe(data => {
      this.getMaterials = data;
    })
  }

  searchResponse(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/Materails").pipe(
      map((data: any[]) => {
        return data.filter(
          (item: any) =>
            item.DepartmentName === this.getUser.department && item.SubjectYear === this.getUser.year
        );
      })
    );
  }


  videostatus(item:any) {
    this.service.video = true;
    this.service.notes = false;
    this.service.question = false;
    this.service.syllabus = false;
    this.route.navigate(['/Teacher-subjects']);
   this.service.subject=item.SubjectName;
  }

  notesstatus(item:any) {
    this.service.video = false;
    this.service.notes = true;
    this.service.question = false;
    this.service.syllabus = false;
    this.route.navigate(['/Teacher-subjects']);
    this.service.subject=item.SubjectName;
  }

  questionstatus(item:any) {
    this.service.video = false;
    this.service.notes = false;
    this.service.question = true;
    this.service.syllabus = false;
    this.route.navigate(['/Teacher-subjects']);
    this.service.subject=item.SubjectName;
  }

  syllabusstauts(item:any) {
    this.service.video = false;
    this.service.notes = false;
    this.service.question = false;
    this.service.syllabus = true;
    this.route.navigate(['/Teacher-subjects']);
    this.service.subject=item.SubjectName;
  }

}
