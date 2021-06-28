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
    console.log(localStorage.getItem('aluno'));
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      rg: ['', [Validators.required]],
      matricula: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      cidade: ['', [Validators.required]]
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
