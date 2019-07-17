import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { CreateComponent } from './routes/create/create.component';
import { WidgetModule } from './widget/widget.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegalComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    WidgetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
