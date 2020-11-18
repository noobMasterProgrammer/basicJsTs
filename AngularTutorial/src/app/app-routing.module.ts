import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { BindingComponent } from './binding/binding.component';
import { SampleResolverService } from './sample/sample-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: '/sample', pathMatch: 'full',resolve:{data:SampleResolverService}},
  {path: 'sample', component: SampleComponent, pathMatch: 'full' ,resolve:{resolver:SampleResolverService}},
  {path: 'binding', component: BindingComponent , pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
