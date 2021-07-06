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
  //Departamento Acadêmico de Informação e Comunicação
  vulnerabilidade =1.0
  distancia = 0
  gravidez = 1.0
  cargaHoraria = 0
  Identidade = 1.0
  Insassiduidade = 0
  Apatia = 1.0
  familiares = 0

  defasagem = 1.0
  constructor(private routes: Router, private service: EvasionService) { }

  displayedColumns: string[] = ['name','apaty', 'familyProblems', 'fullHour', 'identity','inattendance','isFar','isPregnent','isVulnerable', 'notLearning', 'actions'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getStudent();

    var myChart = new Chart("lanvas", {
      type: 'bar',
      data: {
          labels: ['Vulnerabilidade social', 'Distância', 'Gravidez', 'Carga horária', 'Identidade', 'Insassiduidade', 'Apatia', 'Problemas Familiares', 'Defasagem no aprendizado'],
          datasets: [{
              label: '# De Evasão',
              data: [this.vulnerabilidade, this.distancia, this.gravidez, this.cargaHoraria, this.Identidade, this.Insassiduidade, this.Apatia, this.familiares, this.defasagem],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
          },
        });
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
