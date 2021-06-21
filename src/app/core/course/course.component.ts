import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from './course.service';

export interface PeriodicElement {
  nome: string;
  sigla: number;
  departamento: number;
  alunos: string[];

}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {

  courses: Course
  constructor(private routes: Router, private courseService: CourseService) {}
  displayedColumns: string[] = ['nome', 'sigla', 'departamento', 'alunos','actions'];
  dataSource = new MatTableDataSource<any>();

  ngAfterViewInit() {
    this.getCourse();
  }

  addButton(){
    this.routes.navigate(['/course/addcourse'])
  }

  getCourse() {
    this.courseService.getCourse().subscribe((course) => {
      console.log(course);
      this.dataSource = course;
    })
  }

  deleteCourse(course){
    this.courseService.deleteCourse(course).subscribe(()=>{

    })
    alert("Curso Deletado!");
    window.location.reload();
  }

}
