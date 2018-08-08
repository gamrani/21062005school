import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NotesComponent} from './notes/notes.component';
import {StudentsComponent} from './students/students.component';
import {PresenceComponent} from './presence/presence.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path:'',component: AuthenticationComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path:'students',component:StudentsComponent},
  { path:'cours',component: ClassesComponent},
  { path:'notes',component: NotesComponent},
  { path:'presences',component:PresenceComponent},
  { path:'student/:id',component:StudentComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
