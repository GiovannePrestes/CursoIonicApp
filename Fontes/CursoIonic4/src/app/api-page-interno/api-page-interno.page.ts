import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-api-page-interno',
  templateUrl: './api-page-interno.page.html',
  styleUrls: ['./api-page-interno.page.scss'],
})
export class ApiPageInternoPage implements OnInit {
  cepJson: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;

  constructor(private navParam: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cepJson = this.navParam.get('cep');
    this.logradouro = this.navParam.get('logradouro');
    this.bairro = this.navParam.get('bairro');
    this.cidade = this.navParam.get('localidade');
    this.uf = this.navParam.get('uf');
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }
}
