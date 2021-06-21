import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampusService } from '../../campus/campus.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  couse = []
  formCliente: FormGroup;
  form:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private couserService: CourseService,
    private router: Router) {
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sigla: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      alunos: ['', [Validators.required]],
    })
  }

  save() {
    const formValues = this.form.value;
    this.couserService.saveCourse(formValues).subscribe(response => {
      this.couse.push(response)
    })
    alert("Curso Cadastrado!")
    this.router.navigate([''])

  }

  clear(){
    this.form.reset();
  }

}
