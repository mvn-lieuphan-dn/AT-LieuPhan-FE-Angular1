import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'home',component: HomeComponent
    }]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }