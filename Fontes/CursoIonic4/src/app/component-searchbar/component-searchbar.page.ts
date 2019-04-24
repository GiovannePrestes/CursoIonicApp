import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-searchbar',
  templateUrl: './component-searchbar.page.html',
  styleUrls: ['./component-searchbar.page.scss'],
})
export class ComponentSearchbarPage implements OnInit {

  nome: string = '';
  pessoas: any;
  pessoasFiltradas: any;

  constructor() { 
    this.pessoas=[
      {id:1, idade:40, nome:"Renato"},
      {id:2, idade:19, nome:"Jamile"},
      {id:3, idade:19, nome:"Augusto"},
      {id:4, idade:31, nome:"Marc"},
      {id:5, idade:20, nome:"Eric"},
      {id:6, idade:19, nome:"Giovanne"},
      {id:7, idade:42, nome:"Vilson"},
      {id:8, idade:23, nome:"Tardelli"},
      {id:9, idade:19, nome:"Luiza"}
    ];

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtrarItens(){
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome){
    this.pessoasFiltradas = this.pessoas;
    return this.pessoasFiltradas.filter((item)=>{
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

}
