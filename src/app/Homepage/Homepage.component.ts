import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';
import { flush } from '@angular/core/testing';
@Component({
  selector: 'app-Homepage',
  templateUrl: './Homepage.component.html',
  styleUrls: ['./Homepage.component.css']
})
export class HomepageComponent implements OnInit {
  popup: boolean = false;
  ngOnInit() {
  }
  constructor() {
    this.time();
  }

  hours: string = '';
  minutes: string = '';
  seconds: string = '';
  months: String = '';
  years: String = '';
  ampm: String = '';

  time() {
    setInterval(() => {
      var date = new Date();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var AP = '';

      if (hour >= 12) {
        AP = 'pm';
      }
      else {
        AP = 'am';
      }
      if (hour > 12) {
        hour = hour - 12;
      }

      this.hours = '' + hour + '';
      this.minutes = '' + minute + '';
      this.seconds = '' + second + '';
      this.months = '' + month + '';
      this.years = '' + year + '';
      this.ampm = '' + AP + '';

      this.openpopup();

    }, 1000);
  }

  openpopup() {
    if (this.hours == '7' && this.minutes >= '20' && this.minutes <= '22' && this.years == '2023' && this.months == '6') {
      this.popup = true;
    }
    if (this.hours == '7' && this.minutes >= '23'&& this.years == '2023' && this.months == '6') {
      this.popup = false;
    }
  }
  closepopup(){
    this.popup=false;
  }

}

