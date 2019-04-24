import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-component-toast',
  templateUrl: './component-toast.page.html',
  styleUrls: ['./component-toast.page.scss'],
})
export class ComponentToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async showToast(){
    let toast = await this.toastCtrl.create({
      message: 'Enviado via toast',
      duration: 2000
    });

    await toast.present();
  }

  async showToastTop(){
    let toast = await this.toastCtrl.create({
      message: 'Enviado via toast',
      duration: 2000,
      position: 'top'
    });

    await toast.present();
  }

  async showToastButton(){
    let toast = await this.toastCtrl.create({
      message: 'Enviado via toast',
      position: 'top',
      showCloseButton: true,
      translucent: true
    });

    await toast.present();
  }
}
