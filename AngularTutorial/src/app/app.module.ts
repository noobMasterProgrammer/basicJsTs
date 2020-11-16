import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SampleService } from './sample/sample.service';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './binding/summary.pipe';
import { ComponentApiComponent } from './component-api/component-api.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    BindingComponent,
    SummaryPipe,
    ComponentApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
