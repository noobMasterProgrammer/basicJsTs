import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SampleService } from './sample/sample.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
