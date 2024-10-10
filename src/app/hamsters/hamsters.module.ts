import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, QuizComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  exports: [HeaderComponent, QuizComponent, ListComponent, ViewComponent]
})
export class HamstersModule { }
