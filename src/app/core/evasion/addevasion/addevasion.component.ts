import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      name: ['', [Validators.required]],
      isVulnerable: ['', [Validators.required]],
      isFar: ['', [Validators.required]],
      isPregnent: ['', [Validators.required]],
      fullHour: ['', [Validators.required]],
      identity: ['', [Validators.required]],
      inattendance: ['', [Validators.required]],
      apaty: ['', [Validators.required]],
      familyProblems: ['', [Validators.required]],
      notLearning: ['', [Validators.required]],
    })



  }

   save(){
    const formValue = this.form.value;
    console.log(formValue);

    return this.service.saveStudent(formValue).subscribe(response => {
      response.id = localStorage.getItem('aluno')
      this.department.push(response);
      alert("Evasão Cadastrada!")
      this.router.navigate(['/student'])
    })

   }

  clear(){
    this.form.reset();
  }

}
