import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url = 'http://localhost:3000/departamento';
  constructor(private httpCliente: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCampus(): Observable<any> {
    return this.httpCliente.get<any>(this.url)
  }

  saveDepartment(department) {
    return this.httpCliente.post<any>(this.url, JSON.stringify(department), this.httpOptions)
  }

  deleteDepartment(department) {
    return this.httpCliente.delete<any>(this.url+'/'+department.id, this.httpOptions);
  }

}
