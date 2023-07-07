import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterpageService {

  constructor(private http: HttpClient) { }
  addUser(body: any) {
    return this.http.post("http://localhost:3000/registeruser", body);
  }
  getUser() {
    return this.http.get("http://localhost:3000/registeruser");
  }
  updateProfile(data: any, id: any) {
    return this.http.patch(` http://localhost:3000/registeruser/${id}`, data)
  }
  contactus(body: any) {
    return this.http.post("http://localhost:3000/contactus", body);
  }

  Queries(body: any) {
    return this.http.post("http://localhost:3000/Queries", body);
  }

  getQueries() {
    return this.http.get("http://localhost:3000/Queries");
  }

  getContactus() {
    return this.http.get("http://localhost:3000/contactus");
  }

  deleteUser(id:any) {
    return this.http.delete(`http://localhost:3000/registeruser/${id}`);
  }

  deletecontactdetails(id:any){
    return this.http.delete(`http://localhost:3000/contactus/${id}`);
  }

  getTeacher() {
    return this.http.get("http://localhost:3000/Teacher");
  }

  addTeacher(body: any) {
    return this.http.post("http://localhost:3000/Teacher", body);
  }

  deleteTeacher(id:any) {
    return this.http.delete(`http://localhost:3000/Teacher/${id}`);
  }

}
