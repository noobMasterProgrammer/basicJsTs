import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { BindingComponent } from './binding/binding.component';

const routes: Routes = [
  {path: '', redirectTo: '/sample', pathMatch: 'full'},
  {path: 'sample', component: SampleComponent, pathMatch: 'full' },
  {path: 'binding', component: BindingComponent , pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
