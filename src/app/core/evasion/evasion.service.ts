import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvasionService {

  url = 'http://localhost:8080/api/charts';
  constructor(private httpCliente: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getStudent(): Observable<any> {
    return this.httpCliente.get<any>(this.url)
  }
  getOneStudent(studentId): Observable<any> {
    return this.httpCliente.get<any>(this.url+"/"+studentId);
  }
  saveStudent(chart) {
    return this.httpCliente.post<any>(this.url, JSON.stringify(chart), this.httpOptions)
  }

}
