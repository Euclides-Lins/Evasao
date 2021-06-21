import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Course } from 'src/app/models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = 'http://localhost:3000/cursos';

  constructor(private httpCliente: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCourse(): Observable<any> {
    return this.httpCliente.get<any>(this.url)
  }

  saveCourse(course) {
    return this.httpCliente.post<any>(this.url, JSON.stringify(course), this.httpOptions);
  }

  deleteCourse(course) {
    return this.httpCliente.delete<any>(this.url+'/'+course.id, this.httpOptions);
  }
}
