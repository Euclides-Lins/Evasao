import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, Routes } from '@angular/router';
import { CampusService } from './campus.service';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent  {

  constructor(private routes: Router, private campusService: CampusService,){}


  displayedColumns: string[] = ['nome', 'departamentos', 'usuarios', 'sigla', 'actions'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    localStorage.removeItem("porcentagem")
    this.dataSource.paginator = this.paginator;
    this.getCampus()
  }

  addButton(){
    this.routes.navigate(['/campus/addcampus'])
  }

  getCampus() {
    this.campusService.getCampus().subscribe((campus)=> {
      this.dataSource = campus
    })
  }

  deleteCourse(course){
    this.campusService.deleteCampus(course).subscribe(()=>{

    })
    alert("Campus Deletado!");
    window.location.reload();
  }
}
