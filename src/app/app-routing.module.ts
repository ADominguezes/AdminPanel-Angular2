import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent }
];

export const routing = RouterModule.forRoot(routes);
