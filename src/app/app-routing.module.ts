import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { RegisterFormComponent } from './auth/components/register-form/register-form.component';
import { NotFoundComponent } from './share/components/not-found/not-found.component';
import { AccountModule } from './account/account.module';
import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  { path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  { path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
