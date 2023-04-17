import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { StudentsComponent } from './admin/students/students.component';
import { BooksComponent } from './admin/books/books.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'gallary',component:GallaryComponent},
  {path:'contacts',component:ContactsComponent},
  // This is children Routing
  {path:'admin', 
  component:DashboardComponent,
  children:[
  
    {path:'emp',component:EmployeeComponent},
    {path:'stu',component:StudentsComponent},
    {path:'books',component:BooksComponent}

  ]
},

  {path:'**',component:PageNotFoundComponent}  //This is wild card for unexpected link

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
