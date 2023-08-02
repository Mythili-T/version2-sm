import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-teacher-materialsadd',
  templateUrl: './teacher-materialsadd.component.html',
  styleUrls: ['./teacher-materialsadd.component.css']
})
export class TeacherMaterialsaddComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient) {

  }
  materialsAddForm = this.fb.group({
    ImagesUrl: [, Validators.required],
    SubjectCode: [, Validators.required],
    SubjectName: [, Validators.required],
    SubjectYear: [, Validators.required],
    DepartmentName: [, Validators.required],
    VideoLink1: [, Validators.required],
    VideoLink2: [, Validators.required],
    VideoLink3: [, Validators.required],
    VideoLink4: [, Validators.required],
    VideoLink5: [, Validators.required],
    NotesLink1: [, Validators.required],
    NotesLink2: [, Validators.required],
    NotesLink3: [, Validators.required],
    NotesLink4: [, Validators.required],
    NotesLink5: [, Validators.required],
    QuestionpaperLink1: [, Validators.required],
    QuestionpaperLink2: [, Validators.required],
    SyllabusLink: [, Validators.required],
    ManualLink: [, Validators.required],
    title: [, Validators.required],
    Yearnames: [, Validators.required],
    Subtitle: [, Validators.required],
    Videoheading1: [, Validators.required],
    Videoheading2: [, Validators.required],
    Videoheading3: [, Validators.required],
    Videoheading4: [, Validators.required],
    Videoheading5: [, Validators.required]

  })

  submitMaterials() {
    this.http.post<any>(environment.materialsAddDataBaseLink, this.materialsAddForm.value).subscribe(() => {
      alert("Materials submitted successfully");
      this.materialsAddForm.reset();
    })
  }
  ngOnInit() {
  }


}
