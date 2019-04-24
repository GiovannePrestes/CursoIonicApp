import { ComponentModalInternoPage } from './../component-modal-interno/component-modal-interno.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.page.html',
  styleUrls: ['./component-modal.page.scss'],
})
export class ComponentModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showModal(){
    let modal = await this.modalCtrl.create({
      component: ComponentModalInternoPage,
      componentProps: {idade:19, nome: 'Giovanne'}
    });
    console.log('Coee ');
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    let alerta = await this.alertCtrl.create({
      header: 'Olá',
      message:  data.nome + ' Voce esta no modal principal com ' + data.idade + ' anos'
    });

    return await alerta.present();
  }
}
