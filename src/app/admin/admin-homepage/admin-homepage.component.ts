import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RegisterpageService } from 'src/app/registerpage.service';
import { environment, homePageData } from 'src/environments/environment.development';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  envirnomentfile: any = homePageData;
  studentCount: any;
  teacherCount: any;
  subjectCount: any;
  cseMaterialsCount: any;
  cseNotesCount: any;
  eceMaterialsCount: any;
  eceNotesCount: any;
  eeeNotesCount: any;
  eeeMaterialsCount: any;
  ITNotesCount: any;
  ITMaterialsCount: any;
  constructor(private register: RegisterpageService) { }

  ngOnInit() {
    this.register.getUser().subscribe((details) => {
      this.studentCount = details;
    })

    this.register.getTeacher().subscribe((details) => {
      this.teacherCount = details;
    })

    this.register.getMaterials().subscribe((details) => {
      this.subjectCount = details;
    })

    this.register.cseMaterials().subscribe((details) => {
      this.cseMaterialsCount = details;
    })

    this.register.eceMaterials().subscribe((details) => {
      this.eceMaterialsCount = details;
    })

    this.register.eeeMaterials().subscribe((details) => {
      this.eeeMaterialsCount = details;
    })

    this.register. ITMaterials().subscribe((details) => {
      this.ITMaterialsCount = details;
    })


  }

cseNotes() {
  if (this.cseMaterialsCount) {
    return this.cseNotesCount = (this.cseMaterialsCount.length) * 5;
  }
  return 0;
}
  csequestionCount() {
    if (this.cseMaterialsCount) {
    return this.cseNotesCount = (this.cseMaterialsCount.length) * 2;
  }
  return 0;
}


  eceNotes() {
    if (this.eceMaterialsCount) {
    return this.eceNotesCount = (this.eceMaterialsCount.length) * 5;
  }
  return 0;
}

  ecequestionCount() {
    if (this.eceMaterialsCount) {
    return this.eceNotesCount = (this.eceMaterialsCount.length) * 2;
  }
  return 0;
}

  eeeNotes() {
    if (this.eeeMaterialsCount) {
    return this.eeeNotesCount = (this.eeeMaterialsCount.length) * 5;
  }
  return 0;
}

  eeequestionCount() {
    if (this.eeeMaterialsCount) {
    return this.eeeNotesCount = (this.eeeMaterialsCount.length) * 2;
  }
  return 0;
}

  ITNotes() {
    if (this.ITMaterialsCount) {
    return this.ITNotesCount = (this.ITMaterialsCount.length) * 5;
  }
  return 0;
}

  ITquestionCount() {
    if (this.ITMaterialsCount) {
    return this.ITNotesCount = (this.ITMaterialsCount.length) * 2;
  }
  return 0;
}
}
