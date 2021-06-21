import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OptionsMenuComponent } from './options-menu/options-menu.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { StudentComponent } from './core/student/student.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CourseComponent } from './core/course/course.component';
import { DepartmentComponent } from './core/department/department.component';
import { CampusComponent } from './core/campus/campus.component';
import { AddCampusComponent } from './core/campus/add-campus/add-campus.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddStudentComponent } from './core/student/add-student/add-student.component';
import { AddDepartmentComponent } from './core/department/add-department/add-department.component';
import { AddCourseComponent } from './core/course/add-course/add-course.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent } from './core/charts/charts.component';
import { EvasionComponent } from './core/evasion/evasion.component';
import { AddevasionComponent } from './core/evasion/addevasion/addevasion.component';


@NgModule({
  declarations: [
    AppComponent,
    OptionsMenuComponent,
    StudentComponent,
    CourseComponent,
    DepartmentComponent,
    CampusComponent,
    AddCampusComponent,
    AddStudentComponent,
    AddDepartmentComponent,
    AddCourseComponent,
    ChartsComponent,
    EvasionComponent,
    AddevasionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
