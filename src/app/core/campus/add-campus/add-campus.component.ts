;import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampusService } from '../campus.service';

@Component({
  selector: 'app-add-campus',
  templateUrl: './add-campus.component.html',
  styleUrls: ['./add-campus.component.css']
})
export class AddCampusComponent implements OnInit {
  formCliente: FormGroup;
  form:FormGroup;
  campus = []
  constructor(
    private formBuilder: FormBuilder,
    private campusService: CampusService,
    private router: Router) {
   }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      departamentos: ['', [Validators.required]],
      usuarios: ['', [Validators.required]],
      sigla: ['', [Validators.required]],
    })
  }


  save() {
    const formValues = this.form.value;
    this.campusService.saveCampus(formValues).subscribe(response => {
      this.campus.push(response);
      console.log(this.campus);

    })
    alert("Campus Cadastrado!")
    this.router.navigate(['/campus'])

  }

  clear(){
    this.form.reset();
  }
}
