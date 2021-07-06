import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { EvasionService } from '../evasion/evasion.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {

  vulnerabilidade = 0.22224
    distancia = 0.11111
    gravidez = 0.22224
    cargaHoraria = 0.44448
    Identidade = 0.11111
    Insassiduidade = 0.22224
    Apatia = 0.11113
    familiares = 0.44448
    defasagem = 0.11111
    aux
  constructor(private service: EvasionService) { }
  ngOnInit() {
    const name = localStorage.getItem('aluno')
     this.service.getOneStudent(name).subscribe((charts)=> {
       console.log(charts);
     this.aux = charts.isVulnerable * this.vulnerabilidade + charts.isFar * this.distancia + charts.isPregnent* this.gravidez + charts.fullHour*this.cargaHoraria + charts.identity*this.Identidade + charts.inattendance* this.Insassiduidade + charts.apaty*this.Apatia + charts.familyProblems * this.familiares + charts.notLearning * this.defasagem + 0.0006
     this.aux = ((this.aux /2.00074)* 100).toFixed(2)
    localStorage.setItem("porcentagem", this.aux.toString());

     var myChart = new Chart("lanvas", {
      type: 'bar',
      data: {
          labels: ['Vulnerabilidade social', 'Distância', 'Gravidez', 'Carga horária', 'Identidade', 'Insassiduidade', 'Apatia', 'Problemas Familiares', 'Defasagem no aprendizado'],
          datasets: [{
              label: '# De Vulnerabilidade',
              data: [this.vulnerabilidade * charts.isVulnerable, this.distancia*charts.isFar, this.gravidez*charts.isPregnent, this.cargaHoraria*charts.fullHour, this.Identidade*charts.identity, this.Insassiduidade*charts.inattendance, this.Apatia * charts.apaty, this.familiares*charts.familyProblems, this.defasagem*charts.notLearning, 0.5 ],
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
      })
    }


    createCharts(){

    }



    getData() {

  }
}
