import { Component, OnInit } from '@angular/core';
import { aboutPageData } from 'src/environments/environment.development';
@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {
  environmentfile:any=aboutPageData;

  constructor() { }

  ngOnInit() {
  }

}
