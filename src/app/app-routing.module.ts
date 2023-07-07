import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { HomepageComponent } from './Homepage/Homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HeaderGuard } from './header.guard';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { MaterialspageComponent } from './materialspage/materialspage.component';
import { CSEnotesComponent } from './CSEnotes/CSEnotes.component';
import { ClassComponent } from './class/class.component';
import { StudentComponent } from './admin/student/student.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { AdminReportsComponent } from './admin/Admin-reports/Admin-reports.component';
import { AdminTeacherComponent } from './admin/admin-Teacher/admin-Teacher.component';
import { TeacherHeaderComponent } from './teacher/teacher-header/teacher-header.component';
import { TeacherHomepageComponent } from './teacher/teacher-homepage/teacher-homepage.component';
import { TeacherStudentsComponent } from './teacher/Teacher-Students/Teacher-Students.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { TeacherAboutpageComponent } from './teacher/teacher-aboutpage/teacher-aboutpage.component';
import { TeacherContactpageComponent } from './teacher/teacher-contactpage/teacher-contactpage.component';
import { TeacherqueriesComponent } from './teacher/teacherqueries/teacherqueries.component';
import { TeacherMaterialsaddComponent } from './teacher/teacher-materialsadd/teacher-materialsadd.component';
import { AdminqueriesComponent } from './admin/adminqueries/adminqueries.component';

const routes: Routes = [
  {
    path: "Indexpage",
    component: IndexpageComponent
  },
  {
    path: "Homepage",
    component: HomepageComponent
  },
  {
    path: "Profilepage",
    component: ProfileComponent,
    canActivate: [HeaderGuard]
  },
  {
    path: "Loginpage",
    component: LoginpageComponent
  },
  {
    path: "Registerpage",
    component: RegisterComponent
  },
  {
    path: "Forgetpasswordpage",
    component: ForgetpasswordComponent
  },
  {
    path: "Aboutpage",
    component: AboutpageComponent
  },
  {
    path: "Contactpage",
    component: ContactpageComponent,
    canActivate: [HeaderGuard]

  },
  {
    path: "Materialspage",
    component: MaterialspageComponent,
    canActivate: [HeaderGuard]
  },
  {
    path: "CSENotespage",
    component: CSEnotesComponent
  },
  {
    path: "Classpage",
    component: ClassComponent,
    canActivate: [HeaderGuard]
  },
  {
    path: "Admin-Homepage",
    component: AdminHomepageComponent
  },
  {
    path: "Admin-Student",
    component: StudentComponent
  },
  {
    path: "Admin-Records",
    component: AdminReportsComponent
  },
  {
    path: "Admin-Teacher",
    component:AdminTeacherComponent
  },
  {
    path: "Admin-queries",
    component:AdminqueriesComponent
  },
  {
    path: "Teacher-header",
    component:TeacherHeaderComponent
  },
  {
    path: "Teacher-Homepage",
    component:TeacherHomepageComponent
  },
  {
    path: "Teacher-Studentpage",
    component:TeacherStudentsComponent
  },
  {
    path: "Teacher-Profilepage",
    component:TeacherProfileComponent
  },
  {
    path: "Teacher-Aboutpage",
    component:TeacherAboutpageComponent
  },
  {
    path: "Teacher-Contactpage",
    component:TeacherContactpageComponent
  },
  {
    path: "Teacher-Queries",
    component:TeacherqueriesComponent
  },
  {
    path: "Teacher-Materialsadd",
    component:TeacherMaterialsaddComponent
  },

  {
    path: "",
    component: IndexpageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
