import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:3000/alunos';
  constructor(private httpCliente: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getStudent(): Observable<any> {
    return this.httpCliente.get<any>(this.url)
  }

  saveStudent(Student) {
    return this.httpCliente.post<any>(this.url, JSON.stringify(Student), this.httpOptions)
  }

  deleteStudent(student) {
    return this.httpCliente.delete<any>(this.url+'/'+student.id, this.httpOptions);
  }
}
