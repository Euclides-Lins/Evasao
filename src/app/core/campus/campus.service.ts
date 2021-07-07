import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  url = 'http://localhost:3001/campus';
  constructor(private httpCliente: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCampus(): Observable<any> {
    return this.httpCliente.get<any>(this.url)
  }

  saveCampus(campus) {
    return this.httpCliente.post<any>(this.url, JSON.stringify(campus), this.httpOptions)
  }

  deleteCampus(campus) {
    return this.httpCliente.delete<any>(this.url+'/'+campus.id, this.httpOptions);
  }
}
