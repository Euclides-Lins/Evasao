import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {


  department = []
  formCliente: FormGroup;
  form:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private serviceDepartment: DepartmentService,
    private router: Router) {
   }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sigla: ['', [Validators.required]],
      campus: ['', [Validators.required]],
      cursos: ['', [Validators.required]],
      usuarios: ['', [Validators.required]]
    })
  }

  save() {
    const formValue = this.form.value;
    this.serviceDepartment.saveDepartment(formValue).subscribe(response => {
      this.department.push(response);
    })
    alert("Departamento Cadastrado!")
    this.router.navigate(['/department'])
  }

  clear(){
    this.form.reset();
  }
}
