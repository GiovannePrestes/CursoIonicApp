import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-component-alert',
  templateUrl: './component-alert.page.html',
  styleUrls: ['./component-alert.page.scss'],
})
export class ComponentAlertPage implements OnInit {

  constructor(private alertCrtl: AlertController) { }

  ngOnInit() {
  }

  async abrirAlertSimples(){
    let alertSimples = await this.alertCrtl.create(
      {
        header: 'Alert Simples',
        subHeader: 'Sub Header',
        message: 'Essa é a mensagem do Alert Simples',
        buttons: ['OK']
      }
    );

    await alertSimples.present();
  }

  async abrirAlertComMultiplosBotoes(){
    let alertMultiplosBotoes = await this.alertCrtl.create(
      {
        header: 'Alert Múltiplo',
        message: 'Essa é a mensagem do Alert com Multiplos Botões',
        buttons: ['Cancelar', 'Abrir Modal','Excluir']
      }
    );

    await alertMultiplosBotoes.present();
  }

  async abrirAlertConfirmacao(){
    let alertConfirmacao = await this.alertCrtl.create(
      {
        header: 'Alert Confirmação',
        message: 'Deseja cancelar o <b>pedido</b>?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'Cancel',
            cssClass: 'secondary',
            handler: ()=>{
              console.log('Pedido Cancelado')
            }
          },
          {
            text: 'Pagar',
            handler: ()=>{
              console.log('Pago com Sucesso')
            }
          },
        ]
      }
    );

    await alertConfirmacao.present();
  }

  async abrirPrompt(){
    let alertPrompt = await this.alertCrtl.create({
      header: 'Acesso Restrito',
      inputs: [
        {
          name: 'Login',
          type: 'text',
          placeholder: 'Informe seu login'
        },
        {
          name: 'Senha',
          type: 'password',
          placeholder: 'Informe sua senha'
        }
      ],
      buttons:[
        {
          text: 'Novo',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ()=>{
            console.log('Aqui vai abrir a tela de cadastro de novos usuarios')
          }
        },
        {
          text: 'Entrar',
          handler: (data)=>{
            console.log('Bem Vindo!', data)
          }
        }
      ]
    });

    await alertPrompt.present();
  }

  async abrirRadio(){
    let alertRadio = await this.alertCrtl.create({
      header: 'Radio',
      inputs:[
        {
          name: 'Radio1',
          type: 'radio',
          label: 'Radio1',
          value: 'value1',
          checked: true
        },
        {
          name: 'Radio2',
          type: 'radio',
          label: 'Radio2',
          value: 'value2'
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ()=>{
            console.log('Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data)=>{
            console.log(data)
          }
        }
      ]
      
    });

    await alertRadio.present();
  }

  async abrirCheckbox(){
    let alertCheckbox = await this.alertCrtl.create({
      header: 'Checkbox',
      inputs:[
        {
          name: 'Checkbox1',
          type: 'checkbox',
          label: 'Checkbox1',
          value: 'value1',
          checked: true
        },
        {
          name: 'Checkbox2',
          type: 'radio',
          label: 'Checkbox2',
          value: 'value2'
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ()=>{
            console.log('Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data)=>{
            console.log(data)
          }
        }
      ]
      
    });

    await alertCheckbox.present();
  }

}
