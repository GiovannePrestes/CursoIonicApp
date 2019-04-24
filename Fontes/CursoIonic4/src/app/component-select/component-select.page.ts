import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-select',
  templateUrl: './component-select.page.html',
  styleUrls: ['./component-select.page.scss'],
})
export class ComponentSelectPage implements OnInit {

  customAlertOptions: any={
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1,00 per topping',
    translucent: true
  };

  customPopoverOptions: any={
    header: 'Cor do cabelo',
    subHeader: 'Qual cor do seu cabelo?',
    message: 'informe a cor dominante',
    translucent: true
  };

  customActionSheetOptions: any={
    header: 'Cor do cabelo',
    subHeader: 'Qual cor do seu cabelo?',
    message: 'informe a cor dominante',
    translucent: true
  };

  constructor() { }

  ngOnInit() {
  }

}
