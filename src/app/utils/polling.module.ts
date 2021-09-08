import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollingComponent } from './polling/polling.component';
import { PollingService } from './polling.service';

@NgModule({
  imports: [],
  declarations: [PollingComponent],
  providers: [PollingService]
})
export class PollingModule {}