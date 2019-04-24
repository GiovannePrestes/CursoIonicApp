import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  get(id: number){
    let url = 'http://localhost:17901/api/values/' + id;

    return this.http.get(url).toPromise();
  }

  delete(id: number){
    let url = 'http://localhost:17901/api/values/' + id;

    return this.http.delete(url).toPromise();
  }
  post(usuario: any){
    let url = 'http://localhost:17901/api/values/';
    let headers = new HttpHeaders({'content-Type':'application/json'});

    return this.http.post(url, usuario, {headers: headers}).toPromise();
  }

  put(usuario: any){
    let url = 'http://localhost:17901/api/values/';
    let headers = new HttpHeaders({'content-Type':'application/json'});

    return this.http.put(url, usuario, {headers: headers}).toPromise();
  }
}
