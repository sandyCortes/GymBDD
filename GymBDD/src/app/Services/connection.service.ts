import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {}

  getUsers(){
    this.headers = new HttpHeaders({ 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Headers':'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, DELETE', 'Allow':'GET, POST, OPTIONS, PUT, DELETE'});
    return this.http.get('http://localhost:3000/user', { headers: this.headers });
  }
}
