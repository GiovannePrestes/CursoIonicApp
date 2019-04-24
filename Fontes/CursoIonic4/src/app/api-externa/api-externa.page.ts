import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  result: any;
  constructor(private usuarioService: UsuarioService, private cepService: CepService) { }

  ngOnInit() {
  }

  get(){
    //chamar tela de aguarde
    this.usuarioService.get(4)
    .then((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela
    });
  }

  post(){
    let usuario = {id:50, nome: 'Giovanne'}
    this.usuarioService.post(usuario)
    .then((response)=>{
      this.result = JSON.stringify(response);
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
    });
  }

  put(){
    let usuario = {id:4, nome: 'Giovanna'}
    this.usuarioService.put(usuario)
    .then((response)=>{
      this.result = JSON.stringify(response);
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
    });
  }

  delete(){
    //chamar tela de aguarde
    this.usuarioService.delete(2)
    .then((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela
    });
  }

  cep(){
    //chamar tela de aguarde
    this.cepService.get(18017200)
    .then((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela
    });
  }

}
