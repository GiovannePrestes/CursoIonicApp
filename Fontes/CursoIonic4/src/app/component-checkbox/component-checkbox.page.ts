import { ComponentCheckboxInternoMesesComponent } from './../component-checkbox-interno-meses/component-checkbox-interno-meses.component';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-checkbox',
  templateUrl: './component-checkbox.page.html',
  styleUrls: ['./component-checkbox.page.scss'],
})
export class ComponentCheckboxPage implements OnInit {
  meses: any[] = [
    {nomeMes: 'Janeiro', valor: 1, marcado: false},
    {nomeMes: 'Fevereiro', valor: 2, marcado: false},
    {nomeMes: 'Março', valor: 3, marcado: false},
    {nomeMes: 'Abril', valor: 4, marcado: false},
    {nomeMes: 'Maio', valor: 5, marcado: true},
    {nomeMes: 'Junho', valor: 6, marcado: false},
  ]
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
    console.log(this.meses);
  }

  async exibirMeses(){
    let popover = await this.popoverCtrl.create({
      component: ComponentCheckboxInternoMesesComponent,
      event: event,
      translucent: true
    });
    console.log(this.meses);
  }

}
