import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent{

  constructor(private routes: Router, private departmentService: DepartmentService){}
  displayedColumns: string[] = ['nome', 'sigla', 'campus', 'cursos','usuarios', 'actions'];
  dataSource = new MatTableDataSource<any>();


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {

    console.log(this.dataSource);

    this.getDepartment()
    this.dataSource.paginator = this.paginator;
  }

  addButton(){
    this.routes.navigate(['department/addstudent'])
  }

  getDepartment(){
    this.departmentService.getCampus().subscribe((department)=> {
      console.log(department);


      department.forEach(department => {
        if(department.nome == 'DAIC') {
          localStorage.setItem('departamento', department.nome);
        }
      } )
      this.dataSource = department
    })
  }

  getIdFromTable(rowid){
    localStorage.setItem('aluno', rowid);
    this.routes.navigate(['evasion'])
  }

  deleteDepartment(department){
    this.departmentService.deleteDepartment(department).subscribe(()=>{

    })
    alert("Departamento Deletado!");
    window.location.reload();
  }

  cardStorage() {}
}
