import { ComponentCheckboxInternoMesesComponent } from './../component-checkbox-interno-meses/component-checkbox-interno-meses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentCheckboxPage } from './component-checkbox.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentCheckboxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentCheckboxPage, ComponentCheckboxInternoMesesComponent],
  entryComponents: [ComponentCheckboxInternoMesesComponent]
})
export class ComponentCheckboxPageModule {}
