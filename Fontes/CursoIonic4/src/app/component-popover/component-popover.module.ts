import { ComponentPopoverInternComponent } from './../component-popover-intern/component-popover-intern.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentPopoverPage } from './component-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentPopoverPage, ComponentPopoverInternComponent],
  entryComponents: [ComponentPopoverInternComponent]
})
export class ComponentPopoverPageModule {}
