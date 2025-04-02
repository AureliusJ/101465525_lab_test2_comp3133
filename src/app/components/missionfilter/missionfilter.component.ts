import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  year: string = '';

  constructor(private router: Router) {}

  filter(): void {
    this.router.navigate(['/'], { queryParams: { year: this.year } });
  }

  reset(): void {
    this.year = '';
    this.router.navigate(['/']);
  }
}
