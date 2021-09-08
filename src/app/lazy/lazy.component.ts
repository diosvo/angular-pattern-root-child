import { Component, OnInit } from '@angular/core';
import { PollingService } from '../utils/polling.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {
  constructor(public polling: PollingService) {}

  ngOnInit() {}
}
