import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PollingModule } from './utils/polling.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [
    HomeModule,
    BrowserModule,
    PollingModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
