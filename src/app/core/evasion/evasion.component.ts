import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { EvasionService } from './evasion.service';

@Component({
  selector: 'app-evasion',
  templateUrl: './evasion.component.html',
  styleUrls: ['./evasion.component.css']
})
export class EvasionComponent implements OnInit {

  vulnerabilidade =0.22224
  distancia = 0.11111
  gravidez = 0.22224
  cargaHoraria = 0.44448
  Identidade = 0.11111
  Insassiduidade = 0.22224
  Apatia = 0.11113
  familiares = 0.44448
  defasagem = 0.11111
  constructor(private routes: Router, private service: EvasionService) { }

  displayedColumns: string[] = ['name','apaty', 'familyProblems', 'fullHour', 'identity','inattendance','isFar','isPregnent','isVulnerable', 'notLearning', 'actions'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getStudent();
}

  addButton(){
    this.routes.navigate(['evasion/addevasion'])
  }

  getStudent() {
    this.service.getStudent().subscribe((student)=>{
      this.dataSource = student;

    })
  }

  getIdFromTable(rowid){
    localStorage.setItem('aluno', rowid);
    this.routes.navigate(['evasion/charts'])
  }

  deleteDepartment(department){
    this.service.deleteDepartment(department).subscribe(()=>{

    })
    alert("Departamento Deletado!");
    window.location.reload();
    this.routes.navigate(['evasion/charts'])
  }
}
