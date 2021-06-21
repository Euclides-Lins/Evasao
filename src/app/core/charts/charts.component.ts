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
  constructor(private service: EvasionService) { }
  ngOnInit() {
     this.getData();
     var myChart = new Chart("lanvas", {
       type: 'bar',
       data: {
           labels: ['Vulnerabilidade social', 'Distância', 'Gravidez', 'Carga horária', 'Identidade', 'Insassiduidade', 'Apatia', 'Problemas Familiares', 'Defasagem no aprendizado'],
           datasets: [{
               label: '# De Vulnerabilidade',
               data: [this.vulnerabilidade, this.distancia, this.gravidez, this.cargaHoraria, this.Identidade, this.Insassiduidade, this.Apatia, this.familiares, this.defasagem, 0.7 ],
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

    getData() {
      const name = localStorage.getItem('aluno')
      this.service.getOneStudent(name).subscribe((charts)=> {
        console.log(charts)
        this.defasagem = charts.isVulnerable * this.defasagem;
        console.log(charts.isVulnerable);

        this.distancia = charts.isFar * this.distancia;
        console.log(this.distancia);

        this.gravidez = charts.isPregnent * this.gravidez;
        this.Identidade = charts.identity * this.Identidade;
        this.Insassiduidade = charts.inattendance * this.Insassiduidade;
        this.Apatia  = charts.apaty * this.Apatia;
        this.familiares = charts.familyProblems * this.familiares;
        this.defasagem = charts.notLearning * this.defasagem;
      })
  }
}
