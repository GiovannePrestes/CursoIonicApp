import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApiPageInternoPage } from './api-page-interno.page';

const routes: Routes = [
  {
    path: '',
    component: ApiPageInternoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApiPageInternoPage]
})
export class ApiPageInternoPageModule {}
