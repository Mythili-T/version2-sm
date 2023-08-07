import { Component, OnInit } from '@angular/core';
import { homePageData } from 'src/environments/environment.development';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  envirnomentfile:any=homePageData;

  constructor() { }

  ngOnInit() {
  }

}
