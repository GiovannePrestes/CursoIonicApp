import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CepService } from '../cep.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { ApiPageInternoPage } from '../api-page-interno/api-page-interno.page';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {
  entradaCep: number;
  result: any;
  cepJson: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  erro: string;

  constructor(private usuarioService: UsuarioService, private cepService: CepService, private loadingCtrl: LoadingController, private modalCtrl: ModalController) { }

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

  async cep(){
    this.erro = "";
    let loading = await this.loadingCtrl.create({
      spinner: "bubbles",
      message: 'Processando...',
      translucent: true
    });
    loading.present();
    this.cepService.get(this.entradaCep)
    .then((response)=>{
      console.log(response);
      this.showModal(response);
      this.cepJson = response['cep'];
      this.uf = response['uf'];
      this.cidade = response['localidade'];
      this.bairro = response['bairro'];
      this.logradouro = response['logradouro'];
      loading.dismiss();
    })
    .catch((response)=>{
      this.result = JSON.stringify(response['cep']);
      console.log('Catch');
      this.erro = "Erro ao encontrar o CEP";
      loading.dismiss();
    });
  }
  async showModal(jsonsand){
    let modal = await this.modalCtrl.create({
      component: ApiPageInternoPage,
      componentProps: jsonsand
    });
    console.log('Coee ');
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);

  }

}
