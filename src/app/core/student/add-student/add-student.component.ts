import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student = []
  formCliente: FormGroup;
  form:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      vulneravel: ['', [Validators.required]],
      distancia: ['', [Validators.required]],
      gravidez: ['', [Validators.required]],
      cargaHoraria: ['', [Validators.required]],
      identidade: ['', [Validators.required]],
      inassiduidade: ['', [Validators.required]],
      apatia: ['', [Validators.required]],
      problemas: ['', [Validators.required]],
      defasagem: ['', [Validators.required]],
    })
  }


  save() {
    const student = this.form.value;
    this.studentService.saveStudent(student).subscribe(response => {
      this.student.push(response)
    })

    alert("Aluno Cadastrado!")
    this.router.navigate(['/student'])
  }

  clear(){
    this.form.reset();
  }

}
