import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DoQuizzModule } from './do-quizz/do-quizz.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { WidgetModule } from './widget/widget.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { CreateComponent } from './routes/create/create.component';
import { SetupComponent } from './routes/setup/setup.component';
import { AddQuestionComponent } from './routes/add-question/add-question.component';
import { FinishedComponent } from './routes/finished/finished.component';
import { QuizzService } from './quizz.service';
import { QuizzHttpService } from './quizz-http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegalComponent,
    CreateComponent,
    SetupComponent,
    AddQuestionComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,

    AppRoutingModule,
    LayoutModule,
    WidgetModule,
    DoQuizzModule,
  ],
  providers: [{ provide: QuizzService, useClass: QuizzHttpService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
