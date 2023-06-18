import { Component, OnInit } from '@angular/core';
import { RegisterpageService } from 'src/app/registerpage.service';

@Component({
  selector: 'app-Admin-reports',
  templateUrl: './Admin-reports.component.html',
  styleUrls: ['./Admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {

  getUser: any = "";
  constructor(private register:RegisterpageService) { }

  ngOnInit() {
      this.register.getContactus().subscribe((response) => {
        this.getUser = response;
        console.log(this.getUser.id)
      })
    }

  deletecontact(id:any) {
    console.log(id)
    this.register.deletecontactdetails(id).subscribe((data) => {
      alert('sucessfully deleted');
      window.location.reload();
    });
    }
}
