import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuckyNumbersComponent } from './lucky-numbers/lucky-numbers.component';

const routes: Routes = [
  { path: '', redirectTo: '/lucky-numbers', pathMatch: 'full' },
  { path: 'lucky-numbers', component: LuckyNumbersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
