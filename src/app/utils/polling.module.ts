import { ModuleWithProviders, NgModule } from '@angular/core';
import { PollingComponent } from './polling/polling.component';
import { PollingService } from './polling.service';

@NgModule({
  declarations: [PollingComponent],
  exports: [PollingComponent]
})
export class PollingModule {
  static forRoot(): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [PollingService]
    };
  }
}
