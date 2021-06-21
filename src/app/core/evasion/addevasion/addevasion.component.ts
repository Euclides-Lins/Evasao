import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { EvasionService } from '../evasion.service';

@Component({
  selector: 'app-addevasion',
  templateUrl: './addevasion.component.html',
  styleUrls: ['./addevasion.component.css']
})
export class AddevasionComponent implements OnInit {


  formCliente: FormGroup;
  form:FormGroup;
  department = []
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: EvasionService) {
   }
   ngOnInit(): void {
     this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      vulnerabilidade: ['', [Validators.required]],
      distancia: ['', [Validators.required]],
      gravidez: ['', [Validators.required]],
      cargaHoraria: ['', [Validators.required]],
      Identidade: ['', [Validators.required]],
      Insassiduidade: ['', [Validators.required]],
      Apatia: ['', [Validators.required]],
      familiares: ['', [Validators.required]],
      defasagem: ['', [Validators.required]],
    })



  }

   save() {
    const formValue = this.form.value;
    console.log(formValue);

    this.service.saveStudent(formValue).subscribe(response => {
      this.department.push(response);
      console.log((this.department));
    })

    alert("Departamento Cadastrado!")
    this.router.navigate(['/evasion'])
   }

  clear(){
    this.form.reset();
  }

}
