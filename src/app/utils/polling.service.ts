import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export inteface PollingConfig {
  interval: number;
}

export const INTERVAL = new InjectionToken<number>('interval');

@Injectable()
export class PollingService {
  polling$ = timer(0, this.interval || 1000).pipe(shareReplay());

  constructor(@Option() @Inject(INTERVAL) private interval: number) {}
}
