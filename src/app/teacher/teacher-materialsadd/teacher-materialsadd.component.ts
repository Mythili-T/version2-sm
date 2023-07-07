import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-materialsadd',
  templateUrl: './teacher-materialsadd.component.html',
  styleUrls: ['./teacher-materialsadd.component.css']
})
export class TeacherMaterialsaddComponent implements OnInit {

    subjects:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  materials(){
    this.subjects=true;
  }

}
