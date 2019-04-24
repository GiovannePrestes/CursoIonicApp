import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-slides',
  templateUrl: './component-slides.page.html',
  styleUrls: ['./component-slides.page.scss'],
})
export class ComponentSlidesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  comecar(){
    this.navCtrl.navigateForward('home');
  }

}
