import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import {MenubarModule} from 'primeng/menubar';

import { AppComponent } from './app.component';
import { CalorieCounterComponent } from './calorie-counter/calorie-counter.component';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from './calorie-counter/autocomplete/autocomplete.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    CalorieCounterComponent,
    AutocompleteComponent,
    HeaderComponent,
    HomeComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    ChartModule,
    AppRoutingModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
