import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { CalorieCounterComponent } from './calorie-counter/calorie-counter.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path: '', 
    component: BmiComponent
  },
  {
    path: 'calculator',
    component: CalorieCounterComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
