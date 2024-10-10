import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './hamsters/list/list.component';
import { ViewComponent } from './hamsters/view/view.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: ':id', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
