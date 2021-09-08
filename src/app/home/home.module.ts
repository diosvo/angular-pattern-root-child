import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PollingModule } from '../utils/polling.module';

@NgModule({
  imports: [CommonModule, PollingModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
