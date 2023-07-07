import { Component, OnInit } from '@angular/core';
import { RegisterpageService } from 'src/app/registerpage.service';

@Component({
  selector: 'app-adminqueries',
  templateUrl: './adminqueries.component.html',
  styleUrls: ['./adminqueries.component.css']
})
export class AdminqueriesComponent implements OnInit {

  constructor(private register: RegisterpageService) { }
  query:any;
  ngOnInit() {
    this.register.getQueries().subscribe(data=>{
      this.query=data;
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
}
