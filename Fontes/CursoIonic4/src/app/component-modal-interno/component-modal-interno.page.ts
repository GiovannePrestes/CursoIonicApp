import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-component-modal-interno',
  templateUrl: './component-modal-interno.page.html',
  styleUrls: ['./component-modal-interno.page.scss'],
})
export class ComponentModalInternoPage implements OnInit {

  constructor(private navParam: NavParams, private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.alertaMessage();
  }

  async alertaMessage(){
    let idade = this.navParam.get('idade');
    let nome = this.navParam.get('nome');

    let alerta = await this.alertCtrl.create({
      header: 'Bem Vindo',
      message:  nome + ' Voce esta no modal interno com ' + idade + ' anos'
    });

    return await alerta.present();
  }

  async closeModal(){
    this.modalCtrl.dismiss({nome: 'Gabriel', idade: 21});
  }

  
}
