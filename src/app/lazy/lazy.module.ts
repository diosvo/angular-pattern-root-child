import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { PollingModule } from '../utils/polling.module';

@NgModule({
  imports: [
    CommonModule,
    PollingModule.withConfig({
      interval: 3000
    }),
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent
      }
    ])
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
