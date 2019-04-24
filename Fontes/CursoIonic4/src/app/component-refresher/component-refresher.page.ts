import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-refresher',
  templateUrl: './component-refresher.page.html',
  styleUrls: ['./component-refresher.page.scss'],
})
export class ComponentRefresherPage implements OnInit {

  message: string = 'Puxe para baixo para obter novas informações';

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event: any){
    setTimeout(()=>{
      this.message= 'Parabens, voce aprendeu a usar o refresher';
      event.target.complete();
    }, 2000);
  }

}
