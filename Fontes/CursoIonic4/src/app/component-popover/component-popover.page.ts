import { ComponentPopoverInternComponent } from './../component-popover-intern/component-popover-intern.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-component-popover',
  templateUrl: './component-popover.page.html',
  styleUrls: ['./component-popover.page.scss'],
})
export class ComponentPopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPopover(event: any){
    let popover = await this.popoverCtrl.create({
      component: ComponentPopoverInternComponent,
      event: event,
      translucent: true
    });

    return await popover.present();
  }
}
