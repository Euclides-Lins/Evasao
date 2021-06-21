import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCampusComponent } from './core/campus/add-campus/add-campus.component';
import { CampusComponent } from './core/campus/campus.component';
import { ChartsComponent } from './core/charts/charts.component';
import { AddCourseComponent } from './core/course/add-course/add-course.component';
import { CourseComponent } from './core/course/course.component';
import { AddDepartmentComponent } from './core/department/add-department/add-department.component';
import { DepartmentComponent } from './core/department/department.component';
import { AddevasionComponent } from './core/evasion/addevasion/addevasion.component';
import { EvasionComponent } from './core/evasion/evasion.component';
import { AddStudentComponent } from './core/student/add-student/add-student.component';
import { StudentComponent } from './core/student/student.component';
import { OptionsMenuComponent } from './options-menu/options-menu.component';

const routes: Routes = [{
  path: '',
  component: CourseComponent,},
  {
    path: 'course/addcourse',
    component: AddCourseComponent,
  },
    {
      path: 'student',
      component: StudentComponent,
    },
    {
      path: 'student/addstudent',
      component:AddStudentComponent,
    },
    {
      path: 'department',
      component: DepartmentComponent,
    },
    {
      path: 'department/addstudent',
      component:AddDepartmentComponent,
    },
    {
      path: 'campus',
      component: CampusComponent,
    },
    {
      path: 'campus/addcampus',
      component: AddCampusComponent,
    },

    {
      path: ' campus',
      component: CampusComponent,
    },
    {
      path: 'campus/addcampus',
      component:AddCampusComponent,
    },
    {
      path: 'evasion/charts',
      component:ChartsComponent,
    },
    {
      path: 'evasion',
      component:EvasionComponent,
    },
    {
      path: 'evasion/addevasion',
      component:AddevasionComponent,
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
