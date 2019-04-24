import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Instalacao',
      url: '/instalacao',
      icon: 'download'
    },
    {
      title: 'Layout',
      url: '/layout',
      icon: 'color-palette'
    },
    {
      title: 'Componentes',
      url: '/componentes',
      icon: 'switch'
    },
    {
      title: 'Api Externa',
      url: '/api-externa',
      icon: 'at'
    },
    {
      title: 'Animacoes',
      url: '/animacoes',
      icon: 'beer'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
