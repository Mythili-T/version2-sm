import { Component, OnInit } from '@angular/core';
import { aboutPageData } from 'src/environments/environment.development';

@Component({
  selector: 'app-teacher-aboutpage',
  templateUrl: './teacher-aboutpage.component.html',
  styleUrls: ['./teacher-aboutpage.component.css']
})
export class TeacherAboutpageComponent implements OnInit {
  environmentfile:any=aboutPageData;
  constructor() { }

  ngOnInit() {
  }

}
