import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterpageService {

  constructor(private http: HttpClient) { }
  addUser(body: any) {
    return this.http.post(environment.studentDataBaseLink, body);
  }
  getUser() {
    return this.http.get(environment.studentDataBaseLink);
  }
  updateProfile(data: any, id: any) {
    return this.http.patch(` http://localhost:3000/registeruser/${id}`, data)
  }
  contactus(body: any) {
    return this.http.post(environment.contactusDataBaseLink, body);
  }

  Queries(body: any) {
    return this.http.post(environment.queriesDataBaseLink, body);
  }

  getQueries() {
    return this.http.get(environment.queriesDataBaseLink);
  }

  adminresponse(body:any){
    return this.http.post(environment.adminresponseDataBaseLink,body)
  }

  admin_to_teacherresponse(){
    return this.http.get(environment.adminresponseDataBaseLink)
  }

  getContactus() {
    return this.http.get(environment.contactusDataBaseLink);
  }

  deleteUser(id:any) {
    return this.http.delete(`http://localhost:3000/registeruser/${id}`);
  }

  deletecontactdetails(id:any){
    return this.http.delete(`http://localhost:3000/contactus/${id}`);
  }

  getTeacher() {
    return this.http.get(environment.teacherDataBaseLink);
  }

  addTeacher(body: any) {
    return this.http.post(environment.teacherDataBaseLink, body);
  }

  deleteTeacher(id:any) {
    return this.http.delete(`http://localhost:3000/Teacher/${id}`);
  }

  addAdvisor(body:any){
    return this.http.post(environment.advisorDataBaseLink, body);
  }

  deleteAdvisor(id:any){
    return this.http.delete(`http://localhost:3000/Advisor/${id}`);
  }

  deleteMaterials(id:any){
    return this.http.delete(`http://localhost:3000/Materails/${id}`);
  }
}
