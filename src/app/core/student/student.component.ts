import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {


  constructor(private routes: Router, private studentService: StudentService){}
  displayedColumns: string[] = ['nome', 'matricula', 'cpf','cep','endereco','uf','cidade', 'rg', 'probabilidade','actions'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getStudent();
  }

  addButton(){
    this.routes.navigate(['/student/addstudent'])
  }

  addButtonEvasion(){
    this.routes.navigate(['evasion/addevasion'])
  }

  getIdFromTable(rowid){
    localStorage.setItem('aluno', rowid);
    this.routes.navigate(['evasion/charts'])
  }

  getStudent() {
    this.studentService.getStudent().subscribe((student)=>{

      student.forEach(response => {
        response.probabilidade = localStorage.getItem("porcentagem");

      })
      this.dataSource = student;

    })
  }

  deleteStudent(student){
    this.studentService.deleteStudent(student).subscribe(()=>{

    })
    alert("Aluno Deletado!");
    window.location.reload();
  }
}
