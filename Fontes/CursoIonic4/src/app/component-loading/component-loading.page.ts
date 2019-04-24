import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-component-loading',
  templateUrl: './component-loading.page.html',
  styleUrls: ['./component-loading.page.scss'],
})
export class ComponentLoadingPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async showLoadingDefault(){
    let loading = await this.loadingCtrl.create({
      message: 'Processando...',
      duration: 2000
    });

    return await loading.present();
  }

  async showLoadingCustomize(){
    let loading = await this.loadingCtrl.create({
      spinner: "dots",
      message: 'Processando...',
      duration: 1500,
      translucent: true
    });

    return await loading.present();
  }

  async showLoadingConsumindoApi(){
    let loading = await this.loadingCtrl.create({
      spinner: "crescent",
      message: 'Processando...',
      translucent: true
    });

    setTimeout(()=>{
      loading.dismiss();
    }, 5000);

    return await loading.present();
  }
}
