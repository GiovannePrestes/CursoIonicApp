import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  get(cep: number){
    let url = 'https://viacep.com.br/ws/' + cep + '/json/';

    return this.http.get(url).toPromise();
  }
}
