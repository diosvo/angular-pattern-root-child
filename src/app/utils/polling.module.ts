import { ModuleWithProviders, NgModule } from '@angular/core';
import { PollingComponent } from './polling/polling.component';
import { INTERVAL, PollingConfig, PollingService } from './polling.service';

@NgModule({
  declarations: [PollingComponent],
  exports: [PollingComponent]
})
export class PollingModule {
  // It's the same when we use providedIn: root
  static forRoot(): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [PollingService]
    };
  }

  // After 3s, lazy module has been loaded (it's too lazy to increase count++)
  static forChild(config: PollingConfig): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config.interval || 2000
        }
      ]
    };
  }

  // mix match: forRoot() & forChild() -> can remove 2 functions above
  static withConfig(
    config?: PollingConfig
  ): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config?.interval || 1000
        }
      ]
    };
  }
}
