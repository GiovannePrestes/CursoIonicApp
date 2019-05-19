import { ApiPageInternoPage } from './../api-page-interno/api-page-interno.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApiExternaPage } from './api-externa.page';

const routes: Routes = [
  {
    path: '',
    component: ApiExternaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApiExternaPage, ApiPageInternoPage],
  entryComponents: [ApiPageInternoPage]
})
export class ApiExternaPageModule {}
