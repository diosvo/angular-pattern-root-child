import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class PollingService {
  polling$ = timer(0, 1000).pipe(shareReplay());

  constructor() {}
}