import { Component, OnInit } from '@angular/core';
import { PollingService } from '../utils/polling.service';

@Component({
  selector: 'app-home',
  template: `
    <p>Polling count times (home): {{ polling.polling$ | async }}</p>
  `
})
export class HomeComponent implements OnInit {
  constructor(public polling: PollingService) {}

  ngOnInit() {}
}
